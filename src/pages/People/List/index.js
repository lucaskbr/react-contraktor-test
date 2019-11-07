import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';
import api from '../../../services/api';

import { Container, List, ListHeader, ListBody } from './styles';

import LinkButton from '../../../components/LinkButton';

import Loading from '../../../components/Loading';

export default function PeopleList() {
    const [loading, setLoading] = useState(true);
    const [deleteInProcess, setdeleteInProcess] = useState(false);
    const [people, setPeople] = useState([]);
    const headerTitles = ['ID', 'Name', 'Last Name', 'Email', 'CPF', 'Delete'];

    useEffect(() => {
        async function getPeople() {
            const response = await api.get('/people');
            setPeople(response.data);
            setLoading(false);
        }

        getPeople();
    }, []);

    async function deleteFromDatabase(id, name) {
        const response = await api.delete(`/people/${id}`);
        const listPeople = people.filter(p => p.id !== id);
        setPeople(listPeople);
        toast.success(
            `${name} with id ${id} was successfully deleted from database`
        );
    }

    return (
        <Container>
            {loading ? (
                <Loading size={80} color="#01a3ed" />
            ) : (
                <List>
                    <ListHeader>
                        <LinkButton to="/people/create" width="300px">
                            Register new
                        </LinkButton>
                    </ListHeader>
                    <ListBody>
                        <thead>
                            <tr>
                                {headerTitles.map(title => (
                                    <th>{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {people.map(p => {
                                return (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.last_name}</td>
                                        <td>{p.email}</td>
                                        <td>{p.cpf}</td>
                                        <td>
                                            <FaTrash
                                                size={25}
                                                color="#eee"
                                                onClick={() =>
                                                    deleteFromDatabase(
                                                        p.id,
                                                        p.name
                                                    )
                                                }
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </ListBody>
                </List>
            )}
        </Container>
    );
}
