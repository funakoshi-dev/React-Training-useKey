import React from "react";
import background from "./img/Map.jpeg";
import { Link } from 'react-router-dom';

const Page1 = ({ counter }) => {
    return (
        <div style={{ backgroundImage: `url(${background})`, width: '1920px', height: '1080px' }}>
            <button onClick={counter.decrement}> - </button>
            <span>{counter.count}</span>
            <button onClick={counter.increment}> + </button>

        </div>
    );
}

export default Page1;