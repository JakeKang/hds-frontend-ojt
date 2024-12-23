import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostItem from './components/PostItem';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const App = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <Layout>
      <Router>
        <GlobalStyles />
        <Header />
        <MainContent>
          <ContentContainer>
            <Routes>
              <Route
                path='/'
                element={<PostList posts={posts} setPosts={setPosts} />}
              />
              <Route
                path='/post/:id'
                element={<PostItem posts={posts} setPosts={setPosts} />}
              />
            </Routes>
          </ContentContainer>
        </MainContent>
      </Router>
    </Layout>
  );
};

const Layout = styled.div`
  min-height: 100vh;
  background-color: hsl(0 0% 98%);
`;

const MainContent = styled.main`
  width: 100%;
  min-height: calc(100vh - 64px);
  padding: 24px;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  padding: 32px;
  border: 1px solid hsl(240 5.9% 90%);

  @media (max-width: 1280px) {
    max-width: 900px;
  }

  @media (max-width: 968px) {
    max-width: 100%;
    padding: 24px;
  }

  @media (max-width: 640px) {
    padding: 16px;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;

export default App;
