import React, { Component } from 'react';
import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import mensajes from './mensajes';

class Home extends Component {
  constructor(props){
    super(props)
    console.log(props);
    this.lenguaje = props.lenguaje;
    this.state={
      locale:this.lenguaje,      
    }
  }


  render() {    
    console.log(`this.state.locale= ${this.state.locale}`);
    return (
      <IntlProvider locale={this.state.locale} messages={mensajes[this.state.locale]}>
        <div className="App">
          <header className="App-header">
            <q><FormattedMessage id="contenido" defaultMessage="mensaje por defecto" /></q>
            <p><FormattedMessage id="autor" defaultMessage="mensaje por defecto" /></p>
          </header>
        </div>
      </IntlProvider>
    );
  }
}

export default Home;
