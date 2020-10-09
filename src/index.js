import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BlogStart from './components/BlogStart'
import BellaBlog from './components/BellaBlog'
import LandscapeBlog from './components/LandscapeBlog'
import * as serviceWorker from './serviceWorker';
import Logo from './components/logo';
import StaticNav from './components/StaticNav';
import SlidingNav from './components/SlidingNav';


ReactDOM.render(
  <React.StrictMode>
  	<StaticNav />
  	<SlidingNav />
    <BlogStart />
    <BellaBlog />
    <LandscapeBlog />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
