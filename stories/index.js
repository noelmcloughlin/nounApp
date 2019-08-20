// https://www.learnstorybook.com/react/en/get-started/

import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Header from '../src/components/header/'
storiesOf("Noun App/Header", module).add("default", () => (
  <Header noPersons={10} noPlaces={10} noThings={10} />
));

import FilterControls from '../src/components/filterControls/'
storiesOf("Noun App/Filter Controls", module).add("default", () => (
  <FilterControls />
));
