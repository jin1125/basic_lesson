import React, { useEffect, useState } from "react";

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);

  const incrementNum = () => {
    console.log("mouse");
    setCurrentNum((preNumber) => preNumber + 1);
  };

  useEffect(() => {
    console.log("clean");
    window.addEventListener("mousedown", incrementNum);
    return () => {
      console.log("cleanup");
      window.removeEventListener("mousedown", incrementNum);
    };
  }, []);

  return <div>{currentNum}</div>;
};

export default CleanUp;
