import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Auth, AuthProps } from './Auth'
import { Link } from '../../../index'

export default {
  title: 'Templates/Layouts/Auth',
  component: Auth,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1630%3A14396'
    },
    muiDocSrc: ''
  }
}

const Template: Story<AuthProps> = (args) => {
  return <Auth {...args} />
}

const footer = (
  <>
    <Link
      href='/'
      tabIndex={0}
      label='Registrierung'
      link='/signup'
      sx={{ mb: 1 }}
    />
    <Link tabIndex={0} label='Passwort vergessen' link='/forgot-password' />
  </>
)

const logo = (
  <>
    <Link tabIndex={0} label='Registrierung' link='/signup' sx={{ mb: 1 }} />
    <Link tabIndex={0} label='Passwort vergessen' link='/forgot-password' />
  </>
)

const children = (
  <>
    <Link tabIndex={0} label='Registrierung' link='/signup' sx={{ mb: 1 }} />
    <Link tabIndex={0} label='Passwort vergessen' link='/forgot-password' />
  </>
)

export const Default = Template.bind({})
Default.args = {
  bgImage:
    'https://images.pexels.com/photos/6481652/pexels-photo-6481652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  footer,
  logo,
  children
}
