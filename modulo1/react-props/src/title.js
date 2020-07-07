'use strict'

import React from 'react'

const Title = ({ name, lastname }) => {
  return (
    <h1>pai ta chatoooo {`${name} ${lastname}`} </h1>
  )
}

Title.defaultProps = {
  name: 'pai ta sem nome',
  lastname: 'pai ta sem sobrenome'
}

export default Title
