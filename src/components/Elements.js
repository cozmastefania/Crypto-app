import React from 'react';
import AddSection from '../../src/components/AddSection';
import AddList from './AddList';
import CurrencyBTCUSD from './CurrencyBTCUSD';
import CurrencyDOGEUSD from './CurrencyDogeUsd';
import CurencyVUERUB from './CurrencyVUERUB';
import CurrencyVUEUSD from './CurrencyVUEUSD';

const Elements = () => {
    return (
        
        <div className="container">
        <AddSection/>
        <hr className="w-full border-t border-gray-600 my-4" />
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer">
            <AddList/>
          </div>
          <CurencyVUERUB/> 
          <CurrencyBTCUSD/>
          <CurrencyDOGEUSD/>
        </dl>
        <hr className="w-full border-t border-gray-600 my-4" />
        <CurrencyVUEUSD/>
    </div>
    )
}

export default Elements;