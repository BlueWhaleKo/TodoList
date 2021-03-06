import React, { useContext, useMemo } from 'react';
import { TodoStateContext } from './TodoContext';

export function TodoHead() {
  const WEEKDAY = useMemo(() => ['일', '월', '화', '수', '목', '금', '토'], []);
  const date = new Date();

  const state = useContext(TodoStateContext);
  if (!state) {
    throw new Error('ContextNotFound: TodoStateContext');
  }

  const left = useMemo(() => {
    return state.items.filter((item) => !item.isDone).length;
  }, [state.items]);

  return (
    <div className="pt-8 px-8 border-b-2">
      <div className="text-xl font-bold">{date.toLocaleDateString()}</div>
      <div className="text-sm text-gray-400">{WEEKDAY[date.getDay()]}요일</div>
      <div className="py-4 text-sm text-green-400	">할 일 {left}개 남음</div>
    </div>
  );
}
