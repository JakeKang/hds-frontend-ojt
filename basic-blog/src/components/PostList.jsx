import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PostForm from './PostForm';
import EmptyState from './EmptyState';

const PostList = ({ posts, setPosts }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 초기 로딩 시뮬레이션
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleAddPost = (newPost) => {
    try {
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    } catch (error) {
      console.error('Error adding post:', error);
      alert('게시글 추가 중 오류가 발생했습니다.');
    }
  };

  if (isLoading) {
    return <LoadingState>Loading...</LoadingState>;
  }

  return (
    <PostListContainer>
      <AddPostSection>
        <SectionTitle>Create New Post</SectionTitle>
        <PostForm onAddPost={handleAddPost} />
      </AddPostSection>

      <PostsSection>
        <SectionTitle>Recent Posts</SectionTitle>
        {posts.length === 0 ? (
          <EmptyState message='No posts yet. Create your first post!' />
        ) : (
          <PostGrid>
            {posts.map((post) => (
              <PostCard key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <CardContent>
                    <PostTitle>{post.title}</PostTitle>
                    <PostExcerpt>{post.content.slice(0, 100)}...</PostExcerpt>
                    <PostDate>{post.date}</PostDate>
                  </CardContent>
                </Link>
              </PostCard>
            ))}
          </PostGrid>
        )}
      </PostsSection>
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const AddPostSection = styled.section`
  padding: 24px;
  background-color: hsl(0 0% 98%);
  border-radius: 8px;
  border: 1px solid hsl(240 5.9% 90%);
`;

const PostsSection = styled.section``;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: hsl(240 10% 3.9%);
  margin-bottom: 16px;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const PostCard = styled.article`
  background-color: white;
  border-radius: 8px;
  border: 1px solid hsl(240 5.9% 90%);
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: hsl(240 10% 3.9%);
  margin-bottom: 8px;
`;

const PostExcerpt = styled.p`
  font-size: 14px;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 12px;
  line-height: 1.5;
`;

const PostDate = styled.time`
  font-size: 12px;
  color: hsl(240 3.8% 46.1%);
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 40px;
  color: hsl(240 3.8% 46.1%);
`;

export default PostList;
