import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { BoxProps, Typography } from '@material-ui/core';
import { Box } from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    clone: {
        control: { type: 'boolean' },
        defaultValue: false,
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: false }
        }
    },
    component: {
        control: { type: 'text' },
        table: { type: { summary: 'string' } }
    },
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


const Template: Story<BoxProps> = (args) => (
  <Box {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: <Typography> Default </Typography>
};

export const H1 = Template.bind({});
H1.args = {
    children: <Typography variant='h1'> H1 </Typography>
};
