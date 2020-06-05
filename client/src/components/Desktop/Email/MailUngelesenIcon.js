import React from 'react';
import PropTypes from 'prop-types';

export default function MailUngelesenIcon({ active }) {
  const fill = active === 'ungelesen' ? '#2C35BB' : '#FFFFFF';
  return (
    <svg viewBox="0 0 512.001 512.001" width="50px">
      <g>
        <g>
          <g>
            <path
              d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106    C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z     M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787    L338.213,256L482,112.212V399.787z"
              fill={fill}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

MailUngelesenIcon.propTypes = {
  active: PropTypes.string,
};
