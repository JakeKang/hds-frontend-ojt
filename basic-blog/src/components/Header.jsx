import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const user = {
    name: 'User',
    avatar: '🧑‍💻',
    role: 'Admin',
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => navigate('/')}>Basic Blog</Logo>
        <Nav>
          <UserSection>
            <UserInfo>
              <UserName>{user.name}</UserName>
              <UserRole>{user.role}</UserRole>
            </UserInfo>
            <Avatar>{user.avatar}</Avatar>
          </UserSection>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  background-color: white;
  border-bottom: 1px solid hsl(240 5.9% 90%);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    max-width: 900px;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: hsl(240 10% 3.9%);
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 24px;
  border-left: 1px solid hsl(240 5.9% 90%);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: hsl(240 10% 3.9%);
`;

const UserRole = styled.span`
  font-size: 12px;
  color: hsl(240 3.8% 46.1%);
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background-color: hsl(240 5.9% 90%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: transform 0.2s ease;
`;

export default Header;
