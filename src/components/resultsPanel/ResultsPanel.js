import React from 'react'
// import ResultItem from './result/ResultItem';
import './resultsPanel.sass'

const ResultsPanel = ({allWords}) => {
    return (
        <div className='container'>
            {allWords.length > 0 ? allWords.map((element, i) => {
               return ( <div className='result' key={i}>{element}</div>)
            }) : <h2> Совпадений не найдено</h2>}
        </div>
    )
}

export default ResultsPanel
