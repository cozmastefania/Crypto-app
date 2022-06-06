import React from "react";
import AddLabel from "./AddLabel";
import AddInput from "./AddInput";
import AddSpan from "./AddSpan";

const AddStructure = () => {
  return (
    <div className="max-w-xs">
      <AddLabel/>
      <AddInput/>
      <AddSpan/>
      <div className="text-sm text-red-600">Такой тикер уже добавлен</div>
    </div>
  );
};

export default AddStructure;
