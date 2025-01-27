import React, { useState, useMemo } from 'react';
import UseMemoComponent from './UseMemo';
import ReactMemoComponent from './ReactMemo';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    setTasks([...tasks, 'New todo']);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addCustomTask = () => {
    if (inputValue.trim().length > 5) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <button onClick={addTask}>Add todo</button>
      <button onClick={incrementCounter}>Increment</button>
      <div>Counter: {counter}</div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add custom task"
      />
      <button onClick={addCustomTask}>Submit</button>
      <ul>
        {memoizedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <UseMemoComponent tasks={memoizedTasks} />
      <ReactMemoComponent tasks={memoizedTasks} />
    </div>
  );
};

export default App;


