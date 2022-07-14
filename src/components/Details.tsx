import React from 'react';
import { useAppSelector } from '../app/hooks';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const Wrapper = styled(motion.section)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(30px);
    color: white;
    padding: 50px 0 50px 120px;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const Detail = styled.div`
    padding: 20px;
`;

const Title = styled.div`
    font-size: 1rem;
    line-height: 2.8rem;
    letter-spacing: 0.2rem;
`;

const Content = styled.div`
    padding-top: 20px;
    font-size: 3rem;
    font-weight: 700;
`;

const Details = () => {

    const { clock } = useAppSelector(state => state.clock)

    const {
        timezone,
        day_of_year: day,
        day_of_week: week,
        week_number: weekNumber
    } = clock;

    return (
        <AnimatePresence>
            <Wrapper
             initial={{y: 500}} 
             animate={{y: 0}} 
             transition={{ duration: 0.5, type: 'ease' }}  >
                <Detail>
                    <Title>CURRENT TIMEZONE</Title>
                    <Content>{timezone}</Content>
                </Detail>
                <Detail>
                    <Title>DAY OF THE WEEK</Title>
                    <Content>{week}</Content>
                </Detail>
                <Detail>
                    <Title>DAY OF THE YEAR</Title>
                    <Content>{day}</Content>
                </Detail>
                <Detail>
                    <Title>WEEK NUMBER</Title>
                    <Content>{weekNumber}</Content>
                </Detail>
            </Wrapper>
        </AnimatePresence>
    );
};

export default Details;