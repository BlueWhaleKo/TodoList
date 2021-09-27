import React from 'react';

export function TodoTemplate(props: {
  children?: JSX.Element | JSX.Element[];
}) {
  const { children } = props;

  return (
    <div className="flex flex-col bg-white w-96 h-96 rounded-md shadow-md my-24 mx-auto">
      {children}
    </div>
  );
}
