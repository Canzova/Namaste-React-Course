export const formSubmission = (email, password) => {
  // Check email
  const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  // Check password
  const passwordCheck =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!emailCheck) return "Please Enter a valid Email id";
  if (!passwordCheck)
    return "Password must conatin minimum eight characters, at least one letter, one number and one special character";

  // If every thing is fine
  return null;
};
