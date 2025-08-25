import React from 'react';

// Main Icon for the App Header
export const ScienceIcon = ({ className }: { className?: string }) => (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
        science
    </span>
);

// Icon for Success State
export const CheckCircleIcon = ({ className }: { className?: string }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    task_alt
  </span>
);

// Icon for Error Messages
export const ErrorCircleIcon = ({ className }: { className?: string }) => (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
        error
    </span>
);

// Icon for Loading Spinner
export const LoadingSpinnerIcon = ({ className }: { className?: string }) => (
  <span className={`material-symbols-outlined animate-spin ${className}`} aria-hidden="true">
    progress_activity
  </span>
);
