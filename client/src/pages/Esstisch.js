import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import EsstischImg from '../assets/apartment/esstisch_nah_kleiner.jpg';
import WhatsUp from '../components/mobile/WhatsUp';
import Background from '../components/Background';
import NavigationArrow from '../components/NavigationArrow';
import ChewingSound from '../assets/sounds/chewing_sound.mp3';
import Lighter from '../assets/sounds/lighter.mp3';
import PageNavigationHover from '../components/utils/PageNavigationHover';
import ThoughtBubble from '../components/ThoughtBubble';
import { useHistory } from 'react-router-dom';
import { WhatsUpModalContext } from '../components/contexts/WhatsUpModalContext';

const HandyHover = styled(PageNavigationHover)`
  height: 15vw;
  width: 15vw;
  right: 15%;
  top: 20%;
  border-radius: 50%;
  position: absolute;
`;

const NussHover = styled(PageNavigationHover)`
  height: 15vw;
  width: 15vw;
  left: 10%;
  top: 35%;
  border-radius: 50%;
  position: absolute;
`;

const KerzenHover = styled(PageNavigationHover)`
  height: 10vw;
  width: 10vw;
  left: 48%;
  top: 37%;
  border-radius: 50%;
  position: absolute;
`;

export default function Esstisch() {
  const [activeWhatsUpModal, setActiveWhatsUpModal] = useContext(
    WhatsUpModalContext
  );
  const [activeThoughtBubble, setActiveThoughtBubble] = useState(false);
  const [thoughtBubbleContent, setThoughtBubbleContent] = useState('');
  const history = useHistory();
  const handleNavigation = () => {
    setTimeout(() => history.push('/kueche'), 800);
  };

  const handleClick = (sound, timeGap, time, text) => {
    const playSound = () => {
      let times = time;
      const loop = setInterval(repeat, timeGap);
      function repeat() {
        times--;
        if (times === 0) {
          clearInterval(loop);
        }
        const audio = new Audio(sound);
        audio.play();
      }
      repeat();
    };

    const showThoughtBubble = () => {
      setThoughtBubbleContent(text);
      setActiveThoughtBubble(true);
      setTimeout(() => {
        setActiveThoughtBubble(false);
      }, 6000);
    };
    playSound();
    showThoughtBubble();
  };

  return (
    <Background path={EsstischImg}>
      {activeWhatsUpModal ? (
        <WhatsUp />
      ) : (
        <>
          <NavigationArrow previousPage={() => handleNavigation()} />
          <NussHover
            onClick={() => handleClick(ChewingSound, 500, 2, 'Mjammi 🤤')}
          />
          <KerzenHover
            onClick={() => handleClick(Lighter, 1000, 3, 'f@*#! ☠️')}
          />
          <HandyHover onClick={() => setActiveWhatsUpModal(true)} />
          <ThoughtBubble active={activeThoughtBubble}>
            {thoughtBubbleContent}
          </ThoughtBubble>
        </>
      )}
    </Background>
  );
}
