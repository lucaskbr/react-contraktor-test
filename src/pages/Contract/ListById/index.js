import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import api from '../../../services/api';

import { Container } from './styles';

import DefaultButton from '../../../components/DefaultButton';

import pdf from '../../../assets/caelum.pdf';

export default function ContractListById() {
    const { contract: contractId } = useParams();
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        async function getContract() {
            const response = await api.get(`contracts/${contractId}`);
            console.log(response.data);
        }
        getContract();
    }, [contractId]);

    console.log(contractId);

    return (
        <Container>
            <Document file={pdf}>
                <Page
                    pageNumber={pageNumber}
                    renderMode="svg"
                    scale={1}
                    height={420}
                />
                <DefaultButton
                    type="button"
                    onClick={() => setPageNumber(pageNumber + 1)}
                >
                    Next Page
                </DefaultButton>
                <DefaultButton
                    type="button"
                    onClick={() =>
                        pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
                    }
                >
                    Previous Page
                </DefaultButton>
            </Document>
        </Container>
    );
}
