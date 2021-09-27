import React, { useEffect } from 'react';

import { TodoTemplate } from './components/TodoTemplate';
import { TodoHead } from './components/TodoHead';
import { TodoList } from './components/TodoList';

export default function App() {
  useEffect(() => {
    setBackground('bg-gray-200');
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

function setBackground(className: string) {
  const body = document.querySelector('body');
  body?.classList.add(className);
}
