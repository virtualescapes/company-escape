import React from 'react';
import WhatsUp from '../components/mobile/WhatsUp';

export default {
  title: 'Mobile',
  component: WhatsUp,
};

const chatHistory = [
  {
    author: 'Sarah',
    date: '14:05 PM',
    message: 'Ey jooo, was geht',
    color: 'blue',
  },
  {
    author: 'Johannes',
    date: '14:06 PM',
    message: 'mega Bock!',
    color: 'pink',
  },
  {
    author: 'Steffi',
    date: '14:08 PM',
    message: '😍',
    color: 'tomato',
  },
  {
    author: 'Sebastian',
    date: '14:10 PM',
    message:
      'ich hab den längsten und du bist ein dummer Spastiiiisdfisdgksg jsfgjkkg ksklfdslfd lasflsdflsdflsdflsdf',
    color: 'green',
  },
  {
    author: 'Sarah',
    date: '14:10 PM',
    message: 'geiloooo, ich freu mich! ',
    color: 'blue',
  },
];

export const WhatsUpChat = () => <WhatsUp chat={chatHistory} />;
