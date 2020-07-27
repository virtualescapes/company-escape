import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';

const Container = styled.div`
  position: relative;
`;

const BackgroundImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export default function Background({ children, path }) {
  return (
    <Container>
      <BackgroundImg src={path} />
      {children}
    </Container>
  );
}

Background.propTypes = {
  children: PropType.any,
  path: PropType.string,
};
