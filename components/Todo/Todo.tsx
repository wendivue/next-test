import { Button } from 'elements/Button/Button';

import * as S from './Todo.styles';

interface todoText {
  text: string;
}

interface TodoProps {
  todo: todoText;
  index: number;
  onClick(index: number): void;
}

const Todo = ({ todo, index, onClick }: TodoProps): JSX.Element => {
  return (
    <>
      <S.Todo>
        <S.Text>{todo.text}</S.Text>
        <Button
          onClick={() => {
            onClick(index);
          }}
          isSmall
          isDelete
        >
          remove
        </Button>
      </S.Todo>
    </>
  );
};

export default Todo;
