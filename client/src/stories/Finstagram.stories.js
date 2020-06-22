import React from 'react';
import Finstagram from '../components/Desktop/social-media/Finstagram';
import Piece1 from '../assets/puzzle-pieces/1.png';
import Piece2 from '../assets/puzzle-pieces/2.png';
import Piece3 from '../assets/puzzle-pieces/3.png';
import Piece4 from '../assets/puzzle-pieces/4.png';
import Sarah from '../assets/social-media/profile.png';

export default {
  title: 'Finsta',
  component: Finstagram,
};

const user = {
  name: 'Sarah',
  image: Sarah,
  posts: '2',
  followers: '123',
  following: '24',
  about:
    'Hallo ich bin die wilde Sarah und ich bin offen für neue Abenteuer 👉🏿 👌 💦',
};

const posts = [Piece1, Piece2, Piece3, Piece4, Sarah];

export const FinstaSarah = () => <Finstagram posts={posts} user={user} />;
