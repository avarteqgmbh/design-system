import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DataGrid, DataGridProps } from './DataGrid';
import { rows, columns } from './mocks';

export default {
  title: '🌳 Organisms/DataGrid',
  component: DataGrid,
  argTypes: {
    autoHeight: {
      control: 'boolean',
      defaultValue: true,
    },
    checkboxSelection: {
      control: 'boolean',
      defaultValue: false,
    },
    autoPageSize: {
      control: 'boolean',
      defaultValue: false,
    },
    density: {
      control: 'select',
      options: ['standard', 'comfortable', 'compact'],
      defaultValue: 'standard'
    },
    disableSelectionOnClick: {
      control: 'boolean',
      defaultValue: true,
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=285%3A1900',
    },
  },
};

const Template: Story<DataGridProps> = (args) => (
  <DataGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rows: rows,
  columns: columns,
};

export const Toolbar = Template.bind({});
Toolbar.args = {
  rows: rows,
  columns: columns,
  checkboxSelection: true,
  toolbar: true,
};
