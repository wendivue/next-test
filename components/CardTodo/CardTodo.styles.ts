import styled from 'styled-components';

const CardTodo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 44px 29px 29px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Input = styled.input`
  width: 100%;
  min-height: 44px;
  padding-left: 15px;
  padding-right: 15px;
  color: rgba(31, 32, 65, 0.75);
  border: 1px solid rgba(31, 32, 65, 0.5);
  border-radius: 4px;
  box-sizing: border-box;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Button = styled.button`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  color: #1f2041;
  position: relative;
  min-width: 99px;
  display: inline-block;
  padding: 12.5px 13.5px;
  background: linear-gradient(180deg, #bc9cff, #8ba4f9);
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 22px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 10px;
`;

export { Input, CardTodo, List, Button };
