import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import WohnzimmerImg from '../assets/apartment/wohnzimmer_kleiner.png';
import PageNavigationHover from '../components/utils/PageNavigationHover';
import Footprint from '../components/Footprint';

const Container = styled.div`
  height: 100vh;
  background-image: url(${WohnzimmerImg});
  background-size: cover;
  position: relative;
`;

const AnimationContainer = styled.div`
  height: 570px;
  width: 400px;
  top: 0%;
  right: 20%;
  transform: rotate(8deg);
  opacity: 0;
  position: absolute;
  :hover {
    opacity: 1;
  }
`;

const KitchenFootprint = styled(Footprint)`
  transform: rotate(40deg);
  position: absolute;
  top: 85%;
  left: 50%;
`;

const SchreibtischHover = styled(PageNavigationHover)`
  height: 300px;
  width: 300px;
  right: 0%;
  bottom: 5%;
  transform: rotate(6deg);
  border-radius: 50%;
`;

export default function Wohnzimmer() {
  const history = useHistory();
  const handleClick = (path) => {
    setTimeout(() => history.push(path), 400);
  };

  return (
    <Container>
      <AnimationContainer onClick={() => handleClick('/kueche')}>
        <KitchenFootprint />
      </AnimationContainer>
      <SchreibtischHover
        onClick={() => handleClick('/wohnzimmer/schreibtisch')}
      />
    </Container>
  );
}
