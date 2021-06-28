import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DataGridProps } from '@material-ui/data-grid';
import { DataGrid } from './DataGrid';
import { GridColDef } from '@material-ui/data-grid';

export default {
  title: '🌳 Organisms/DataGrid',
  component: DataGrid,
  argTypes: {
    disableColumnResize: {
      control: 'boolean',
      defaultValue: undefined,
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/anynines-Design-System?node-id=102%3A10',
    },
  },
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Template: Story<DataGridProps> = (args) => (
  <div style={{ height: 500 }}>
    <DataGrid {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  rows: rows,
  columns: columns,
};
