import React, { Component } from 'react';
import { render } from 'react-dom';
import {TestOne, Hello} from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: {fName: 'React', lName:" Awesome"},
      arrName: [{fName: 'Raj', lName:" Singh"}, {fName: 'Ranjan', lName:" Singh"},{fName: 'Ravi', lName:" Singh"},{fName: 'Annu', lName:" Singh"},{fName: 'Anvi', lName:" Singh"}]
    };
    this.childClick = this.childClick.bind(this);
  }


  childClick(idx, msg){
    alert(msg);
    const persons = [...this.state.arrName];
    persons.splice(idx, 1);
    this.setState({arrName:persons});
  }

  render() {
    const hello$;
    
    hello$ = this.state.arrName.map((person, index) => 
        <Hello className="person-block" 
              name={person} 
              counter={index} 
              childAction={this.childClick} />);
    

    return (
      <div class="body">
         {hello$}         
            
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


// Animatinon
//  <TestOne name= {this.state.name} /> 
      
      