import styled from 'styled-components';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <TodoContainer>
      <TodoContent>
        <Checkbox
          type='checkbox'
          checked={todo?.completed}
          onChange={onToggleComplete}
        />
        <TodoText completed={todo?.completed}>
          <span>{todo?.text}</span>
          <TimeStamp>{todo?.createdAt}</TimeStamp>
        </TodoText>
      </TodoContent>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </TodoContainer>
  );
};

export default TodoItem;

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: white;
  border: 1px solid hsl(240 5.9% 90%);
  border-radius: 6px;
  margin-bottom: 8px;
  transition: border-color 0.2s;

  &:hover {
    border-color: hsl(240 5.9% 80%);
  }
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const TodoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: hsl(240 10% 3.9%);
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    font-size: 14px;
  }
`;

const TimeStamp = styled.small`
  color: hsl(240 3.8% 46.1%);
  font-size: 12px;
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  background-color: transparent;
  color: hsl(0 84.2% 60.2%);
  border: 1px solid hsl(0 84.2% 60.2%);
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: hsl(0 84.2% 60.2%);
    color: white;
  }
`;
