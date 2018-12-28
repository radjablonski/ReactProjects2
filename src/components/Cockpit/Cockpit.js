import React from 'react'
import myCss from './Cockpit.module.css';

import Aux from '../../hoc/Aux';

const cockpit = (props) => {


    let btnClass = myCss.Button;
    if (props.showPersons) {
        btnClass = [myCss.Button, myCss.Red].join(' ');
    }

    const assignClasses = [];
    if ( props.persons.length <= 2 ) {
      assignClasses.push( myCss.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignClasses.push( myCss.bold ); // classes = ['red', 'bold']
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join( ' ' )}>This is really working!</p>
            <button className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}> Log in </button>
        </Aux>
    )
}

export default React.memo(cockpit);