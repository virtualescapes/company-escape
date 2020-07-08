import React, { useState } from 'react';
import styled from '@emotion/styled';
import Puzzle from '../components/Puzzle/Puzzle';
import SchreibtischImg from '../assets/apartment/schreibtisch_nah_kleiner.jpg';
import PageNavigationHover from '../components/utils/PageNavigationHover';
import NavigationArrow from '../components/NavigationArrow';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  background-image: url(${SchreibtischImg});
  background-size: cover;
`;

const PapierkorbHover = styled(PageNavigationHover)`
  height: 320px;
  width: 320px;
  left: 3%;
  bottom: -10%;
  border-radius: 50%;
`;

const LaptopHover = styled(PageNavigationHover)`
  height: 500px;
  width: 500px;
  left: 32%;
  top: 6%;
  border-radius: 50%;
`;

export default function Schreibtisch() {
  const [trash, setTrash] = useState(false);
  const history = useHistory();
  const handleClick = (path) => {
    setTimeout(() => history.push('/wohnzimmer' + path), 800);
  };

  return (
    <Container>
      {trash ? (
        <Puzzle closeModal={() => setTrash(false)} />
      ) : (
        <>
          <PapierkorbHover onClick={() => setTrash(true)} />
          <LaptopHover onClick={() => handleClick('/schreibtisch/laptop')} />
          <NavigationArrow previousPage={() => handleClick('')} />
        </>
      )}
    </Container>
  );
}
