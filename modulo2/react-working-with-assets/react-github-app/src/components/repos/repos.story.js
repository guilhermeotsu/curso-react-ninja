'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title prop', () => <Repos title='Favoritos' />)

  .add('with repos prop', () => (
    <Repos
      title='Favoritos'
      repos={[
        {
          id: 1,
          name: 'curso-react',
          link: 'https://github.com/da2k/curso-reactjs-ninja'
        },
        {
          id: 2,
          name: 'github',
          link: 'https://github.com/'
        },
        {
          id: 3,
          name: 'google',
          link: 'https://google.com'
        }
      ]}
    />
  ))
