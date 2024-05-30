export const formSubmission = (t, email, password) => {
  // Check email
  const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  // Check password
  const passwordCheck =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!emailCheck) return t("email_code");
  if (!passwordCheck)
    return t("pass_code");

  // If every thing is fine
  return null;
};