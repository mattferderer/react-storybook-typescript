import * as React from 'react'
import * as ReactDOM from 'react-dom'
import RandomImage from './RandomImage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<RandomImage />, div)
})
