import React from "react";
import "./form.sass";

const Form = ({searchMatch,comparisonLength, inputValue, inputHandler, checkboxValue, checkboxHandler}) => {
  return (
    <form className="mainForm">
      <input onChange={inputHandler} type="text" value={inputValue}/>
      <label>
        <input type="checkbox" checked={checkboxValue} onChange={checkboxHandler}/>
        Сравнивать с учетом регистра
      </label>

      <button onClick={comparisonLength}>По длинне строк</button>
      <button onClick={searchMatch}>По подстроке</button>
    </form>
  );
};

export default Form;
