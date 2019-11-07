import React, { useState, useEffect } from 'react';
import { Input, FileInput } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { Container, Content } from './styles';
import DefaultButton from '../../../components/DefaultButton';
import RegisterForm from '../../../components/RegisterForm';
import DatePicker from '../../../components/DatePicker';
import Select from '../../../components/Select';
import Loading from '../../../components/Loading';

const schema = Yup.object().shape({
    title: Yup.string().required('The title field is required'),
    start_date: Yup.date().required('The start date field is required'),
    end_date: Yup.date().required('The end date field is required'),
    people: Yup.array(Yup.string()).required('The cpf field is required'),
    attach: Yup.string(),
});

export default function ContractRegister() {
    const [loading, setLoading] = useState(true);
    const [registeredPeople, setRegisteredPeople] = useState([]);

    useEffect(() => {
        async function getPeopleFromDatabase() {
            const response = await api.get('/people');

            const optionsInSelect = response.data.map(item => ({
                id: item.id,
                title: `${item.name} ${item.last_name}`,
            }));
            setRegisteredPeople(optionsInSelect);
            setLoading(false);
        }

        getPeopleFromDatabase();
    }, []);

    function handleSubmit(data, { resetForm }) {
        console.log(data);
        async function createInDB() {
            await api.post('/contracts', data);
            resetForm();
        }
        createInDB();
        toast.success('A new contract was successfully saved to the database');
    }

    function handleProgress() {
        console.log('In progress');
    }
    /**
     *
     * <FileInput
                            name="attach"
                            onStartProgress={handleProgress}
                        />
     */

    return (
        <Container>
            {loading ? (
                <Loading size={80} color="#00a3ed" />
            ) : (
                <Content>
                    <h2>Register a new contract</h2>
                    <RegisterForm schema={schema} onSubmit={handleSubmit}>
                        <Input type="text" name="title" label="Title" />
                        <label>Start date</label>
                        <DatePicker name="start_date" />
                        <label>End date</label>
                        <DatePicker name="end_date" />
                        <label>People in contract</label>
                        <Select
                            name="people"
                            multiple
                            options={registeredPeople}
                        />

                        <DefaultButton background="#00d4ad" border="#00d4ad">
                            Register
                        </DefaultButton>
                    </RegisterForm>
                </Content>
            )}
        </Container>
    );
}
