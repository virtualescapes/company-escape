import React from 'react';
import Note from '../components/Note';

export default {
  title: 'Note',
};

export const DefaultNote = () => (
  <Note content={['Frühstück', 'Sport :(', 'die Welt retten!']} />
);
