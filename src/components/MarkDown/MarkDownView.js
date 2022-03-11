import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../../constants/colors.js';

export const StyledContainer = styled(Container)`
    border: 0;
    border-radius: 12px;
    box-shadow: 2px 2px 6px ${colors.secondaryDark};
    margin-top: 5rem;
    padding: 4rem 8rem;
    background-color: #fffdfa;
`;

function MarkDownView(props) {
    return (
        <StyledContainer>
            <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} className="prose" children={props.content} />
        </StyledContainer>
    );
}

export default MarkDownView;
