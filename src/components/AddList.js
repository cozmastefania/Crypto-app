import React from 'react';
import Button from './Button';

const AddList = () => {
    return (
        <div>
            <div className="px-4 py-5 sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">
                WTF - USD
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                1.11
              </dd>
            </div>
            <div className="w-full border-t border-gray-200"></div>
            <Button/>
          </div>
    )
}

export default AddList;