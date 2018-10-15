import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { appStore } from '../stores';
import App from './app';

describe("App Component", () => {

  it('shows enter comment form and comments list', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={appStore}>
        <App />
      </Provider>, 
    div);    
    
    expect(div.innerHTML).toContain(`<div class=\"app container\"><div><h4>Enter a Comment</h4><form class=\"input-group\"><textarea rows=\"4\" cols=\"50\" class=\"form-control\" placeholder=\"Here is my comment\"></textarea><button class=\"btn btn-primary\" type=\"submit\">Submit</button></form></div><div class=\"items-list-container\"><hr><h4>Comments list</h4><span>You have not entered any comments here.</span><ul class=\"list-group\"></ul></div></div>`);

    ReactDOM.unmountComponentAtNode(div);
  });
  
});
