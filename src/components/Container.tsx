import React from 'react';
import styled from 'styled-components';
import { timeOfDay } from '../utils';
import night from "../assets/night.jpg"
import morning from "../assets/morning.jpg"
import afternoon from "../assets/afternoon.jpg"
import evening from "../assets/evening.jpg"

const currentTime = () => {
    switch (timeOfDay(new Date())) {
        case 'night':
            return night
        case 'morning':
            return morning
        case 'afternoon':
            return afternoon
        default:
            return evening
    }
}

const ContainerEl = styled.main`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${currentTime()});
    background-size: cover;
`;

type PropsType = {
    children: React.ReactNode
}

const Wrapper: React.FC<PropsType> = ({children}) => {
    return (
        <ContainerEl>
            {children}
        </ContainerEl>
    );
};

export default Wrapper;