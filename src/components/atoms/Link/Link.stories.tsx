import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { LinkProps } from '@material-ui/core';
import { Link } from './Link';

export default {
  title: '💧 Atoms/Link',
  component: Link,
  argTypes: {
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary']
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375',
    },
  },
}

const Template: Story<LinkProps> = (args) => (
  <Link {...args}>Example Link</Link>
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};
