import React from 'react';
import { TodoItemProps } from './TodoItem';
import produce from 'immer';

// Reducer & Context
export type TodoState = {
  items: TodoItemProps[];
};

export type TodoAction =
  | {
      type: 'CREATE';
      data: {
        text: string;
      };
    }
  | {
      type: 'TOGGLE';
      data: {
        id: number;
      };
    }
  | {
      type: 'REMOVE';
      data: {
        id: number;
      };
    };

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
  const { items } = state;

  switch (action.type) {
    case 'CREATE': {
      const nextId = items.length ? items[items.length - 1].id + 1 : 0;

      return produce(state, (draft) => {
        draft.items.push({
          id: nextId,
          text: action.data.text,
          isDone: false,
        });
      });
    }

    case 'TOGGLE': {
      return produce(state, (draft) => {
        draft.items.map((item) => {
          if (item.id === action.data.id) {
            item.isDone = !item.isDone;
          }

          return item;
        });
      });
    }

    case 'REMOVE': {
      return produce(state, (draft) => {
        draft.items = draft.items.filter((item) => item.id !== action.data.id);
      });
    }
  }
}

export const TodoStateContext = React.createContext<TodoState | null>(null);
export const TodoDispatchContext = React.createContext<
  React.Dispatch<TodoAction>
>(() => null);
