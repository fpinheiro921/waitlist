// api/subscribe.ts
import admin from 'firebase-admin';

// Helper function to initialize Firebase Admin SDK.
// This prevents re-initialization on every serverless function invocation in a hot-start scenario.
function initializeFirebaseAdmin() {
  // Check if the app is already initialized to prevent errors.
  if (admin.apps.length) {
    return admin.firestore();
  }

  try {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;

    // Check for the required environment variables.
    if (!projectId || !clientEmail || !privateKeyRaw) {
      console.error("Firebase Admin SDK: One or more required Firebase environment variables are not set.", {
          projectId: !!projectId,
          clientEmail: !!clientEmail,
          privateKey: !!privateKeyRaw
      });
      throw new Error("One or more required Firebase environment variables are not set.");
    }

    // The private key from the environment variable often has its newlines escaped as '\\n'.
    // We need to replace them with actual newline characters '\n' for the SDK to parse it correctly.
    const privateKey = privateKeyRaw.replace(/\\n/g, '\n');

    // --- START NEW DEBUG LOGGING ---
    console.log("Firebase Admin SDK: Attempting to initialize with the following credentials:");
    console.log("Project ID:", projectId);
    console.log("Client Email:", clientEmail);
    console.log("Private Key Snippet (first 30 chars):", privateKey.substring(0, 30) + "...");
    console.log("Private Key Snippet (last 30 chars):", "..." + privateKey.substring(privateKey.length - 30));
    // --- END NEW DEBUG LOGGING ---

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: projectId,
        clientEmail: clientEmail,
        privateKey: privateKey,
      }),
    });

    console.log("Firebase Admin SDK: Initialization successful.");
  } catch (error) {
    console.error("Firebase Admin SDK: Initialization failed.", error);
    // Re-throw the error to be caught by the handler's try-catch block.
    throw error;
  }

  return admin.firestore();
}

export default async function handler(req, res) {
  // Only allow POST requests.
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { firstName, email, consent } = req.body;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // 1. Validate Input
  if (!firstName || !email || !emailRegex.test(email) || !consent) {
    console.warn("Invalid submission received", { firstName, email, consent: !!consent });
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
      firstName: firstName,
      email: email,
      consent: consent,
      createdAt: admin.firestore.FieldValue.serverTimestamp(), // Add a server-side timestamp.
    });

    console.log(`Successfully added to waitlist: ${email}`);
    return res.status(200).json({ message: 'Success' });

  } catch (error) {
    // The detailed error from initializeFirebaseAdmin will be logged by Vercel.
    console.error("Error in handler after trying to initialize Firebase:", error);
    // Return 503 Service Unavailable for any failure with the database connection.
    return res.status(503).json({ message: 'Service Unavailable - Initialization Failed' });
  }
}
