import React from 'react';
import { Person } from './person.component';
import { useCss } from 'kremling';

const css = `
& .person-list {
    display: block;
    width: 100%;
    height: fit-contents;
}
`;

export const PersonList = (props) => {
    const { personList, pageNumber } = props;
    return (
        <ul className="person-list">
            {personList.map((person) => {
                let propsToPass = {
                    characterName : person.name,
                    characterBirthday : person.birth_year,
                    planetName : person.homeworld.name
                };
                return (
                    <Person {...propsToPass}/>
                )
            })}
        </ul>
    );
}