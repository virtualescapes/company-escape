import React from 'react';
import styled from '@emotion/styled';

const Timer = styled.div`
  color: darkgreen;
  font-size: 1.5rem;
`;

function Countdown() {
  const [counter, setCounter] = React.useState(90);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return <Timer>⏳ {counter}s</Timer>;
}
export default Countdown;
