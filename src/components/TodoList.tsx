import React from 'react';
import { TodoItem } from './TodoItem';
import { MdAdd } from 'react-icons/md';

export function TodoCreate() {
  return (
    <div className="rounded-full h-6 w-6 bg-green-300 mr-4 flex items-center justify-center text-white">
      <MdAdd />
    </div>
  );
}

export function TodoList() {
  return (
    <div className="flex-1 flex-col overflow-y-auto py-4 px-8 justify-center">
      <TodoItem />
      <TodoItem />

      <TodoCreate />
    </div>
  );
}
