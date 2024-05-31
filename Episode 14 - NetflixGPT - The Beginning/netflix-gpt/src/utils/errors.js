// Function to get user-friendly error messages
function getFriendlyErrorMessage(errorCode) {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'This email is already in use. Please use a different email.';
      case 'auth/invalid-email':
        return 'The email address is not valid. Please enter a valid email.';
      case 'auth/operation-not-allowed':
        return 'This operation is not allowed. Please contact support.';
      case 'auth/weak-password':
        return 'The password is too weak. Please enter a stronger password.';
      case 'auth/user-disabled':
        return 'This user account has been disabled. Please contact support.';
      case 'auth/user-not-found':
        return 'No user found with this email. Please sign up first.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
    case 'auth/invalid-credential' :
        return "Invalid login credientials"

      default:
        return 'An unknown error occurred. Please try again later.';
    }
  }
  export default getFriendlyErrorMessage;

  