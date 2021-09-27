import React, { useCallback, useContext, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { TodoDispatchContext } from './TodoContext';

function TodoCreateInput(props: {
  input: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onSubmit: (e: React.FormEvent<any>) => void;
}) {
  const { input, onChange, onSubmit } = props;
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={input}
          className="shadow border-gray-200 h-6 focus:outline-none appearance-none"
        />
      </form>
    </>
  );
}

export function TodoCreate() {
  const [input, setInput] = useState('');
  const dispatch = useContext(TodoDispatchContext);

  const onChange = useCallback((e: React.ChangeEvent<any>) => {
    setInput((input) => e.target.value);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: 'CREATE',
      data: {
        text: input,
      },
    });

    setInput('');
  };

  return (
    <div className="flex flex-row my-4">
      <div className="rounded-full h-6 w-6 bg-green-300 mr-4 text-white flex items-center justify-center">
        <MdAdd />
      </div>
      <TodoCreateInput input={input} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}
