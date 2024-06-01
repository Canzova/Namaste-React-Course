import { useState } from "react";
import { formSubmission } from "../utils/formSubmission";
import { useTranslation } from "react-i18next";
import friendlyErrorMessage from "../utils/errors";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { USER_LOGO } from "../utils/constants";

const useFormSubmission = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleFormSubmission = (signIn, email, password, name) => {
    let data = null;
    if (signIn === "Sign Up") {
      if (email.current.value.length !== 0) {
        data = formSubmission(
          t,
          email.current.value,
          password.current.value
        );
      }
      setErrorMessage(data);
    }
    if (data === null) {
      // Sign Up
      if (signIn === "Sign Up") {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // User Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_LOGO,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } =
                  auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    name: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const message = friendlyErrorMessage(errorCode);
            setErrorMessage(message);
          });
      } else {
        // Sign in
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // User Signed in
          })
          .catch((error) => {
            const errorCode = error.code;
            const message = friendlyErrorMessage(errorCode);
            setErrorMessage(message);
          });
      }
    }
  };

  return { errorMessage, handleFormSubmission };
};

export default useFormSubmission;
