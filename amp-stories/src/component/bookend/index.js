import * as React from 'react';
import bookendTemplate from './bookend.json';

const reactions = () => {
  return [{
    "type": "heading",
    "text": "Reactions?"
  },
  {
    "type": "cta-link",
    "links": [
      {
        "text": "👍",
        "url": "example.com/signup"
      },
      {
        "text": "🤔",
        "url": "example.com/subscribe"
      },
      {
        "text": "💬",
        "url": "example.com/subscribe"
      },
      {
        "text": "✏️",
        "url": "example.com/subscribe"
      }
    ]
  }]
}

const nextup = () => {
  return [
    {
      "type": "heading",
      "text": "Next up: What's the story with SkillGraft stories"
    },
    {
      "type": "small",
      "title": "Behind the story",
      "url": "/stories/behind-the-story",
      "amphtml": true,
      "image": "/static/stories/story1/thumbnail.png"
    },
    {
      "type": "small",
      "title": "AMP Animations",
      "url": "/stories/animations",
      "image": "/static/stories/story2/thumbnail.png"
    },
    {
      "type": "small",
      "title": "Use video elements",
      "url": "/stories/media-components",
      "image": "/static/stories/story3/thumbnail.png"
    },
    {
      "type": "small",
      "title": "AMP Layouts",
      "url": "/stories/layout",
      "image": "/static/stories/story4/thumbnail.png"
    },
    {
      "type": "small",
      "title": "Integrate links, CTAs, and Interactive Elements",
      "url": "/stories/links-cta-ads",
      "image": "/static/stories/story5/thumbnail.png"
    },
    {
      "type": "small",
      "title": "It's your turn now",
      "url": "/stories/wrap-up",
      "image": "/static/stories/story6/thumbnail.png"
    },
  ]
}

const moreInfos = () => {
  return [{
    "type": "heading",
    "text": "more infos"
  },
  {
    "type": "textbox",
    "text": [
      "Food by Enrique McPizza",
      "Choreography by Gabriel Filly",
      "Script by Alan Ecma S.",
      "Direction by Jon Tarantino"
    ]
  }]
}

class Bookend extends React.PureComponent {
  render() {
    const template = bookendTemplate;
    template.components = template.components
      .concat(reactions())
      .concat(nextup())
      .concat(moreInfos());
    return (
      <React.Fragment>
        <amp-story-bookend layout="nodisplay">
          <script type="application/json" dangerouslySetInnerHTML={{__html: JSON.stringify(template) }}></script>
        </amp-story-bookend>
      </React.Fragment>
    )
  }
};

export default Bookend;
