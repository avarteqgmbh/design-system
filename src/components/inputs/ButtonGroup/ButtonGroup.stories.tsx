import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ButtonGroupProps, Typography, Button } from '@material-ui/core';
import { ButtonGroup } from './ButtonGroup';

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
  children: <Typography> Default </Typography>
};


export const PrimaryButtonGroup = Template.bind({});
PrimaryButtonGroup.args = {
  children: <>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </>,
  variant: "contained",
  color: "primary"
};
