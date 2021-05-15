import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Todo from 'components/Todo/Todo';
import * as S from './CardTodo.styles';
import { addTodo, removeTodo } from '../../redux/Todo/actions';

interface todoText {
  text: string;
}

interface StateData {
  todo: [todoText];
}

const CardTodo = (): JSX.Element => {
  const todos = useSelector((state: StateData) => state.todo);
  const dispatch = useDispatch();
  const textInput: React.RefObject<HTMLInputElement> = useRef();

  const handleClickAdd = () => {
    const text = textInput.current.value;
    textInput.current.value = '';
    dispatch(addTodo(text));
  };

  const handleClickRemove = (index: number) => {
    dispatch(removeTodo(index));
  };

  return (
    <>
      <S.CardTodo>
        <S.Input ref={textInput} type="text" name="add" />
        <S.Button type="submit" onClick={handleClickAdd}>
          Add
        </S.Button>
        <S.List>
          {todos.map((todo, index: number) => (
            <Todo key={index.toString()} index={index} todo={todo} onClick={handleClickRemove} />
          ))}
        </S.List>
      </S.CardTodo>
    </>
  );
};

export default CardTodo;
