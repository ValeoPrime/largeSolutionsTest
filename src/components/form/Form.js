import React from "react";
import './form.sass'

const Form = () => {
  return (
    <form className="mainForm">
      <input type="text" />
      <label>
        <input type="checkbox" />
        Сравнивать с учетом регистра
      </label>

      <button>По длинне строк</button>
      <button>По подстроке</button>
    </form>
  );
};

export default Form;
