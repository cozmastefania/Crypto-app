import React from 'react';
import '../Style.css';

const AddInput = () => {
    return (
        <div className="mt-1 relative rounded-md shadow-md">
        <input
          type="text"
          name="wallet"
          id="wallet"
          className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
          placeholder="Например DOGE"
        />
      </div>
    )
}

export default AddInput;