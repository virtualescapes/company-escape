import styled from '@emotion/styled';

const FullWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100vw;
  background: ${(props) => (props.background ? props.background : 'white')};
`;

export default FullWrapper;
