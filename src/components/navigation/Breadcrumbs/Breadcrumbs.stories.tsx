import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BreadcrumbsProps } from '@mui/material'
import { ArrowRight } from '@mui/icons-material'

import { Typography } from '../../index'
import { Breadcrumbs } from './Breadcrumbs'
import { Link } from '../Link/Link'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=405%3A6805'
    },
    muiDocSrc: 'https://mui.com/components/breadcrumbs/'
  }
}

export const Default: Story<BreadcrumbsProps> = (args): JSX.Element => {
  return (
    <Breadcrumbs {...args} aria-label='breadcrumb'>
      <Link
        color='inherit'
        href='/?path=/story/navigation-breadcrumbs--default'
        onClick={args.onClick}
      >
        Material-UI
      </Link>
      <Link
        color='inherit'
        href='/?path=/story/navigation-breadcrumbs--default'
        onClick={args.onClick}
      >
        Core
      </Link>
      <Typography color='primary'>Breadcrumb</Typography>
    </Breadcrumbs>
  )
}

export const Custom: Story<BreadcrumbsProps> = (args): JSX.Element => {
  return (
    <Breadcrumbs
      separator={<ArrowRight fontSize='small' />}
      aria-label='breadcrumb'
    >
      <Link
        color='inherit'
        href='/?path=/story/navigation-breadcrumbs--custom'
        onClick={args.onClick}
      >
        Material-UI
      </Link>
      <Link
        color='inherit'
        href='/?path=/story/navigation-breadcrumbs--custom'
        onClick={args.onClick}
      >
        Core
      </Link>
      <Typography color='primary'>Breadcrumb</Typography>
    </Breadcrumbs>
  )
}
