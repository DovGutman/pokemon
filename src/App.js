import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './i18n';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import Loader from './components/loader/loader.comonent';
import PokemonPage from './pages/pokemon/pokemon.page';
import Header from './components/header/header.component';
import Favorites from './pages/favorites/favorites.page';

function App(props) {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Routes>
            <Route exact path='/' element={<PokemonPage />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
