import * as React from 'react';

import Head from './Head';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head />
        <h1
          style={{
            color: 'white',
          }}
        >
          Some scaffolding here
        </h1>
        <a href="/stories/millennials">your story here</a>
      </React.Fragment>
    );
  }
}

export default Home;
