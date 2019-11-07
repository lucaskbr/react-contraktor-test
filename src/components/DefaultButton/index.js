import styled from 'styled-components';
import { darken } from 'polished';

const DefaultButton = styled.button.attrs(props => ({
    type: 'buttton',
}))`
    background: ${props => props.background || '#00a3ed'};
    border: 1px solid ${props => props.border || '#00a3ed'};
    border-radius: 4px;
    color: ${props => props.color || '#fff'};
    font-weight: 500;
    font-size: 17px;
    height: 50px;
    margin-top: 10px;
    transition: background 0.5s;
    width: 100%;
    max-width: ${props => props.width || '450px'};

    &:hover {
        background: ${props => darken(0.05, props.background || '#00a3ed')};
    }
`;

export default DefaultButton;
