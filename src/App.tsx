import React from 'react';
import './App.css';
import Books from './Books';
import Authors from './Authors';

function App() {
  return (
    <div className='row' >
      <div className='col-12 text-center mt-3'>
        <h2 className='hero-title' > My Library </h2>
      </div>
      <div className='col-12 border-0 px-0 my-2' >
        <img src="library.webp" alt="library" className='img-fluid border-0' />
      </div>
      <div className='col-12 my-2 text-end' >
        <h4 className='credit-text'> Photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Hunko</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> </h4>
      </div>
      <div className='col-6' >
        <Books></Books>
      </div>
      <div className='col-6' >
        <Authors></Authors>
      </div>
    </div>
  );
}

export default App;
