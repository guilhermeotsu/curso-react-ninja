'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Action from './index'

// A ideia é que cada metodo add tenha um estado unico do componente
storiesOf('Actions', module).add('Actions Component', () => (
  // estado na nossa aplicação
  <Action
    handleClickRepos={action('Get Repos')}
    handleClickFavs={action('Get Starred')}
  />
))
