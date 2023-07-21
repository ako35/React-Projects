import React, { useState } from "react";
import './text.css'
import data from './data'

const Paragraph = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([])

    const clear = () => {
        setText([])
        setCount(0)
    }

    const handleGenerate = (e) => {
        e.preventDefault();
        const arrText= data.slice(0,count)
        setText(arrText)
    }

  return (
    <section className="section-center">
      <h3>HOW MANY PARAGRAPS</h3>
      <form action="">
        <label htmlFor="amount">Paragraphs </label>
        <input
          type="number"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" onClick={handleGenerate}>
          Generate
        </button>
        <button className="btn" onClick={clear}>
          Clear
        </button>
      </form>

      <div className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
};

export default Paragraph;
