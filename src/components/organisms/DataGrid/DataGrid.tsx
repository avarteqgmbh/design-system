import { DataGrid as MuiDataGrid, DataGridProps, GridToolbar, deDE } from '@material-ui/data-grid';

export function DataGrid(props: DataGridProps) {
  return (
    <MuiDataGrid
      {...props}
      components={{ Toolbar: GridToolbar }}
      localeText={deDE}
      disableColumnResize={undefined}
    />
  )
}