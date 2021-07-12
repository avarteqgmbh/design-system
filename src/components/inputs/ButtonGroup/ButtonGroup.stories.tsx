import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ButtonGroupProps, Typography } from '@material-ui/core';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button'

const Buttons = <>
  <Button> One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</>

export default {
  title: 'Input/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'medium' }
      }
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'inherit', 'primary', 'secondary'],
      defaultValue: 'default',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'default' }
      }
    },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'contained' }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: 'false',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375',
    },
  },
};

const Template: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <Typography> Default Button </Typography>
};

export const PrimaryButtonGroup = Template.bind({});
PrimaryButtonGroup.args = {
  children: Buttons,
  variant: "contained",
  color: "primary"
};

export const SecondaryButtonGroup = Template.bind({});
SecondaryButtonGroup.args = {
  children: Buttons,
  variant: "outlined",
  color: "secondary"
};
