import React, { useState } from 'react';
import styled from '@emotion/styled';
import Puzzle from '../components/Puzzle/Puzzle';
import SchreibtischImg from '../assets/apartment/schreibtisch_nah_kleiner.jpg';
import Background from '../components/Background';
import PageNavigationHover from '../components/utils/PageNavigationHover';
import NavigationArrow from '../components/NavigationArrow';
import { useHistory } from 'react-router-dom';

const PapierkorbHover = styled(PageNavigationHover)`
  height: 20vw;
  width: 20vw;
  left: 3%;
  bottom: 10%;
  border-radius: 50%;
`;

const LaptopHover = styled(PageNavigationHover)`
  height: 30vw;
  width: 30vw;
  left: 34%;
  top: 5%;
  border-radius: 50%;
`;

export default function Schreibtisch() {
  const [trash, setTrash] = useState(false);
  const history = useHistory();
  const handleClick = (path) => {
    setTimeout(() => history.push('/wohnzimmer' + path), 800);
  };

  return (
    <Background path={SchreibtischImg}>
      {trash ? (
        <Puzzle closeModal={() => setTrash(false)} />
      ) : (
        <>
          <PapierkorbHover onClick={() => setTrash(true)} />
          <LaptopHover onClick={() => handleClick('/schreibtisch/laptop')} />
          <NavigationArrow previousPage={() => handleClick('')} />
        </>
      )}
    </Background>
  );
}
