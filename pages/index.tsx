import Head from 'next/head';
import { Provider } from 'react-redux';

import Todo from 'components/CardTodo/CardTodo';
import { store } from '../redux/store';
import * as S from './index.styles';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Container>
        <S.ContainerTodo>
          <Provider store={store}>
            <Todo />
          </Provider>
        </S.ContainerTodo>
      </S.Container>
    </>
  );
};

export default Home;
