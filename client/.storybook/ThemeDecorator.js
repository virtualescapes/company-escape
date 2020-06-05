import React from 'react';
import GlobalStyles from '../src/themes/GlobalStyles';

const ThemeDecorator = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);

export default ThemeDecorator;
