import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import { Container, Content, List, Contract } from './styles';

import Loading from '../../../components/Loading';

import LinkButton from '../../../components/LinkButton';

export default function ContractList() {
    const [loading, setLoading] = useState(true);
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        async function loadContracts() {
            const response = await api.get('/contracts');
            setContracts(response.data);
            setLoading(false);
        }

        loadContracts();
    }, []);

    return (
        <Container>
            <Content>
                {loading ? (
                    <Loading size={80} color="#00a3ed" />
                ) : (
                    <>
                        <LinkButton
                            to="contract/create"
                            background="#00A586"
                            border="#00A586"
                        >
                            Register new contract
                        </LinkButton>
                        <List>
                            {contracts.map(contract => {
                                return (
                                    <Contract>
                                        <li>
                                            <h3>{contract.title}</h3>
                                        </li>
                                        <li>
                                            <strong>Start date:</strong>
                                            {contract.start_date}
                                        </li>
                                        <li>
                                            <strong>End date:</strong>
                                            {contract.end_date}
                                        </li>
                                        <li />
                                        <li>
                                            <Link
                                                to={`contract/id/${contract.id}`}
                                            >
                                                View file
                                            </Link>
                                        </li>
                                    </Contract>
                                );
                            })}
                        </List>
                    </>
                )}
            </Content>
        </Container>
    );
}
