import React, { useReducer } from 'react';
import {
  TodoDispatchContext,
  todoReducer,
  TodoStateContext,
} from './TodoContext';

export const initialTodoContext = {
  items: [
    {
      id: 0,
      text: "I'm not Done",
      isDone: false,
    },
    {
      id: 1,
      text: "I'm Done",
      isDone: true,
    },
  ],
};

export function TodoTemplate(props: {
  children?: JSX.Element | JSX.Element[];
}) {
  const { children } = props;
  const [state, dispatch] = useReducer(todoReducer, initialTodoContext);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <div className="flex flex-col bg-white w-96 h-96 rounded-md shadow-md my-24 mx-auto">
          {children}
        </div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
