import React, { useState } from "react";
import { useEffect } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    console.log("useEffect");
    const handlerOnline = () => {
      setOnline(true);
      console.log("online");
    };
    const handleOffline = () => {
      setOnline(false);
      console.log("offline");
    };
    window.addEventListener("online", handlerOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOffline);
      window.removeEventListener("offline", handlerOnline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
