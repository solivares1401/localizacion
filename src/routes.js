import React from 'react';
import { render } from 'react-dom';
import { addLocaleData } from 'react-intl';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const Loading = () => <div>Cargando...</div>;

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

function getIdioma(a){
  const idioma = a.location.pathname.slice(1);
  addLocaleData(require(`react-intl/locale-data/${idioma}`)); //carga dinamica de libreria para idioma
  return idioma;
}

render(
  <Router>
    <div>
      <NavLink to='/es'>Español</NavLink>&nbsp;&nbsp;
      <NavLink to='/en'>Inglés</NavLink>&nbsp;&nbsp;
      <NavLink to='/fr'>Francés</NavLink>&nbsp;&nbsp;
      <NavLink to='/pt'>Portugués</NavLink>      
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/es" render={(a) => <Home lenguaje={getIdioma(a)} />} />
      <Route path="/en" render={(a) => <Home lenguaje={getIdioma(a)} />} />
      <Route path="/fr" render={(a) => <Home lenguaje={getIdioma(a)} />} />
      <Route path="/pt" render={(a) => <Home lenguaje={getIdioma(a)} />} />
    </div>
  </Router>,
  document.getElementById('root'),
)


