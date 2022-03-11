import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../../constants/colors';

const StyledButton = styled.button`
    display: inline-block;
    color: ${colors.lightText};
    background-color: ${colors.primaryDark};
    opacity: 0.7;
    border: 1px solid ${colors.primaryDark};
    box-shadow: 1.5px 1.5px 2px ${colors.secondaryDark};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 8px;
    display: block;
    &:hover {
        opacity: 1;
        background-color: ${colors.secondaryDark};
        border: 1px solid ${colors.secondaryDark};
    }
`;

export const StyledCard = styled(Card)`
    border: 0;
    border-radius: 12px;
    box-shadow: 2px 2px 6px ${colors.secondaryDark};
`;

const StyledHeader = styled(Card.Header)`
    background-color: ${colors.secondary};
    color: ${colors.darkText};
    font-size: 1.5em;
    opacity: 0.9;
`;

function TextCard(props) {
    return (
        <StyledCard style={{}}>
            <StyledHeader>{props.title}</StyledHeader>
            <Card.Body>
                <Card.Text>{props.text}</Card.Text>
                <StyledButton>Read more ...</StyledButton>
            </Card.Body>
        </StyledCard>
    );
}

export default TextCard;
