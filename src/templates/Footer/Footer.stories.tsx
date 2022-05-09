import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Footer, FooterProps } from './Footer'

export default {
  title: 'Templates/Footer',
  component: Footer,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=762%3A7043'
    },
    muiDocSrc: ''
  }
}

const LINKS = [
  {
    label: 'Terms of use',
    onLabelClick: (): void => {
      return console.log('Click')
    }
  },
  {
    label: 'Privacy Policy',
    onLabelClick: (): void => {
      return console.log('Click')
    }
  },
  {
    label: 'Legal Notes',
    onLabelClick: (): void => {
      return console.log('Click')
    }
  }
]

const FOOTER_CHILDREN = <p>TEST</p>

const Template: Story<FooterProps> = (args) => {
  return <Footer {...args} />
}

export const Default = Template.bind({})
Default.args = {
  links: LINKS,
  slogan: 'Created by anynines'
}

export const Extended = Template.bind({})
Extended.args = {
  children: FOOTER_CHILDREN,
  links: LINKS,
  slogan: 'Created by anynines'
}
