import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import TextCard from '../../components/Text/Card';

const MyContainer = styled(Container)`
    padding: 2em;
`;

const StyledRow = styled.div`
    padding: 2em;
`;

const text1 =
    'With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to' +
    ' additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a' +
    'natural lead-in to additional content. With supporting text below as a natWith supporting text below as a natural lead-in' +
    'to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as' +
    'a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With' +
    'supporting text below as a natural lead-in to additional content.ural lead-in to additional content.';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MyContainer fluid="xl">
            <StyledRow>
                <TextCard text={text1} title="How to Build a React WebApp"></TextCard>
            </StyledRow>
            <StyledRow>
                <TextCard text={text1} title="Machine Learning: Where to start?"></TextCard>
            </StyledRow>
            <StyledRow>
                <TextCard text={text1} title="AWS Cloud Computing"></TextCard>
            </StyledRow>
        </MyContainer>
    );
}

export default Blog;
