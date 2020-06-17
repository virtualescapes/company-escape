import React from 'react';
import styled from '@emotion/styled';

import StartMenuSVG from '../../assets/desktop-icons/start_menu.svg';

import FullWrapper from '../FullWrapper';

const DesktopWrapper = styled(FullWrapper)`
  display: flex;
  flex-flow: column wrap;
`;

const ProgramArea = styled.div`
  background: lightblue;
  flex-grow: 1;
  padding: 20px;
`;

const TaskBar = styled.div`
  background: darkgray;
  padding: 5px;
`;

const StartMenuButton = styled.img`
  width: 45px;
`;

export default function Desktop() {
  return (
    <DesktopWrapper>
      <ProgramArea>Program</ProgramArea>
      <TaskBar>
        <StartMenuButton src={StartMenuSVG} />
      </TaskBar>
    </DesktopWrapper>
  );
}
