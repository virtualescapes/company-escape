import React from 'react';
import ThoughtBubble from '../components/ThoughtBubble';

export default {
  title: 'ThoughtBubble',
};

export const Bubble = () => (
  <ThoughtBubble active={true}>
    Verdammt Sarah war schon immer paranoid, aber das ist nun wirklich
    übertrieben. Mir bleiben also nur 60min, um mir die Daten auf Ihrem Laptop
    anzusehen!
  </ThoughtBubble>
);
