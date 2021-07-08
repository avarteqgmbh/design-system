import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ContainerProps, Typography } from '@material-ui/core';
import { Container } from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    disableGutters: {
        control: { type: 'boolean' },
        defaultValue: false,
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: false }
        }
    },
    fixed: {
        control: { type: 'boolean' },
        defaultValue: false,
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: false }
        }
    },
    maxWidth: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'false'],
      defaultValue: 'lg',
      table: {
        type: { summary: 'xl | sm | md | lg | xl | false' },
        defaultValue: { summary: 'medium' }
      }
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


const Template: Story<ContainerProps> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
};

export const Children = Template.bind({});
Children.args = {
    children: [
      <Typography style={{ backgroundColor: '#cfe8fc', height: '20vh' }}></Typography>,
      <Typography style={{ backgroundColor: '#108cff', height: '20vh' }}></Typography>
    ]
};
