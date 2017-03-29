jest.dontMock('react');
jest.dontMock('react-dom');
jest.dontMock('react-addons-test-utils');

import * as React from 'react';
import {Router, browserHistory} from 'react-router';
import {render , mount} from 'enzyme';
import routes from '../router';
import Home from '../../routes/home';
import NotFound from '../../routes/404';


describe('Application bootstrap', () => {

  it('bootstaps the application, sets up the router with "/" being the index route', (done) => {
    
    const component = mount(
          <div>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </div> 
    );

    done();
  });
});
describe('converts', () => {

  it('converts', (done) => {
    
    const data = JSON.stringify({one:283});
    done()
  });
});