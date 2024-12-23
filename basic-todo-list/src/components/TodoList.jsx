import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import styled from 'styled-components';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [newTodo, ...todos]; // 새 할 일을 목록 맨 위에 추가
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <Container>
      <Title>Tasks</Title>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoListContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo?.id}
            todo={todo}
            onToggleComplete={() => handleToggleComplete(todo?.id)}
            onDelete={() => handleDeleteTodo(todo?.id)}
          />
        ))}
        {todos.length === 0 && (
          <EmptyMessage>No tasks yet. Create one to get started!</EmptyMessage>
        )}
      </TodoListContainer>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: hsl(240 10% 3.9%);
  margin-bottom: 16px;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: hsl(240 3.8% 46.1%);
  font-size: 14px;
  padding: 24px;
  background-color: hsl(0 0% 100%);
  border: 1px dashed hsl(240 5.9% 90%);
  border-radius: 6px;
`;
