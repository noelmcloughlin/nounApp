// https://www.learnstorybook.com/react/en/get-started/

import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// COMPONENTS
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Noun from '../src/components/noun/'

storiesOf("Noun App/Header", module).add("default", () => (
  <Header noPersons={10} noPlaces={10} noThings={10} />
));

storiesOf("Noun App/Filter Controls", module).add("default", () => (
  <FilterControls />
));

const sample = {
  name: {first:'Joe', last:'Bloggs'},
  email: 'j.bloggs@example.com',
  phone: '012-3456789',
  picture: {thumbnail: './profile.png', large: './profile.png'}
};

storiesOf("Noun App/Noun", module).add("default", () => ( 
  <Noun noun={sample}/>
));


