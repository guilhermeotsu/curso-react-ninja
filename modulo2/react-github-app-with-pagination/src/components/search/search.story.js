'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Search from './index'

storiesOf('Search', module)
  .add('with isFetching true', () => (
    <Search isFetching handleSearch={action('Searching user')} />
  ))

  .add('with isFetching false', () => (
    <Search isFetching={false} handleSearch={action('Search user')} />
  ))
