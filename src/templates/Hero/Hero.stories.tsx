import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Hero, HeroProps } from './Hero'
import { Search } from '../Search/Search'
import { Breadcrumbs, Link, Typography } from '../../components'

export default {
  title: 'Templates/Hero',
  component: Hero,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66401'
    }
  }
}

const Template: Story<HeroProps> = (args) => {
  return <Hero {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem Ipsum'
}

export const WithSearch = Template.bind({})
WithSearch.args = {
  title: 'With Search',
  children: <Search sx={{minWidth: 460}} />
}

export const WithBreadcrumbs = Template.bind({})
WithBreadcrumbs.args = {
  title: 'With Breadcrumbs',
  headerSlot: 
    <Breadcrumbs>
      <Link
        color='inherit'
        href='/?path=/story/navigation-breadcrumbs--default'
      >
        Shop
      </Link>
      <Link
        color='inherit'
        href='/?path=/story/navigation-breadcrumbs--default'
      >
        Main Category
      </Link>
    <Typography color='primary'>Sub Category</Typography>
  </Breadcrumbs>
}
