import Head from 'next/head';

import Todo from 'components/CardTodo/CardTodo';
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
          <Todo />
        </S.ContainerTodo>
      </S.Container>
    </>
  );
};

export default Home;
