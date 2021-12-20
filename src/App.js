import React, { useState } from 'react';
import { useKey } from 'react-use';
import Page1 from './Page1';
import Page2 from './Page2';

const initialCount = 0;
function App() {
  const [count, setCount] = useState(initialCount);
  const decrement = () => setCount((count) => --count);
  const increment = () => setCount((count) => ++count);
  useKey('ArrowDown', decrement);
  useKey('ArrowUp', increment);
  return (
    <div className="App">
      <Page2 counter={{ count, decrement, increment }} />
    </div>
  );
}

export default App;
