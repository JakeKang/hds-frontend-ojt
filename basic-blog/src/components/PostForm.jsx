import { useState } from 'react';
import styled from 'styled-components';
import { validatePost } from '../utils/validation';

const PostForm = ({ onAddPost, initialValues = null }) => {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [content, setContent] = useState(initialValues?.content || '');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    // 입력값 검증
    const validationErrors = validatePost({ title, content });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newPost = {
      id: initialValues?.id || Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    onAddPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter title'
          error={errors.title}
        />
        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Enter content'
          error={errors.content}
        />
        {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
      </FormGroup>

      <ButtonGroup>
        <SubmitButton type='submit'>
          {initialValues ? 'Update Post' : 'Create Post'}
        </SubmitButton>
      </ButtonGroup>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.error ? 'hsl(0 84.2% 60.2%)' : 'hsl(240 5.9% 90%)')};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? 'hsl(0 84.2% 60.2%)' : 'hsl(240 5.9% 50%)'};
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.error ? 'hsl(0 84.2% 60.2%)' : 'hsl(240 5.9% 90%)')};
  font-size: 16px;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? 'hsl(0 84.2% 60.2%)' : 'hsl(240 5.9% 50%)'};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: hsl(240 5.9% 10%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: hsl(240 5.9% 20%);
  }
`;

const ErrorMessage = styled.span`
  color: hsl(0 84.2% 60.2%);
  font-size: 14px;
`;

export default PostForm;
