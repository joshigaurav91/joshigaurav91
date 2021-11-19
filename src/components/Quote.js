import quotes from "../quotes"
import { useState } from 'react'

function Quote() {

    const [index, setIndex] = useState(-1)
    
    function addQuote(){

        let newIndex;

        do{
            newIndex = Math.floor(Math.random() * quotes.length)
        }while(newIndex === index)
            
        setIndex(newIndex);
    }

    return (
        <section>
            {   index === -1 ? 
                <p>Click the button to get a quote.</p> : 
                <blockquote>
                    <p>{quotes[index].quote}</p>
                    <footer>- {quotes[index].author}</footer>
                    </blockquote>}
            <button type="button" onClick={addQuote}>{index === -1 ? 'Get Quote':'Get Another Quote'}</button>
        </section>
    )
}

export default Quote
