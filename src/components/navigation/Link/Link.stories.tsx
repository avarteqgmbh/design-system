import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Link, LinkProps } from './Link'

export default {
  title: 'Navigation/Link',
  component: Link,
  argTypes: {
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary']
    },
    component: {
      control: { type: 'element type' },
      defaultValue: 'a',
      table: {
        type: { summary: 'element type' },
        defaultValue: { summary: 'a' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<LinkProps> = (args) => {
  return <Link {...args}>Example Link</Link>
}

export const Default = Template.bind({})
Default.args = {
  color: 'primary'
}

export const ButtonLink: Story<LinkProps> = (args): JSX.Element => {
  return (
    <Link
      component='button'
      variant='body2'
      onClick={(): void => {
        console.log("I'm a button.")
      }}
      {...args}
    >
      Button Link
    </Link>
  )
}
