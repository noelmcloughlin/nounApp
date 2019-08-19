import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/samples.js');
  require('../stories/exercises.js');
}

configure(loadStories, module);