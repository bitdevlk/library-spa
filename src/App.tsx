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
        <a className='text-reset text-decoration-none' href="https://unsplash.com/photos/ajE5goOGzZc" >
          <h4 className='px-5'> photo credits </h4>
        </a>
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
