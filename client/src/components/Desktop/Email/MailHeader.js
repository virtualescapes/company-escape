import React from 'react';
import styled from '@emotion/styled';
// import Senden from '../../../assets/mail-icons/senden.svg';
// import Gesendet from '../../../assets/mail-icons/gesendet.svg';
// import Gelesen from '../../../assets/mail-icons/gelesen.svg';
// import Ungelesen from '../../../assets/mail-icons/ungelesen.svg';
// import SendenIcon from './MailNavigationIcon';
import MailNavigation from './MailNavigation';

// #2C35BB

const Container = styled.div`
  background-color: #2c35bb;
  display: flex;
  height: 100px;
  align-items: center;
`;

const TitleContainer = styled.div`
  padding-left: 60px;
  padding-right: 120px;
  color: white;
  font-size: 42px;
  font-weight: bold;
`;

// const NavButton = styled.button`
//   display: flex;
//   align-items: center;
//   background-color: #2c35bb;
//   border: none;
//   color: white;
//   font-size: 24px;
//   font-weight: bold;
//   &:focus {
//     color: #2c35bb;
//     background-color: white;
//   }
// `;

// const IconContainer = styled.div`
//   width: 50px;
//   display: flex;
//   margin-right: 10px;
//   margin-left: 35px;
// `;

// const Icon = styled.img`
//   width: 100%;
//   height: 100%;
// `;

export default function MailHeader() {
  return (
    <Container>
      <TitleContainer>GE-Mail</TitleContainer>
      {/* <NavButton>
        <IconContainer>
          <SendenIcon active={active} />
        </IconContainer>
        senden
      </NavButton> */}
      <MailNavigation label="senden" />
      {/* <NavButton>
        <IconContainer>
          <Icon src={Gesendet} />
        </IconContainer>
        gesendet
      </NavButton>
      <NavButton>
        <IconContainer>
          <Icon src={Gelesen} />
        </IconContainer>
        gelesen
      </NavButton>
      <NavButton>
        <IconContainer>
          <Icon src={Ungelesen} />
        </IconContainer>
        ungelesen
      </NavButton> */}
    </Container>
  );
}
