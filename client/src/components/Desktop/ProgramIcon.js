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

export default function ProgramIcon({ icon, name, onProgramIconClick }) {
  return (
    <ProgramIconWrapper onClick={onProgramIconClick}>
      <Icon src={icon} />
      <Name>{name}</Name>
    </ProgramIconWrapper>
  );
}

ProgramIcon.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.string,
  onProgramIconClick: PropTypes.func,
};
