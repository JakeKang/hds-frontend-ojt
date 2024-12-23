import TodoList from './components/TodoList';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Card>
          <TodoList />
        </Card>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: hsl(0 0% 98%);
`;

const Card = styled.main`
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 12px;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  padding: 24px;
  margin: auto;
  border: 1px solid hsl(240 5.9% 90%);

  @media (max-width: 640px) {
    padding: 16px;
    margin: 0;
    border-radius: 8px;
  }

  /* 호버 효과 (선택사항) */
  &:hover {
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    transition: box-shadow 0.2s ease-in-out;
  }
`;
