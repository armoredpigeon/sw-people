import React from 'react';
import { useCss } from 'kremling';

const css = `
& .character-info {
    display: flex;
    flex-direction: column;
}

& .character-info span {
    display: block;
    float: left;
}

& .character-name {

}

& .character-birthday {

}

& .planet-name {

}
`

export const Person = (props) => {
    const scoped = useCss(css);
    const { characterName, characterBirthday, planetName } = props;
    return (
        <div className="character-info" {...scoped}>
            <span className="character-name">{characterName}</span>
            <span className="character-birthday">{characterBirthday}</span>
            <span className="planet-name">{planetName}</span>
        </div>
    );
};