import styled from 'styled-components';

const Container = styled.main`
  position: relative;
  max-width: 1920px;
  min-width: 320px;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const ContainerTodo = styled.main`
  max-width: 800px;
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  margin-top: 60px;
`;

export { Container, ContainerTodo };
