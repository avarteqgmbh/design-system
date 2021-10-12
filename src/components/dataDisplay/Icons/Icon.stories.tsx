import React from 'react'
import { Story } from '@storybook/react'
import { loadCSS } from 'fg-loadcss'
import { Theme } from '@mui/material/styles'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import { SvgIconProps, IconProps, IconButtonProps } from '@mui/material'

import { Icon, icons } from './Icon'
import { SvgIcon } from './SvgIcon'
import { IconButton } from './IconButton'
import { Moon as MoonIcon } from './assets'

export default {
  title: 'Data Display/Icons',
  component: Icon,
  argTypes: {}
}

export const MaterialIcon: Story<SvgIconProps> = (args): JSX.Element => {
  const { Delete, DeleteOutlined, DeleteRounded, DeleteTwoTone, DeleteSharp } =
    icons

  return (
    <>
      <Delete {...args} />
      <DeleteOutlined {...args} />
      <DeleteRounded {...args} />
      <DeleteTwoTone {...args} />
      <DeleteSharp {...args} />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      '& > .fa': {
        margin: theme.spacing(2)
      }
    }
  })
})

export const FontAwesome: Story<IconProps> = (args): JSX.Element => {
  const classes = useStyles()

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css') as HTMLElement
    )

    return (): void => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      node.parentNode!.removeChild(node)
    }
  }, [])

  return (
    <div id='#font-awesome-css' className={classes.root}>
      <Icon {...args} className='fa fa-plus-circle' />
      <Icon {...args} className='fa fa-plus-circle' color='primary' />
      <Icon {...args} className='fa fa-plus-circle' color='secondary' />
      <Icon
        {...args}
        className='fa fa-plus-circle'
        style={{ color: 'green' }}
      />
      <Icon {...args} className='fa fa-plus-circle' fontSize='small' />
      <Icon {...args} className='fa fa-plus-circle' style={{ fontSize: 30 }} />
    </div>
  )
}

const useSvgStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      '& > svg': {
        margin: theme.spacing(2)
      }
    }
  })
})

function HomeIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
    </SvgIcon>
  )
}

export const CustomIcon: Story<SvgIconProps> = (): JSX.Element => {
  const classes = useSvgStyles()

  return (
    <div className={classes.root}>
      <HomeIcon />
      <HomeIcon />
      <HomeIcon />
      <MoonIcon color='inherit' />
      <HomeIcon />
      <HomeIcon />
      <HomeIcon />
      <HomeIcon />
      <HomeIcon />
      <HomeIcon />
    </div>
  )
}

export const ButtonWithIcon: Story<IconButtonProps> = (args): JSX.Element => {
  return (
    <IconButton aria-label='delete' {...args} size='medium'>
      <SvgIcon>
        <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
      </SvgIcon>
    </IconButton>
  )
}
