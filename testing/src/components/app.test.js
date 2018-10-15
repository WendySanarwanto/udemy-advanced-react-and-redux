import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain(`<h4 class="app-header">Put more components here !</h4>`);
  ReactDOM.unmountComponentAtNode(div);
});
