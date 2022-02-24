import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1220px;
  padding: 16px;
`;

export const List = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
`;
