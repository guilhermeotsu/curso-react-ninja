'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import AppContent from './index'

storiesOf('AppContent', module)
  .add('with datas', () => (
    <AppContent
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
      starred={[
        {
          id: 1,
          name: 'curso-react-starred',
          link: 'https://github.com/da2k/curso-reactjs-ninja'
        },
        {
          id: 2,
          name: 'github-starred',
          link: 'https://github.com/'
        },
        {
          id: 3,
          name: 'google-starred',
          link: 'https://google.com'
        }
      ]}
      isFetching
      handleSearch={action('Get user')}
      handleClickRepos={action('Get repos')}
      handleClickFavs={action('Get Starred')}
    />
  ))

  .add('with no datas', () => (
    <AppContent
      repos={[]}
      starred={[]}
      isFetching={false}
      handleSearch={action('Search User')}
      handleClickRepos={action('Get repos')}
      handleClickFavs={action('Get favs')}
    />
  ))
