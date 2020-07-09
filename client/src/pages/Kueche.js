import React from 'react';
import styled from '@emotion/styled';
import KuecheImg from '../assets/apartment/kueche_kleiner.jpg';
import PageNavigationHover from '../components/utils/PageNavigationHover';
import NavigationArrow from '../components/NavigationArrow';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  background-image: url(${KuecheImg});
  background-size: cover;
  position: relative;
`;

const EsstischHover = styled(PageNavigationHover)`
  height: 300px;
  width: 300px;
  right: 5%;
  bottom: 5%;
  transform: rotate(6deg);
  border-radius: 50%;
`;

export default function Kueche() {
  const history = useHistory();
  const handleClick = (path) => {
    setTimeout(() => history.push(path), 800);
  };
  return (
    <Container>
      <EsstischHover onClick={() => handleClick('/kueche/esstisch')} />
      <NavigationArrow previousPage={() => handleClick('/wohnzimmer')} />
    </Container>
  );
}
