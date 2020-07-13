import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import WohnzimmerImg from '../assets/apartment/wohnzimmer_kleiner.png';
import Background from '../components/Background';
import PageNavigationHover from '../components/utils/PageNavigationHover';
import Footprint from '../components/Footprint';

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
  height: 25vw;
  width: 25vw;
  right: 0%;
  bottom: 20%;
  transform: rotate(6deg);
  border-radius: 50%;
`;

export default function Wohnzimmer() {
  const history = useHistory();
  const handleClick = (path) => {
    setTimeout(() => history.push(path), 400);
  };

  return (
    <Background path={WohnzimmerImg}>
      <AnimationContainer onClick={() => handleClick('/kueche')}>
        <KitchenFootprint />
      </AnimationContainer>
      <SchreibtischHover
        onClick={() => handleClick('/wohnzimmer/schreibtisch')}
      />
    </Background>
  );
}
