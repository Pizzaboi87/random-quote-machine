import { useEffect, useState } from 'react';
import RandomQuote from './RandomQuote';
import image from './Image.js';

let current;
const Quote = () => {

    const [selector, setSelector] = useState(getRandomInt(RandomQuote.length))
    let previous = selector;

    useEffect(() => {
        setWallpaper();
        typeWriter();
    })

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getQuote(){
        document.getElementById("text").innerHTML = "";
    do {
        current = getRandomInt(RandomQuote.length)
        setSelector(current)
        } while (current === previous);
        previous = current;
        typeWriter();
        setWallpaper();
    }

    let step = 0;
    let txt = RandomQuote[selector].text;
    let speed = 50;

    function typeWriter() {
    if (step < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(step);
    step++;
    setTimeout(typeWriter, speed);
    }
    }

    function setWallpaper(){
        document.body.style.backgroundPositionY = 0;
        switch (RandomQuote[selector].author){
            case "Ashoka Tano":
                document.body.style.backgroundImage = `url(${image[0]})`;
                break;
            case "C3-PO":
                document.body.style.backgroundImage = `url(${image[1]})`;
                document.body.style.backgroundPositionY = "50%";
                break;
            case "Darth Vader":
                document.body.style.backgroundImage = `url(${image[2]})`;
                break;
            case "Han Solo":
                document.body.style.backgroundImage = `url(${image[3]})`;
                break;
            case "Jyn Erso":
                document.body.style.backgroundImage = `url(${image[4]})`;
                break;
            case "Kylo Ren":
                document.body.style.backgroundImage = `url(${image[5]})`;
                break;
            case "Leia Organa":
                document.body.style.backgroundImage = `url(${image[6]})`;
                break;
            case "Luke Skywalker":
                document.body.style.backgroundImage = `url(${image[7]})`;
                break;
            case "Master Yoda":
                document.body.style.backgroundImage = `url(${image[8]})`;
                break;
            case "Obi-Wan Kenobi":
                document.body.style.backgroundImage = `url(${image[9]})`;
                break;
            case "Queen Amidala":
                document.body.style.backgroundImage = `url(${image[10]})`;
                break;
            case "Qui-Gon Jinn":
                document.body.style.backgroundImage = `url(${image[11]})`;
                break;
            default:
                document.body.style.backgroundImage = `url(${image[12]})`;
                break;
        }
    }

//ID used because of freeCodeCamp's task
    return (
        <div id="quote-box" className="quote-box">
            <h3 id="text" className="text"></h3>
            <h4 id="author" className="author">{RandomQuote[selector].author}</h4>
            <button id="new-quote" className="new-quote" onClick={() => getQuote()}>Get A New Quote</button>
            <a id="tweet-quote" className="tweet-quote" href={`https://twitter.com/intent/tweet?text="${RandomQuote[selector].text}" — ${RandomQuote[selector].author}`} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter"></i>
                Tweet It!
            </a>
        </div>
    )
}

export default Quote;