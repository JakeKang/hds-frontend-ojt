import styled from 'styled-components';

const EmptyState = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  background-color: hsl(0 0% 98%);
  border-radius: 8px;
  border: 1px dashed hsl(240 5.9% 90%);
`;

const Message = styled.p`
  color: hsl(240 3.8% 46.1%);
  font-size: 16px;
  text-align: center;
`;

export default EmptyState;
