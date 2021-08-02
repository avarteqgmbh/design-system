import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { LinkProps } from '@material-ui/core'
import { Link } from './Link'

export default {
  title: 'Navigation/Link',
  component: Link,
  argTypes: {
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary']
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
      // TODO: Resolve warn props type issue
      component='button'
      variant='body2'
      onClick={(): void => {
        // TODO: Add action
      }}
      {...args}
    >
      Button Link
    </Link>
  )
}
