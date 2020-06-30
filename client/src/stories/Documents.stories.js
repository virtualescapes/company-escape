import React from 'react';
import Paper from '../components/documents/Paper';
import PaperImage from '../assets/paper1.jpg';

export default {
  title: 'Documents',
  component: Paper,
};

export const Loveletter = () => (
  <Paper
    img={PaperImage}
    content={
      'testLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
    fontFamily={"'Homemade Apple', cursive"}
  />
);
