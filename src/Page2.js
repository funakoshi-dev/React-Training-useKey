import React from "react";
import background from "./img/Indoor.jpeg";
import { Link } from 'react-router-dom';

const Page2 = ({ counter }) => {
    return (
        <div style={{ backgroundImage: `url(${background})`, width: '1920px', height: '1080px' }}>
            <button onClick={counter.decrement}> - </button>
            <span>{counter.count}</span>
            <button onClick={counter.increment}> + </button>
        </div>
    );
}

export default Page2;