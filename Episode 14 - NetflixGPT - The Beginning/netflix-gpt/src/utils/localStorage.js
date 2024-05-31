export const getLocalData = () => {
  const sign_value = localStorage.getItem("temp");
  if (sign_value) {
    // We are converting back our data stored in local storage from string to the original data type they were
    return JSON.parse(localStorage.getItem("temp"));
  } else {
    return "Sign In";
  }
};

export const getLocalData2 = () => {
  const value = localStorage.getItem("temp2");
  if (value) {
    return JSON.parse(localStorage.getItem("temp2"));
  } else {
    return ["New to Netflix ?", "Sign Up now."];
  }
};
