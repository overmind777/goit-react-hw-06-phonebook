import styled from 'styled-components';
import Layout from './contacts/Layout';

export const App = () => {
  return (
    <WrapperStyled>
      <Layout />
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
