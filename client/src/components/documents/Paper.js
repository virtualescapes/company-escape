import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PaperImage = styled.div`
  height: 80vh;
  width: calc(80vh * 0.65);
  background-image: url(${(props) => props.src});
  background-size: cover;
  padding: 30px;
  font-family: ${(props) => props.font};
`;

export default function Paper({ img, content, fontFamily }) {
  return (
    <Container>
      <PaperImage src={img} font={fontFamily}>
        {content}
      </PaperImage>
    </Container>
  );
}

Paper.propTypes = {
  img: PropType.string,
  content: PropType.string,
  fontFamily: PropType.string,
};
