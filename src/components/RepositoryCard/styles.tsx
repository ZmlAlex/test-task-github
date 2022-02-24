import styled from 'styled-components';

type RepositoryCard = {
  lastDight: number;
};

export const Wrapper = styled.div``;

export const RepositoryCard = styled.div<RepositoryCard>`
  background: ${(props) => {
    switch (props.lastDight) {
      case 1:
      case 5:
        return 'radial-gradient(#1fe4f5, #3fbafe)';
      case 2:
      case 6:
        return 'radial-gradient(#fbc1cc, #fa99b2)';
      case 3:
      case 7:
        return 'radial-gradient(#76b2fe, #b69efe)';
      case 4:
      case 8:
        return 'radial-gradient(#60efbc, #58d5c9)';
      case 9:
      case 0:
        return 'radial-gradient(#f588d8, #c0a3e5)';
      default:
        return 'radial-gradient(#f588d8, #c0a3e5)';
    }
  }};
  border-radius: 16px;
  box-shadow: 0px 6px 10px rgb(0 0 0 / 25%);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
  }

  svg {
    cursor: pointer;
  }
`;

export const StarsCounter = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;

  span {
    font-size: 18px;
  }
`;

export const Name = styled.a`
  align-self: flex-start;
  color: inherit;
  font-size: 20px;
  position: relative;
  text-decoration: none;

  &::after {
    background-color: rgba(255, 255, 255, 0.6);
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

  h2 {
    font-size: 20px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  button {
    background-color: transparent;
    border: none;
  }
`;
