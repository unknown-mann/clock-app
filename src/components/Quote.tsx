import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IoReload } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchQuote } from '../app/clockSlice';

const Wrapper = styled.section`
    position: absolute;
    top: 60px;
    left: 10%;
    width: 650px;
    color: white;
    font-size: 1.2rem;
    line-height: 2rem;
`;

const QuoteContent = styled.div`
`;

const QuoteAuthor = styled.div`
    font-weight: 700;
    margin-top: 10px;
`;

const Button = styled.button.attrs({
    type: 'button'
})`
    position: absolute;
    top: 8px;
    left: -30px;
    background-color: transparent;
    border: none;
    color: white;
    opacity: 0.7;
    :hover {
        opacity: 1;
    }
    :active {
        opacity: 0.6;
    }
`;

const Quote = () => {

    const dispatch = useAppDispatch();

    const { quote } = useAppSelector(state => state.clock)

    useEffect(() => {
        dispatch(fetchQuote())
    }, [])

    return (
        <Wrapper>
            <QuoteContent>
                {`"${quote.content}"`}
            </QuoteContent>
            <QuoteAuthor>
                {quote.author || 'Unknown author'}
            </QuoteAuthor>
            <Button onClick={() => {dispatch(fetchQuote())}}>
                <IoReload size={'20px'}/>
            </Button>
        </Wrapper>
    );
};

export default Quote;