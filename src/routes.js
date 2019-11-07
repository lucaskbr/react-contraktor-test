import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';

import PeopleList from './pages/People/List';
import PeopleRegiser from './pages/People/Register';

import ContractList from './pages/Contract/List';
import ContractRegister from './pages/Contract/Register';
import ContractListById from './pages/Contract/ListById';

export default function Routes() {
    return (
        <>
            <Route path="/" exact component={Home} />

            <Route path="/people" exact component={PeopleList} />
            <Route path="/people/create" exact component={PeopleRegiser} />

            <Route path="/contract" exact component={ContractList} />
            <Route path="/contract/create" exact component={ContractRegister} />
            <Route path="/contract/id/:contract" component={ContractListById} />
        </>
    );
}
