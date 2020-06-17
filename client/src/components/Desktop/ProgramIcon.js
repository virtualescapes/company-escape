import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ProgramIconWrapper = styled.div`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 70px;
`;

const Name = styled.div`
  text-align: center;
`;

export default function ProgramIcon({ icon, name }) {
  return (
    <ProgramIconWrapper>
      <Icon src={icon} />
      <Name>{name}</Name>
    </ProgramIconWrapper>
  );
}

ProgramIcon.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.string,
};
