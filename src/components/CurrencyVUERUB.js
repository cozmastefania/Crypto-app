import React from 'react';
import VueRub from './VueRub';
import ButtonVueRub from './ButtonVueRub';

const CurencyVUERUB = () => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid border-4 cursor-pointer">
        <VueRub/>
        <div className="w-full border-t border-gray-200"></div>
        <ButtonVueRub/>
      </div>
    )
}

export default CurencyVUERUB;