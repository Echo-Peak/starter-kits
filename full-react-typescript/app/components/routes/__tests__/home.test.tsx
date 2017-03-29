import * as React from 'react';
import {Router, browserHistory} from 'react-router';

describe('Home route"/"', () => {

  it('should find components rendered', (done) => {
    
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