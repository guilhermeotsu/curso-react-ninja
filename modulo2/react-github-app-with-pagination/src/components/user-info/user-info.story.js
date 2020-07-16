'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import UserInfo from './index'

storiesOf('UserInfo', module).add('with data', () => (
  <UserInfo
    userinfo={{
      avatar: 'https://avatars2.githubusercontent.com/u/26774003?v=4',
      login: 'guilhermeotsu',
      username: 'Guilherme Otsu',
      userinfo: 10,
      followers: 10,
      following: 10,
      create: '10/10/2020',
      updated: '10/10/2020'
    }}
  />
))
