import React from 'react';
import PropTypes from 'prop-types';

export default function MailGesendetIcon({ active }) {
  const fill = active === 'gesendet' ? '#2C35BB' : '#FFFFFF';
  return (
    <svg viewBox="0 0 512.001 512.001" width="50px">
      <g>
        <path
          d="m478.5 83.5h-385c-18.472 0-33.5 15.028-33.5 33.5v71.5h-52.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h90c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-22.5v-71.5c0-2.342.455-4.576 1.253-6.64l145.64 145.64-145.64 145.64c-.798-2.064-1.253-4.298-1.253-6.64v-49c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v49c0 18.472 15.028 33.5 33.5 33.5h385c18.472 0 33.5-15.028 33.5-33.5v-278c0-18.472-15.028-33.5-33.5-33.5zm-128.393 172.5 145.64-145.64c.798 2.064 1.253 4.298 1.253 6.64v278c0 2.342-.455 4.576-1.253 6.64zm128.393-157.5c2.342 0 4.576.455 6.64 1.253l-167.32 167.32c-17.545 17.547-46.094 17.547-63.64 0l-167.32-167.32c2.064-.798 4.298-1.253 6.64-1.253zm-385 315c-2.342 0-4.576-.455-6.64-1.253l145.64-145.64 11.074 11.074c11.697 11.696 27.062 17.545 42.427 17.545s30.729-5.849 42.426-17.545l11.074-11.074 145.64 145.64c-2.064.798-4.298 1.253-6.64 1.253z"
          fill={fill}
        />
        <path
          d="m67.5 218.5c-4.142 0-7.5 3.357-7.5 7.5v22.5h-52.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h120c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-52.5v-22.5c0-4.143-3.358-7.5-7.5-7.5z"
          fill={fill}
        />
        <path
          d="m97.5 323.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-22.5v-22.5c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v22.5h-52.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

MailGesendetIcon.propTypes = {
  active: PropTypes.string,
};