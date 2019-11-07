import React from 'react';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { Container, Content } from './styles';
import DefaultButton from '../../../components/DefaultButton';
import RegisterForm from '../../../components/RegisterForm';

const schema = Yup.object().shape({
    name: Yup.string().required('The name field is required'),
    last_name: Yup.string().required('The last name field is required'),
    email: Yup.string()
        .email('The e-mail is invalid')
        .required('The e-mail field is required'),
    cpf: Yup.number()
        .typeError('Enter numbers only')
        .required('The cpf field is required'),
    phone: Yup.number()
        .typeError('Enter numbers only')
        .required('The phone field is required'),
});

export default function PeopleRegister() {
    function handleSubmit(data, { resetForm }) {
        console.log(data);
        api.post('/people', data);
        resetForm();
        toast.success('A new person was successfully saved to the database');
    }

    return (
        <Container>
            <Content>
                <h2>Register a new person</h2>
                <RegisterForm schema={schema} onSubmit={handleSubmit}>
                    <Input type="text" name="name" label="Name" />
                    <Input type="text" name="last_name" label="Last name" />
                    <Input type="text" name="email" label="E-mail" />
                    <Input type="text" name="cpf" label="CPF" />
                    <Input type="text" name="phone" label="Phone number" />
                    <DefaultButton background="#00d4ad" border="#00d4ad">
                        Register
                    </DefaultButton>
                </RegisterForm>
            </Content>
        </Container>
    );
}
