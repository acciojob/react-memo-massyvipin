import React, { useMemo } from 'react';

const UseMemoComponent = ({ tasks }) => {
  const taskCount = useMemo(() => tasks.length, [tasks]);

  return <div>Total tasks: {taskCount}</div>;
};

export default UseMemoComponent;
