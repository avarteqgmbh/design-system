import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BreadcrumbsProps, Typography } from '@material-ui/core'

import { Breadcrumbs } from './Breadcrumbs'
import { Link } from '../Link/Link'

export default {
  title: '💧 Atoms/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

function handleClick(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
): void {
  event.preventDefault()
  console.log('You clicked a breadcrumb')
}

export const Default: Story<BreadcrumbsProps> = (args): JSX.Element => {
  return (
    <Breadcrumbs {...args} aria-label='breadcrumb'>
      <Link color='inherit' href='/' onClick={handleClick}>
        Material-UI
      </Link>
      <Link color='inherit' href='/' onClick={handleClick}>
        Core
      </Link>
      <Typography color='primary'>Breadcrumb</Typography>
    </Breadcrumbs>
  )
}

export const Custom: Story<BreadcrumbsProps> = (args): JSX.Element => {
  return (
    <Breadcrumbs {...args} separator='>' aria-label='breadcrumb'>
      <Link color='inherit' href='/' onClick={handleClick}>
        Material-UI
      </Link>
      <Link color='inherit' href='/' onClick={handleClick}>
        Core
      </Link>
      <Typography color='primary'>Breadcrumb</Typography>
    </Breadcrumbs>
  )
}
