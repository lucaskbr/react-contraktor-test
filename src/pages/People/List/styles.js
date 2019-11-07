import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
`;

export const List = styled.div`
    width: 100%;
    overflow-x: auto;
`;

export const ListHeader = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;
`;

export const ListBody = styled.table`
    width: 100%;
    border-collapse: collapse;

    td,
    th {
        border: none;
        padding: 10px;
        text-align: center;
    }
    tr {
        height: 70px;
    }

    th {
        font-weight: 400;
    }

    td {
        font-size: 16px;
        font-weight: 100;

        svg {
            cursor: pointer;

            &:hover {
                transform: scale(1.1);
                color: ${darken(0.09, '#eee')} !important;
            }
        }
    }

    thead {
        tr {
            background: #01a3ed;
            color: #fff;
            font-size: 18px;
            padding: 20px 0;
            height: 80px;
        }
    }

    tbody {
        tr {
            &:nth-child(even) {
                background: #fbfbfb;
            }

            &:hover {
                background: ${darken(0.02, '#fbfbfb')} !important;
            }
        }
    }
`;
