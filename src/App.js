import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.sass";
import Form from "./components/form/Form";
import ResultsPanel from "./components/resultsPanel/ResultsPanel";

function App() {
  const [allWords, setAllWords] = useState([]);
  const [filterWords, setFilterWords] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [checkboxValue, setcheckboxValue] = useState(false);

  useEffect(() => {
    axios("data/allWords.json")
      .then((response) => {
        setAllWords(Object.values(response.data[0]));
        setFilterWords(Object.values(response.data[0]));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const inputHandler = (e) => {
    setinputValue(e.target.value);
  };

  const checkboxHandler = (e) => {
    setcheckboxValue(!checkboxValue);
  };

  const comparisonLength = (e) => {
    e.preventDefault();

    if (!!Number(inputValue) === !!NaN) {
      setFilterWords(["Введенное значение не является числом"]);
      setinputValue('')
    } else {
      setFilterWords(allWords.filter((item) => item.length > Number(inputValue)));
      setinputValue('')
    }
  };

  const searchMatch = (e) => {
    e.preventDefault();

    if(checkboxValue){
      console.log('С учетом регистра');
      setFilterWords(
        allWords.filter((item) => item.indexOf(inputValue) > -1)
      );
      setinputValue('')
    } else {
      console.log('Без учета регистра');
      setFilterWords(
        allWords.filter((item) => item.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
      );
      setinputValue('')
    }
    
  };

  return (
    <div className="App">
      <Form
        comparisonLength={comparisonLength}
        searchMatch={searchMatch}
        inputValue={inputValue}
        inputHandler={inputHandler}
        checkboxValue={checkboxValue}
        checkboxHandler={checkboxHandler}
      />
      <ResultsPanel allWords={filterWords} />
    </div>
  );
}

export default App;
