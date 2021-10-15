import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../../index'

export default {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375'
    }
  }
}

const buttons = [
  <Button key='one'>One</Button>,
  <Button key='two'>Two</Button>,
  <Button key='three'>Three</Button>
]

export const Outlined = (): JSX.Element => {
  return <ButtonGroup variant='outlined'>{buttons}</ButtonGroup>
}

export const Contained = (): JSX.Element => {
  return <ButtonGroup variant='contained'>{buttons}</ButtonGroup>
}

export const Text = (): JSX.Element => {
  return <ButtonGroup variant='text'>{buttons}</ButtonGroup>
}

export const Small = (): JSX.Element => {
  return (
    <ButtonGroup variant='contained' size='small'>
      {buttons}
    </ButtonGroup>
  )
}

export const Medium = (): JSX.Element => {
  return (
    <ButtonGroup variant='contained' size='medium'>
      {buttons}
    </ButtonGroup>
  )
}

export const Large = (): JSX.Element => {
  return (
    <ButtonGroup variant='contained' size='large'>
      {buttons}
    </ButtonGroup>
  )
}

export const Secondary = (): JSX.Element => {
  return (
    <ButtonGroup color='secondary' variant='contained' size='large'>
      {buttons}
    </ButtonGroup>
  )
}

export const DisabledElevation = (): JSX.Element => {
  return (
    <ButtonGroup disableElevation variant='contained'>
      {buttons}
    </ButtonGroup>
  )
}

export const Vertical = (): JSX.Element => {
  return (
    <ButtonGroup
      orientation='vertical'
      aria-label='vertical contained button group'
      variant='contained'
    >
      {buttons}
    </ButtonGroup>
  )
}
