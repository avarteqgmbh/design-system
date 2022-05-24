import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AnyIcon, Box, Chip, IconButton, Typography } from '../../components'
import { UserMenuItems } from '../Header/UserNav'
import { BaseHeaderMobile, BaseHeaderMobileProps } from './BaseHeaderMobile'
import { MobileUserNav } from './MobileUserNav'
import { MobileShopNav } from './MobileShopNav'

export default {
  title: 'Templates/MobileHeader',
  component: BaseHeaderMobile,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%93%B1-Mobile?node-id=2791%3A63792'
    },
    fullscreen: true,
    viewport: {
      defaultViewport: 'iphonex',
    },
  }
}

const USER_MENU_ITEMS = [
  {
    label: 'Persönliches',
    items: [
      { label: 'Profil', icon: <AnyIcon size='medium' icon='user' />} ,
      { label: 'Punktekonto', icon: <AnyIcon size='medium' icon='points' /> }, 
      { label: 'Warenkorb', icon: <AnyIcon size='medium' icon='cart' /> }, 
      {
        label: 'Wunschliste',
        icon: <AnyIcon size='medium' icon='wishlist' />,
        endIcon: <Chip label='9' size='small' color='primary' rounded={false} />
      },
      { label: 'Bestellungen', icon: <AnyIcon size='medium' icon='orders' /> }
    ]
  },
  {
    label: 'Sonstiges',
    items: [
      { label: 'Info', icon: <AnyIcon size='medium' icon='cart' /> }, 
      {
        label: 'Kontakt', icon: <AnyIcon size='medium' icon='letter' />, 
      }
    ]
  },
  {
    items: [{ label: 'Logout', icon: <AnyIcon size='medium' icon='logout' /> }]
  }
]

const Template: Story<BaseHeaderMobileProps> = (args) => {
  const [userNavOpen,setUserNavOpen] = React.useState(false)
  const [shopNavOpen,setShopNavOpen] = React.useState(false)
  const [activeCategory,setActiveCategory] = React.useState(null)

  return (
    <>
      <BaseHeaderMobile {...args} 
        toggleUserMenu={(): void => { return setUserNavOpen(!userNavOpen) }}
        toggleMainMenu={(): void => { return setShopNavOpen(!shopNavOpen) }}
      />
      <MobileUserNav
        motto='Lorem Ipsum'
        welcome='Willkommen'
        avatarUrl='https://mui.com/static/images/avatar/1.jpg'
        fullName='Max Mustermann'
        isActive={userNavOpen} 
        userMenu={USER_MENU_ITEMS as UserMenuItems[]}
        children={[<IconButton onClick={():void => {return setUserNavOpen(false)}}><AnyIcon icon='LangDE' /></IconButton>,<Box sx={{ml: 4}}><IconButton onClick={():void => {return setUserNavOpen(false)}}><AnyIcon icon='moon' /></IconButton></Box>]}
        versionLabel='Version 1.0.13'
      />
      <MobileShopNav
        specialCategories={[{name: 'Test'}]}
        categories={[{name: 'Test'}]}
        activeCategory={activeCategory}
        setActiveCategory={(category):void => {return setActiveCategory(category)}}
        isActive={shopNavOpen}
        setIsActive={setShopNavOpen}
      />
    </>
    )
}

export const Default = Template.bind({})
Default.args = {
  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
  pageTitle: 'Points',
  points: '1.200',
  pointsIcon: <AnyIcon icon='points' size='medium' />
}

export const WithNotifications = Template.bind({})
WithNotifications.args = {
  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
  notifications: true,
  newNotifications: true,
  pageTitle: 'Points',
  points: '1.200',
  pointsIcon: <AnyIcon icon='points' size='medium' />
}
