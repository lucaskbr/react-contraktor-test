import React from 'react';

import { FaCircleNotch } from 'react-icons/fa';
import { Container } from './styles';

export default function Loading({ size, color }) {
    return (
        <Container>
            <FaCircleNotch size={size} color={color} />
        </Container>
    );
}
