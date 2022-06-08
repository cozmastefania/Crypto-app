import React from "react";
import AddElements from "./AddElements";
import '../Style.css';

const Body = () => {
  return (
    <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
     <AddElements/>     
    </div>
  );
};

export default Body;
