'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import SaveMessage from './index'

const stories = storiesOf('Save Message', module)

stories.addDecorator((story) => (
  <div style={{ background: '#ccc' }}>
    Mensagem: "{story()}"
  </div>
))

stories.add('with isSaving === null', () => (
  <SaveMessage isSaving={null} />
))

stories.add('with isSaving === false', () => (
  <SaveMessage isSaving={false} />
))

stories.add('with isSaving === true', () => (
  <SaveMessage isSaving={true} />
))
