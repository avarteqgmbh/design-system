import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BreadcrumbsProps } from '@material-ui/core'
import { Typography } from '../../index'
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons'

import { Breadcrumbs } from './Breadcrumbs'
import { Link } from '../Link/Link'

export default {
  title: 'Navigation/Breadcrumbs',
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
  // TODO: add action here
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

export const Custom: Story<BreadcrumbsProps> = (): JSX.Element => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize='small' />}
      aria-label='breadcrumb'
    >
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
