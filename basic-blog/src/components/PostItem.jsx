import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostItem = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  const handleDelete = () => {
    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      try {
        const updatedPosts = posts.filter((p) => p.id !== parseInt(id));
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        navigate('/');
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('게시글 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  if (!post) {
    return (
      <ErrorContainer>
        <h2>Post not found</h2>
        <BackButton onClick={() => navigate('/')}>Go Back</BackButton>
      </ErrorContainer>
    );
  }

  return (
    <PostContainer>
      <PostHeader>
        <BackButton onClick={() => navigate('/')}>← Back</BackButton>
        <DeleteButton onClick={handleDelete}>Delete Post</DeleteButton>
      </PostHeader>

      <PostContent>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        <PostText>{post.content}</PostText>
      </PostContent>
    </PostContainer>
  );
};

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid hsl(240 5.9% 90%);
  border-radius: 6px;
  color: hsl(240 3.8% 46.1%);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: hsl(240 5.9% 90%);
    color: hsl(240 10% 3.9%);
  }
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid hsl(0 84.2% 60.2%);
  border-radius: 6px;
  color: hsl(0 84.2% 60.2%);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: hsl(0 84.2% 60.2%);
    color: white;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PostTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: hsl(240 10% 3.9%);
`;

const PostDate = styled.time`
  font-size: 14px;
  color: hsl(240 3.8% 46.1%);
`;

const PostText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: hsl(240 10% 3.9%);
  white-space: pre-wrap;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 40px;

  h2 {
    margin-bottom: 16px;
    color: hsl(240 10% 3.9%);
  }
`;

export default PostItem;
