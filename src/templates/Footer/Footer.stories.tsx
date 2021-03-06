import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Footer, FooterProps } from './Footer'
import { CHILDREN, LINKS, MENU_ITEMS } from './footerStoryLinks'

export default {
  title: 'Templates/Footer',
  component: Footer,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66401'
    },
    fullscreen: true
  }
}

const Template: Story<FooterProps> = (args) => {
  return <Footer {...args} />
}

export const Default = Template.bind({})
Default.args = {
  links: LINKS,
  copyright: 'Created by anynines'
}

export const Extended = Template.bind({})
Extended.args = {
  menuItems: MENU_ITEMS,
  extended: true,
  links: LINKS,
  copyright: 'Created by anynines'
}

export const ExtendedWithChildren = Template.bind({})
ExtendedWithChildren.args = {
  children: CHILDREN,
  menuItems: MENU_ITEMS,
  extended: true,
  links: LINKS,
  copyright: 'Created by anynines'
}
