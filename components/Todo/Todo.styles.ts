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

export { Todo, Text };
