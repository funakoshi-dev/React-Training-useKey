import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import { useKey } from 'react-use';

const initialCount = 0;
function App() {
  const [count, setCount] = useState(initialCount);
  const decrement = () => setCount((count) => --count);
  const increment = () => setCount((count) => ++count);
  useKey('ArrowDown', decrement);
  useKey('ArrowUp', increment);
  return (
    <div className="App">
      <CounterDisplay counter={{ count, decrement, increment }} />
    </div>
  );
}

export default App;
