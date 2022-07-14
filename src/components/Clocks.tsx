import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { IoMoon, IoSunny, IoChevronDownCircleOutline, IoChevronUpCircleOutline } from 'react-icons/io5'
import { timeOfDay, currentTime } from '../utils';

const Wrapper = styled.section`
  width: 600px;
  position: relative;
  top: 45%;
  left: 10%;
  font-family: "Inter", sans-serif;
  color: white;
  text-transform: uppercase;
`;

const Time = styled.div`
  position: relative;
  font-size: 12rem;
  font-weight: 500;
`;

const Greeting = styled.span`
  margin-left: 10px;
  font-size: 1.5rem;
  line-height: 2.8rem;
  letter-spacing: 0.3rem;
`;

const Location = styled.div`
  margin-left: 16px;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  line-height: 2.8rem;
`;

const TimeZone = styled.span`
  position: absolute;
  right: -10px;
  bottom: 35px;
  font-size: 40px;
  font-weight: 400;
`;

const MoreButton = styled.button.attrs({
  type: 'button'
})`
  position: absolute;
  bottom: -40px;
  right: -600px;
  width: 150px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 2rem;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 0.3rem;
  background: #fff;
  border: none;
  cursor: pointer;
  z-index: 1;
  :hover {
    color: rgba(0, 0, 0, 1);
  }
`;

type PropsType = {
  active: boolean,
  setActive: (arg: boolean) => void
};

const Clocks: React.FC<PropsType> = ({ active, setActive }) => {

  const { clock } = useAppSelector(state => state.clock)

  const TIME = new Date()

  const greet = timeOfDay(TIME)

  const [time, setTime] = useState(currentTime(TIME))

  let interval = (60 - (new Date()).getSeconds()) * 1000;

  setTimeout(() => setTime(currentTime(new Date())), interval)

  return (
    <Wrapper>
      {greet === 'night' ? <IoMoon size={'30px'} /> : <IoSunny size={'30px'} />}
      <Greeting>
        {`good ${greet}, it's currently`}
      </Greeting>
      <Time>
        {time}
        <TimeZone>
          {clock.abbreviation}
        </TimeZone>
      </Time>
      <Location>
        {clock.timezone}
      </Location>
      <MoreButton onClick={() => setActive(!active)}>
        {active ?
          <>
            <IoChevronUpCircleOutline size="30px" />
            <span>LESS</span>
          </>
          :
          <>
            <IoChevronDownCircleOutline size="30px" />
            <span>MORE</span>
          </>}
      </MoreButton>
    </Wrapper>
  );
};

export default Clocks;