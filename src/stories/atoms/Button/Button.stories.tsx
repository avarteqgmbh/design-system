import { Meta, Story } from '@storybook/react';
// import { withDesign } from 'storybook-addon-designs';
import { Wrapper } from '../../_helpers/Wrapper';
import { ButtonProps } from '@material-ui/core';
import { Button } from './Button';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export default {
  title: '💧 Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'default', 'inherit'],
      defaultValue: 'primary',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outline', 'text'],
      defaultValue: 'contained',
    },
    onClick: { action: { type: 'clicked' } },
  },
};

const Template: Story<ButtonProps> = (args) => (
  <Wrapper>
    <Button {...args}>Button</Button>
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'contained',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'contained',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export const StartIconMui = Template.bind({});
StartIconMui.args = {
  startIcon: <WbSunnyIcon />,
};

export const EndIconMui = Template.bind({});
EndIconMui.args = {
  endIcon: <WbSunnyIcon />,
};
