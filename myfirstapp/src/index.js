import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Type 1 : No render
//root.render(<App/>);

//Type 2 : Render every 1 second
function ref() {
  root.render(<App/>);
}


setInterval(ref, 1000);