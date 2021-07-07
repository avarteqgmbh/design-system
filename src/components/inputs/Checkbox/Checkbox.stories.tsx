import React from 'react';
import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxProps } from '@material-ui/core';
import { Checkbox } from './Checkbox';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

export default {
  title: '💧 Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
		id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
		checked: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
		color: {
      control: 'radio',
      options: ['default', 'primary', 'secondary'],
      table: {
        type: { summary: 'default | primary | secondary' },
        defaultValue: { summary: 'secondary' }
      }
    },
		disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
		disableRipple: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
		indeterminate: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
		required: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
		size: {
      control: 'radio',
      options: ['medium', 'small'],
      defaultValue: 'medium',
      table: {
        type: { summary: 'medium | small' },
        defaultValue: { summary: 'medium' }
      }
    },
		value: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
		onChange: { action: 'checked' }
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
// TODO: - adding examples with FormControlLabel
//         https://material-ui.com/components/checkboxes/#checkbox-with-formcontrollabel

const Template: Story<CheckboxProps> = (args) => (
	<Checkbox {...args} inputProps={{ 'aria-label': 'primary checkbox' }} />
)

export const Default = Template.bind({});
Default.args = {
  id: 'checkbox-default'
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'checkbox-Primary',
	checked: true,
	color: 'primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'checkbox-Disabled',
	checked: true,
	disabled: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  id: 'checkbox-Indeterminate',
	indeterminate: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  id: 'checkbox-CustomIcon',
	icon: <WbSunnyIcon />,
	checkedIcon: <Brightness3Icon />
};


export const StatefulCheckbox: Story<CheckboxProps> = (args) => {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setChecked(event.target.checked);			
	};
	return (<Checkbox {...args} checked={checked} onChange={handleChange}  />)
}
