import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import WohnzimmerImg from '../assets/apartment/wohnzimmer_kleiner.png';
import ArrowImg from '../assets/apartment/navigation_arrow.svg';
import PageNavigationHover from '../components/utils/PageNavigationHover';

const Container = styled.div`
  height: 100vh;
  background-image: url(${WohnzimmerImg});
  background-size: cover;
  position: relative;
`;

const SchreibtischHover = styled(PageNavigationHover)`
  height: 300px;
  width: 300px;
  right: 0%;
  bottom: 5%;
  transform: rotate(6deg);
  border-radius: 50%;
`;

const Arrow = styled.img``;

export default function Wohnzimmer() {
  const history = useHistory();
  const handleClick = () => {
    setTimeout(() => history.push('/wohnzimmer/schreibtisch'), 1000);
  };

  return (
    <Container>
      <SchreibtischHover onClick={handleClick} />
      <Arrow src={ArrowImg} />
    </Container>
  );
}
