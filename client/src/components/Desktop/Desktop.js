import React from 'react';
import styled from '@emotion/styled';

import StartMenuSVG from '../../assets/desktop-icons/start_menu.svg';

import FullWrapper from '../FullWrapper';
import ProgramIcon from './ProgramIcon';

const DesktopWrapper = styled(FullWrapper)`
  display: flex;
  flex-flow: column wrap;
`;

const ProgramArea = styled.div`
  background: lightblue;
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`;

const TaskBar = styled.div`
  background: darkgray;
  padding: 5px;
`;

const StartMenu = styled.div`
  width: 20%;
  position: absolute;
  bottom: 60px;
  background: white;
`;

const StartMenuButton = styled.img`
  height: 45px;
  cursor: pointer;
`;

export default function Desktop() {
  const [startMenuIsOpen, setStartMenuIsOpen] = React.useState(false);

  const toggleStartMenuIsOpen = () => {
    setStartMenuIsOpen(!startMenuIsOpen);
  };

  return (
    <DesktopWrapper>
      <ProgramArea>
        <ProgramIcon name={'Tux'} icon={StartMenuSVG} />
      </ProgramArea>
      {startMenuIsOpen && <StartMenu>This is the StartMenu</StartMenu>}
      <TaskBar>
        <StartMenuButton onClick={toggleStartMenuIsOpen} src={StartMenuSVG} />
      </TaskBar>
    </DesktopWrapper>
  );
}
