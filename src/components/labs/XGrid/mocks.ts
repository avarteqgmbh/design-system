import { GridColDef } from '@material-ui/x-grid'

export const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 84 },
  { id: 6, lastName: 'Melisandre', firstName: 'Peter', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 13 },
  { id: 10, lastName: 'Clifford', firstName: 'Ferrara', age: 65 },
  { id: 11, lastName: 'Melisandre', firstName: 'Peter', age: 42 },
  { id: 12, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 13, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 14, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 15, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 16, lastName: 'Targaryen', firstName: 'Daenerys', age: 84 },
  { id: 17, lastName: 'Melisandre', firstName: 'Peter', age: 150 },
  { id: 18, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 19, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 13 },
  { id: 21, lastName: 'Clifford', firstName: 'Ferrara', age: 65 },
  { id: 22, lastName: 'Melisandre', firstName: 'Peter', age: 42 },
  { id: 23, lastName: 'Clifford', firstName: 'Ferrara', age: 65 },
  { id: 24, lastName: 'Melisandre', firstName: 'Peter', age: 42 },
  { id: 25, lastName: 'Melisandre', firstName: 'Peter', age: 42 }
]

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1
  }
]
