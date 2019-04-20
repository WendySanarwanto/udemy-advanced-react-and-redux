import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

const API_HOST_URL = `http://jsonplaceholder.typicode.com`;

beforeEach(() => {
  moxios.install(); // INtercept any request issued by axios
  moxios.stubRequest(`${API_HOST_URL}/comments`, {
    status: 200,
    data: [{ id: 1, name: 'Fetched #1' }, { id:2, name: 'Fetched #2'}]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it(`can fetch a list of comments and display them`, () => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the `fetchComments` button and click it
  wrapped.find('#btn-fetch-comments').simulate('click');

  // Expect to find a list of comments
  expect(wrapped.find('li')).toHaveLength(2);
});
