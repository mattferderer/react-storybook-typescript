import * as React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// const { Button, Welcome } = require('@storybook/react/demo')
import RandomImage from "../src/components/RandomImage"

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button !!</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf("Random Image", module)
  .add("with props", () => <RandomImage width={500} height={300} />)
  .add("without props", () => <RandomImage />)
