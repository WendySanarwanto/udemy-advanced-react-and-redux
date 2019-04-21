import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

const API_HOST_URL = `https://jsonplaceholder.typicode.com`;

jest.setTimeout(60000);

beforeEach(() => {
  moxios.install(); // INtercept any request issued by axios
  moxios.stubRequest(`${API_HOST_URL}/comments`, {
    status: 200,
    response: [{ id: 1, name: 'Fetched #1' }, { id:2, name: 'Fetched #2'}]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it(`can fetch a list of comments and display them`, (done) => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the `fetchComments` button and click it
  const buttonFetchComments = wrapped.find('#btn-fetch-comments');
  expect(buttonFetchComments).toHaveLength(1);
  buttonFetchComments.simulate('click');

  // Introduce a tiny little pause to ensure the comments are picked before being asserted.
  setTimeout(() => {
    wrapped.update();
    // Expect to find a list of comments
    // console.log(`wrapped.find('li').length = ${wrapped.find('li').length}`);
    expect(wrapped.find('li')).toHaveLength(2);
    done();
  }, 100);
});
