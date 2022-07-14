import React, { useState } from 'react';
import Container from './components/Container';
import Clocks from './components/Clocks';
import Quote from './components/Quote';
import Details from './components/Details';
import Loader from './components/Loader';
import { useAppSelector } from './app/hooks';

const App = () => {

  const [active, setActive] = useState(false)
  const { status, error } = useAppSelector(state => state.clock)

  console.log(error)

  return (
    <Container>
      {status === 'loading' ?
        <Loader />
        :
        <>
          <Quote />
          <Clocks active={active} setActive={setActive} />
          {active && <Details />}
        </>
      }
    </Container>
  );
}

export default App;
