import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchTimeZone } from './app/clockSlice';
import Container from './components/Container';
import Clocks from './components/Clocks';
import Quote from './components/Quote';
import Details from './components/Details';

const App = () => {

  const dispatch = useAppDispatch()
  const { status } = useAppSelector(state => state.clock)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTimeZone())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const [active, setActive] = useState(false)

  return (
    <Container>
        <Quote />
        <Clocks active={active} setActive={setActive} />
      {active && <Details />}
    </Container>
  );
}

export default App;
