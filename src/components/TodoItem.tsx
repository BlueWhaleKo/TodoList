import React, { useCallback, useContext } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { TodoDispatchContext } from './TodoContext';

export function TodoItem(props: TodoItemProps) {
  const { isDone, id, text } = props;

  return (
    <div className="flex flex-row items-center my-2">
      <CheckCircle id={id} isDone={isDone} />
      <TodoText isDone={isDone} text={text} />
      <Remove id={id} />
    </div>
  );
}

export type TodoItemProps = {
  id: number;
  isDone: boolean;
  text: string;
};

function CheckCircle(props: { id: number; isDone: boolean }) {
  const { id, isDone } = props;
  const dispatch = useContext(TodoDispatchContext);

  const onClick = () => {
    dispatch({
      type: 'TOGGLE',
      data: { id },
    });
  };

  const commonClass =
    'rounded-full h-6 w-6 border-2 border-gray-200 mr-4 flex justify-center items-center cursor-pointer ';
  if (!isDone) {
    return <div onClick={onClick} className={commonClass}></div>;
  }

  return (
    <div>
      <div
        onClick={onClick}
        className={`${commonClass} border-green-400 text-green-400 `}
      >
        <MdDone />
      </div>
    </div>
  );
}

function TodoText(props: { isDone: boolean; text: string }) {
  const { isDone, text } = props;

  if (isDone) {
    return <div className="text-gray-200 flex-1">{text}</div>;
  }

  return <div className="flex-1">{text}</div>;
}

function Remove(props: { id: number }) {
  const { id } = props;
  const dispatch = useContext(TodoDispatchContext);

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      data: { id },
    });
  };

  return (
    <div
      onClick={onRemove}
      className="text-gray-300 cursor-pointer hover:text-red-400"
    >
      <MdDelete />
    </div>
  );
}
