import styled from 'styled-components';

const Todo = styled.li`
  list-style: none;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
`;

const ButtonRemove = styled.button`
  display: inline-block;
  height: 25px;
  border: 1px solid transparent;
  border-radius: 4px;
  text-align: center;
  background: #ec6767;
  cursor: pointer;
`;

export { Todo, Text, ButtonRemove };
