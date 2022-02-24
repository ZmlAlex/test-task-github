import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
`;

export const AnimatedLink = styled.a`
  color: inherit;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  text-decoration: none;

  &::after {
    background-color: black;
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    top: 25px;
    transition: all 0.5s;
    width: 0%;
  }

  & :hover::after {
    width: 100%;
  }
`;

export const LogoWrapper = styled.div``;

export const Navigation = styled.nav``;

export const TimeRange = styled.p``;

export const Main = styled.main``;
export const Footer = styled.footer``;
