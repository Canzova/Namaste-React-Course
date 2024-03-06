import { useEffect, useState } from "react";
const useInternetStatus = () => {
  const [internetStatus, setinternetStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setinternetStatus(false);
    });

    window.addEventListener("online", () => {
      setinternetStatus(true);
    });
  }, []);

  return internetStatus;
};
export default useInternetStatus;
