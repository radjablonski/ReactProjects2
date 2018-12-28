import React, {Component } from 'react';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';


import personCss from './Person.module.css';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constractor', props);
        this.inputElement = React.createRef();
      }
    
    
      componentWillMount () {
        console.log('[Person.js] inside componentWillMonunt()');
      }

      componentDidMount() {
        console.log('[Person.js] inside componentDidMount');
        if(this.props.position===0){
            this.inputElement.current.focus();
        }
      }

      focus() {
            this.inputElement.current.focus();
      }

    render () {
        console.log('[Person.js] inside person render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>i am authenticated </p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                ref ={this.inputElement}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
        ) 
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,personCss.Person);