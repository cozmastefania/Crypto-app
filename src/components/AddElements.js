import React from "react";
import AddDesign from "./AddDesign";
import Elements from "./Elements";

const AddElements = () => {
    return ( 
        <div className="fixed w-100 h-100 opacity-80 bg-purple-800 inset-0 z-50 flex items-center justify-center">
        <AddDesign/>
        <Elements/>
        </div>
    )
}

export default AddElements;