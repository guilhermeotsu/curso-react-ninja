'use strict' 

import React from 'react'
import { storiesOf } from '@kadira/storybook'

storiesOf('Historia do Component Div', module)
  .add('Primeira Historia', () => (
    // estado na nossa aplicação
    <div>Hello World!</div>
  ))