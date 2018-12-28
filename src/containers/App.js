import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import User from '../components/User/User';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


import myCss from './App.module.css';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] inside constractor', props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showUserComponent: true,
      toggleClickedCounter: 0,
      authenticated: false
    };
  }

  componentWillMount () {
    console.log('[App.js] inside componentWillMonunt()');

  }
  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] inside the shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] inside the componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[Update App.js] inside the componentDidUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[Update App.js] inside the getDerivedStateFromProps', nextProps, prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate () {
    console.log('[Update App.js] inside the getSnapshotBeforeUpdate');

  }

  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Max', age: 28 },
  //     { id: 'vasdf1', name: 'Manu', age: 29 },
  //     { id: 'asdf11', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;  

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => { 
      return {
        showPersons: !doesShow , 
        toggleClickedCounter: prevState.toggleClickedCounter+1
      }
      });
  }

  removeUserHandler = () => {
    this.setState({showUserComponent : false})
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }


  render () {
    console.log('[App.js] inside render()');

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}> show perosn</button>
          <Cockpit  
            appTitle = {this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            login={this.loginHandler}
            clicked = {this.togglePersonsHandler}
          />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
          {/* {this.state.showUserComponent ? <User/>   : null} */}
          <button onClick={this.removeUserHandler}>Remove User Component</button>
      </Aux>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, myCss.App) ;
