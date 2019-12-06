import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from 'react-router-dom';

import { PersonList } from './person-list.component';
import { getPeople } from '../../repos/person-list.repo';

export const HomePage = (props) => {
    let match = useRouteMatch();
    let { pageNumber } = useParams;
    
    let personList = [];

    if(!pageNumber){
        pageNumber = 0;
    }
    
    personList = getPeople(pageNumber);

    let propsToPass = {
        personList: personList,
        pageNumber: pageNumber
    }

    return (
        <> OOOOOK!!
            <Switch>
                <Route path={`${match.path}/:pageNumber`}>
                    <PersonList {...propsToPass}/>
                </Route>
                <Route path={`${match.path}`}>
                    <PersonList {...propsToPass}/>
                </Route>
            </Switch>
        </>
    );
};