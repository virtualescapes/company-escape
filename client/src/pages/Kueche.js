import React from 'react';
import styled from '@emotion/styled';
import KuecheImg from '../assets/apartment/kueche_kleiner.jpg';
import Background from '../components/Background';
import PageNavigationHover from '../components/utils/PageNavigationHover';
import NavigationArrow from '../components/NavigationArrow';
import { useHistory } from 'react-router-dom';

const EsstischHover = styled(PageNavigationHover)`
  height: 25vw;
  width: 25vw;
  right: 5%;
  bottom: 10%;
  transform: rotate(6deg);
  border-radius: 50%;
`;

export default function Kueche() {
  const history = useHistory();
  const handleClick = (path) => {
    setTimeout(() => history.push(path), 800);
  };
  return (
    <Background path={KuecheImg}>
      <EsstischHover onClick={() => handleClick('/kueche/esstisch')} />
      <NavigationArrow previousPage={() => handleClick('/wohnzimmer')} />
    </Background>
  );
}
