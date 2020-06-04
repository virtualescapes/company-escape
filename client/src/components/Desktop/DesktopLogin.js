import React from 'react';
import styled from '@emotion/styled';
import PB from '../../assets/desktop-pb.jpg';

import FullWrapper from '../FullWrapper';

const DesktopContainer = styled(FullWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginField = styled.div`
  display: flex;
  flex-flow: column;
  width: 20%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background: black;
  color: white;
  padding: 20px;
`;

const LoginFieldHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
`;

const ProfilePicture = styled.img`
  border-radius: 100px;
  width: 120px;
`;

const ProfileName = styled.h2`
  width: 100%;
  text-align: center;
`;

const LoginFieldBody = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const PasswordInput = styled.input`
  width: 100%;
  max-width: 250px;
  line-height: 20px;
`;

const LoginFieldFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button``;

export default function DesktopLogin() {
  return (
    <DesktopContainer background={'grey'}>
      <LoginField>
        <LoginFieldHeader>
          <ProfilePicture src={PB} />
          <ProfileName>Sarah</ProfileName>
        </LoginFieldHeader>
        <LoginFieldBody>
          <PasswordInput type="password" placeholder="Enter Password..." />
        </LoginFieldBody>
        <LoginFieldFooter>
          <Button>Login</Button>
        </LoginFieldFooter>
      </LoginField>
    </DesktopContainer>
  );
}
