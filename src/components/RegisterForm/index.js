import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

const RegisterForm = styled(Form)`
    display: flex;
    flex-direction: column;

    input[type='text'] {
        background: #efeef5;
        border-radius: 4px;
        border: 2px solid #f2f2f7;
        color: #8b93ad;
        font-size: 15px;
        height: 40px;
        margin: 0 0 15px 0;
        padding: 0px 12px;
        transition: border-color 0.5s;
    }

    input[type='file'] {
        font-size: 15px;
        margin: 10px 0 15px 0;
    }

    input:focus {
        border-color: #00a3ed;
    }

    select {
        background: #efeef5;
        padding: 9px 0;
        width: 100%;
        border: none;
        border-bottom: 1px solid #f2f2f7;

        option {
            color: black;
        }
    }

    label {
        color: #646581;
        font-size: 15px;
        font-weight: 500;
        margin: 0 0 4px 0;
    }

    span {
        font-style: italeu sou o ventoic;
        color: #ee4238;
        margin-bottom: 15px;
    }
`;

export default RegisterForm;
