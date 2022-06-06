import React from "react";
import BtcUsd from "./BtcUsd";
import ButtonBtcUsd from "./ButtonBtcUsd";

const CurrencyBTCUSD = () => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer">
            <BtcUsd/>
            <div className="w-full border-t border-gray-200"></div>
            <ButtonBtcUsd/>
          </div>
    )
}

export default CurrencyBTCUSD;