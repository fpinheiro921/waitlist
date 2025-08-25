// api/subscribe.ts
import * as admin from 'firebase-admin';

// Helper function to initialize Firebase Admin SDK.
// This prevents re-initialization on every serverless function invocation in a hot-start scenario.
function initializeFirebaseAdmin() {
  // Check if the app is already initialized to prevent errors.
  if (!admin.apps.length) {
    // The FIREBASE_SERVICE_ACCOUNT_KEY should be the full JSON content of the service account key.
    // This is read from Vercel environment variables.
    if (!process.env.VITE_FIREBASE_SERVICE_ACCOUNT_KEY) {
        throw new Error("VITE_FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set.");
    }
    const serviceAccount = JSON.parse(process.env.VITE_FIREBASE_SERVICE_ACCOUNT_KEY);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  return admin.firestore();
}

export default async function handler(req, res) {
  // Only allow POST requests.
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { email, consent } = req.body;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // 1. Validate Input
  if (!email || !emailRegex.test(email) || !consent) {
    console.warn("Invalid submission received", { email, consent: !!consent });
    return res.status(400).json({ message: 'Invalid input' });
  }

  try {
    const db = initializeFirebaseAdmin();

    // 2. Check if the email already exists to avoid duplicates.
    const snapshot = await db.collection('waitlist_signups').where('email', '==', email).limit(1).get();
    if (!snapshot.empty) {
      console.log(`Email already on waitlist: ${email}`);
      // Treat this as a success for the user, as they are already on the list.
      return res.status(200).json({ message: 'Success' });
    }

    // 3. Add the new email to the 'waitlist_signups' collection in Firestore.
    await db.collection('waitlist_signups').add({
      email: email,
      consent: consent,
      createdAt: admin.firestore.FieldValue.serverTimestamp(), // Add a server-side timestamp.
    });

    console.log(`Successfully added to waitlist: ${email}`);
    return res.status(200).json({ message: 'Success' });

  } catch (error) {
    console.error("Error writing to Firestore:", error);
    // Return 503 Service Unavailable for any failure with the database connection.
    return res.status(503).json({ message: 'Service Unavailable' });
  }
}
