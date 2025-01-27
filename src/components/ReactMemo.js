import React from 'react';

const ReactMemoComponent = React.memo(({ tasks }) => {
  return (
    <div>
      <h2>React.memo Component</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoComponent;
