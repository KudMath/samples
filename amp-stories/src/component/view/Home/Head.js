import React from 'react';
import {Helmet} from 'react-helmet';

const LdJson = {
  headline: 'Skillgraft Home',
  image: ['/static/stories/story1/thumbnail.png'],
};

const Head = () => (
  <Helmet>
    <title>Homepage</title>
    <script type="application/ld+json">{`${JSON.stringify(LdJson)}`}</script>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default Head;
