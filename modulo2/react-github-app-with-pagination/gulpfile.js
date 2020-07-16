'use strict'

const gulp = require('gilp')
const { spawn } = require('child_process')

gulp.task('lint', (cb) => {
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit'})
  cmd.on('close', () => cb())
})

gulp.task('default', () => {
  gulp.watch('src/**/*.js', ['lint'])
})