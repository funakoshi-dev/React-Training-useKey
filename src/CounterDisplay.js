import React from "react";

const CounterDisplay = ({counter}) => {
    return(
        <div>
            <button onClick={counter.decrement}> - </button>
            <span>{counter.count}</span>
            <button onClick={counter.increment}> + </button>
        </div>
    );
}

export default CounterDisplay;