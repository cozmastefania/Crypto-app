import React from 'react';
import DogeUsd from './DogeUsd';
import ButtonDogeUsd from './ButtonDogeUsd';

const CurrencyDOGEUSD = () => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer">
            <DogeUsd/>
            <div className="w-full border-t border-gray-200"></div>
            <ButtonDogeUsd/>
          </div>
    )
}

export default CurrencyDOGEUSD;