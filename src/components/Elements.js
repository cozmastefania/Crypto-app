import React from "react";
import AddSection from "../../src/components/AddSection";
import AddList from "./AddList";
import Currency from "./Currency";
import VueRub from "./VueRub";
import BtcUsd from "./BtcUsd";
import DogeUsd from "./DogeUsd";
import VueUsd from "./VueUsd";
import ButtonBtcUsd from "./ButtonBtcUsd";
import ButtonVueRub from "./ButtonVueRub";
import ButtonDogeUsd from "./ButtonDogeUsd";
import ButtonVueUsd from "./ButtonVueUsd";
import '../Style.css';

const Elements = () => {
  const currecytype = [
    {
      type: "VUE-RUB",
      class:
        "bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid border-4 cursor-pointer",
      secclass: "w-full border-t border-gray-200",
    },

    {
      type: "BTC-USD",
      class:
        "bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer",
      secclass: "w-full border-t border-gray-200",
    },

    {
      type: "DOGE-USD",
      class:
        "bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer",
      secclass: "w-full border-t border-gray-200",
    },

    {
      type: "VUE-USD",
      class: "relative",
    },
  ];
  return (
    <div className="container">
      <AddSection />
      <hr className="w-full border-t border-gray-600 my-4" />
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer">
          <AddList />
        </div>
        <Currency
          type={currecytype[0].type}
          class={currecytype[0].class}
          secclass={currecytype[0].secclass}
        >
          <VueRub />
          <div className="w-full border-t border-gray-200"></div>
          <ButtonVueRub/>
        </Currency>

        <Currency
          type={currecytype[1].type}
          class={currecytype[1].class}
          secclass={currecytype[1].secclass}
        >
          <BtcUsd />
          <div className="w-full border-t border-gray-200"></div>
          <ButtonBtcUsd />
        </Currency>

        <Currency
          type={currecytype[2].type}
          class={currecytype[2].class}
          secclass={currecytype[2].secclass}
        >
          <DogeUsd />
          <div className="w-full border-t border-gray-200"></div>
          <ButtonDogeUsd />
        </Currency>

      </dl>
      <hr className="w-full border-t border-gray-600 my-4" />
      <Currency type={currecytype[3].type} class={currecytype[3].class}>
        <VueUsd />
        <ButtonVueUsd />
      </Currency>
    </div>
  );
};

export default Elements;
