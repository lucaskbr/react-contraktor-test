import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <Container>
            <div>
                <img src={logo} alt="contraktor" />
            </div>
            <Link to="/">Home</Link>
            <Link to="/people">People</Link>
            <Link to="/contract">Contracts</Link>
        </Container>
    );
}
