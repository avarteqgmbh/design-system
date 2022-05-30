import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BottomNavigationProps } from '@mui/material'
import Home from '@mui/icons-material/Home'
import Mail from '@mui/icons-material/Mail'
import Shop from '@mui/icons-material/Shop'

import { BottomNavigation } from './BottomNavigation'
import BottomNavigationAction from './BottomNavigationAction'

export default {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=405%3A6259'
    },
    muiDocSrc: 'https://mui.com/components/bottom-navigation/'
  }
}

const Template: Story<BottomNavigationProps> = () => {
  const [value, setValue] = React.useState(0)
  const Icons = [
    <BottomNavigationAction
      label='Home'
      icon={<Home />}
      centerRipple
      value='home'
    />,
    <BottomNavigationAction
      label='News'
      icon={<Mail />}
      centerRipple
      counter
      value='news'
    />,
    <BottomNavigationAction
      label='Shop'
      icon={<Shop />}
      centerRipple
      value='shop'
    />
  ]

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue): void => {
        setValue(newValue)
      }}
    >
      {Icons}
    </BottomNavigation>
  )
}

export const Default = Template.bind({})
