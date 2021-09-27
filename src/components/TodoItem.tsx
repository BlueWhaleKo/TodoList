import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';

function CheckCircle() {
  return (
    <>
      <div className="rounded-full h-6 w-6 border-2 border-gray-200 mr-4"></div>
    </>
  );
}

function TodoText() {
  return <div>HIHIHIHIHI</div>;
}

function Remove() {
  return (
    <div className="text-gray-300 flex flex-1 cursor-pointer justify-end">
      <MdDelete />
    </div>
  );
}

export function TodoItem() {
  return (
    <div className="flex flex-row items-center my-2">
      <CheckCircle />
      <TodoText />
      <Remove />
    </div>
  );
}
