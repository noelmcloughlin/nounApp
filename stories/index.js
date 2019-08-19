// https://www.learnstorybook.com/react/en/get-started/

import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'

storiesOf("Noun App/Header", module).add("default", () => (
  <Header "Persons": noPersons={10} "Places: " noPlaces={10} "Things" noThings={10} />
));

