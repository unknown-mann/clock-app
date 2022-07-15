import React, { useEffect } from 'react';
import styled from 'styled-components';
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

const Quote: React.FC = React.memo(() => {

    const dispatch = useAppDispatch();

    const { quote, status } = useAppSelector(state => state.clock)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchQuote())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Wrapper>
            <QuoteContent>
                {quote.content ? `"${quote.content}"` : ''}
            </QuoteContent>
            <QuoteAuthor>
                {quote.author || ''}
            </QuoteAuthor>
        </Wrapper>
    )
});

export default Quote;