'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

storiesOf('Pagination', module)
  .add('without props', () => <Pagination />)
  .add('with total and active page', () => (
    <Pagination total={15} activePage={3} />
  ))
  .add('with pageLink', () => (
    <Pagination
      total={15}
      activePage={5}
      pageLink='https://mypage.com/page/%page%'
    />
  ))
  .add('with callback function', () => (
    <Pagination
      total={15}
      activePage={10}
      pageLink='https://mypage.com/page/%page%'
      onClick={page => window.alert(page)}
    />
  ))
