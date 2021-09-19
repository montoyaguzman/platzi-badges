// With HTML native
/*
const element = document.createElement('h1');
element.innerHTML = 'Hello, Platzi Badges!';
const container = document.getElementById('app');
container.appendChild(element);
*/


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from './components/Badge';
import './components/styles/global.css';
const container = document.getElementById('app');

/*
const name = 'montoyitag';

// ejemplo 1 jsx
const htmlElement = React.createElement('h1', {}, 'Hola, Platzi Badges');
const jsxElement = <h1>Hello, Platzi Badges - by {name}</h1>;

// ejemplo 2 jsx
const htmlElement2 = React.createElement(
    'div', 
    {}, 
    React.createElement('h1', {}, 'jose montoya'),
    React.createElement('p', {}, 'soy front end'),
    );
const jsxElement2 = (<div>
    <h1>jose montoya</h1>
    <p>soy front end</p>
</div>);
*/

// ReactDOM.render(qué, donde);
ReactDOM.render(
    <Badge firstName="Jose"
        lastName="Montoya"
        avatarUrl=""
        jobTitle="Front end developer"
        twitter="@montoyitag"
    />
    , container);
