import { useState } from 'react';
import styled from 'styled-components';

const TodoInput = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString(), // 등록 시간 추가
    };

    onAddTodo(newTodo);
    setText('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter a new task'
        required
      />
      <Button type='submit'>Add Task</Button>
    </FormContainer>
  );
};

export default TodoInput;

const FormContainer = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid hsl(240 5.9% 90%);
  background-color: hsl(0 0% 100%);
  font-size: 14px;
  line-height: 1.5;
  color: hsl(240 10% 3.9%);
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: hsl(240 5.9% 50%);
  }

  &::placeholder {
    color: hsl(240 3.8% 46.1%);
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: hsl(240 5.9% 10%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: hsl(240 5.9% 20%);
  }
`;
