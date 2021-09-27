import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodoStateContext } from './TodoContext';
import { TodoCreate } from './TodoCreate';

export function TodoList() {
  const state = useContext(TodoStateContext);

  return (
    <div className="flex-1 flex-col overflow-y-auto py-4 px-8 justify-center">
      {state?.items.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
      <TodoCreate />
    </div>
  );
}
