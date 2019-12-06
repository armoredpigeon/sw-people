import React, { useEffect, useState } from 'react';
import { Person } from '../person.component';
import { useCss } from 'kremling';

const css = `
& .person-list {
    display: block;
    width: 100%;
    height: fit-contents;
}
`;

export const PersonList = (props) => {
    const scoped = useCss(css);
    const { personList, pageNumber } = props;

    const [peopleList, setPeopleList] = useState(personList);

    useEffect(() => {
        //do something
    }, [personList.length])

    if(!peopleList || !peopleList.length){
        return (<span>Sorry, nothing is here.</span>);
    }

    return (
        <>
            <ul className="person-list" {...scoped}>
                {peopleList.map((person) => {
                    let propsToPass = {
                        characterName : person.name,
                        characterBirthday : person.birth_year,
                        planetName : person.planetName,
                        characterId : person.id
                    };
                    return (
                        <Person {...propsToPass}/>
                    )
                })}
            </ul>
        </>
    );
}