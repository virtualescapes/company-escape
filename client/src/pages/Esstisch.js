import React, { useContext } from 'react';
import styled from '@emotion/styled';
import EsstischImg from '../assets/apartment/esstisch_nah_kleiner.jpg';
import WhatsUp from '../components/mobile/WhatsUp';
import NavigationArrow from '../components/NavigationArrow';
import PageNavigationHover from '../components/utils/PageNavigationHover';
import { useHistory } from 'react-router-dom';
import { WhatsUpModalContext } from '../components/contexts/WhatsUpModalContext';

const Container = styled.div`
  height: 100vh;
  background-image: url(${EsstischImg});
  background-size: cover;
  position: relative;
`;

const HandyHover = styled(PageNavigationHover)`
  height: 200px;
  width: 200px;
  right: 16%;
  top: 25%;
  border-radius: 50%;
`;

export default function Esstisch() {
  const [activeWhatsUpModal, setActiveWhatsUpModal] = useContext(
    WhatsUpModalContext
  );
  const history = useHistory();
  const handleClick = (path) => {
    setTimeout(() => history.push('/kueche' + path), 800);
  };
  return (
    <Container>
      {activeWhatsUpModal ? (
        <WhatsUp />
      ) : (
        <>
          <NavigationArrow previousPage={() => handleClick('')} />
          <HandyHover onClick={() => setActiveWhatsUpModal(true)} />
        </>
      )}
    </Container>
  );
}
