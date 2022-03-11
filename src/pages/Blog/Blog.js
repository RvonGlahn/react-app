import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import MarkDownView from '../../components/MarkDown/MarkDownView';
import { webapp, webapp_short } from './articles/webapp.js';
import TextCard from '../../components/Text/Card';

const MyContainer = styled(Container)`
    padding: 2em;
`;

const StyledRow = styled.div`
    padding: 2em;
`;

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // create Effekt to load markdown blog

    return (
        <div>
            <MarkDownView content={webapp}></MarkDownView>
            <MyContainer fluid="xl">
                <StyledRow>
                    <TextCard text={webapp_short} title="How to Build a React WebApp"></TextCard>
                </StyledRow>
                <StyledRow>
                    <TextCard text={webapp_short} title="Machine Learning: Where to start?"></TextCard>
                </StyledRow>
                <StyledRow>
                    <TextCard text={webapp_short} title="AWS Cloud Computing"></TextCard>
                </StyledRow>
            </MyContainer>
        </div>
    );
}

export default Blog;
