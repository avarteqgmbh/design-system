import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TypographyProps } from '@mui/material'
import { Typography } from './Typography'

export default {
  title: 'Data Display/Typography',
  component: Typography,
  argTypes: {
    align: {
      defaultValue: 'inherit',
      table: {
        defaultValue: { summary: 'inherit' }
      }
    },
    color: {
      defaultValue: 'initial',
      table: {
        defaultValue: { summary: 'initial' }
      }
    },
    display: {
      defaultValue: 'initial',
      table: {
        defaultValue: { summary: 'initial' }
      }
    },
    variant: {
      defaultValue: 'body1',
      table: {
        defaultValue: { summary: 'body1' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

// TODO: - adding Typography Theme
//         https://material-ui.com/customization/typography/

const Template: Story<TypographyProps> = (args) => {
  return <Typography {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'default'
}

export const H1 = Template.bind({})
H1.args = {
  children: 'h1. Heading',
  variant: 'h1'
}

export const H2 = Template.bind({})
H2.args = {
  children: 'h2. Heading',
  variant: 'h2'
}

export const H3 = Template.bind({})
H3.args = {
  children: 'h3. Heading',
  variant: 'h3'
}

export const H4 = Template.bind({})
H4.args = {
  children: 'h4. Heading',
  variant: 'h4'
}

export const H5 = Template.bind({})
H5.args = {
  children: 'h5. Heading',
  variant: 'h5'
}

export const H6 = Template.bind({})
H6.args = {
  children: 'h6. Heading',
  variant: 'h6'
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
  children:
    'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  variant: 'subtitle1'
}

export const Subtitle2 = Template.bind({})
Subtitle2.args = {
  children:
    'subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  variant: 'subtitle2'
}

export const body1 = Template.bind({})
body1.args = {
  children:
    'body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  variant: 'body1'
}

export const body2 = Template.bind({})
body2.args = {
  children:
    'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  variant: 'body2'
}

export const Button = Template.bind({})
Button.args = {
  children: 'button text',
  variant: 'button',
  display: 'block'
}

export const Caption = Template.bind({})
Caption.args = {
  children: 'caption text',
  variant: 'caption',
  display: 'block'
}

export const Overline = Template.bind({})
Overline.args = {
  children: 'overline text',
  variant: 'overline',
  display: 'block'
}

export const VariantMapping = Template.bind({})
VariantMapping.args = {
  children: 'h1. Heading',
  variant: 'h1'
}
