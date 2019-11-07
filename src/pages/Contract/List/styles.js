import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    align-items: center;
    display: flex;
    min-height: 50vh;
    margin: 40px 0 0 0;
    justify-content: center;
`;

export const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 750px;
    width: 90%;
`;

export const List = styled.div`
    width: 100%;
`;

export const Contract = styled.ul`
    list-style: none;

    background: #fff;
    margin: 25px;
    padding: 15px;
    transition: box-shadow 0.4s;
    transition: border-color 0.8s;
    border: 2px solid #efeef5;
    border-radius: 5px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 6px 10px #d4d4d4;

    &:hover {
        border-color: #00bd9a;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        margin: 8px;

        &:first-child {
            flex-basis: 100%;
        }

        &:last-child {
            flex-basis: 100%;
        }

        h3 {
            font-size: 25px;
            text-align: center;
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background: #00bd9a;
        border: 1px solid #00bd9a;
        border-radius: 4px;
        color: #fff;
        font-weight: 500;
        font-size: 17px;
        height: 50px;
        margin-top: 10px;
        transition: background 0.5s;
        width: 100%;
        max-width: 450px;

        &:hover {
            background: ${darken(0.05, '#00bd9a')};
        }
    }
`;
