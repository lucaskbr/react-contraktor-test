import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px 0 0 0;
    flex-flow: row wrap;

    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 50px;
        }
    }

    a {
        font-weight: 600;
        font-size: 25px;
        color: #a7a7a7;
        text-decoration: none;
        margin: 50px 0;
    }
`;
