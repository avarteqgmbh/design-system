import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridToolbar,
  deDE,
} from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core';
import { Theme } from '../../../theme/types';

export interface DataGridProps extends MuiDataGridProps {
  toolbar?: boolean,
}

export function DataGrid(props: DataGridProps) {
  const { toolbar = false } = props;
  const classes = useStyles();
  
  return (
    <MuiDataGrid
      classes={{
        root: classes.root,
      }}
      className={`${classes.root}`}
      components={toolbar ? { Toolbar: GridToolbar } : {}}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    background: theme.palette.background.paper,
    border: 'none',
    
    '& .MuiDataGrid-main': {
      borderColor: theme.palette.background.border,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: theme.radius.card,
    },

    '& .MuiDataGrid-toolbarContainer': {
      padding: theme.spacing(3, 0),
      '& .MuiButton-textPrimary': {
        background: theme.palette.background.light,
        color: theme.palette.text.secondary,
        borderColor: theme.palette.background.border,
        borderWidth: 1,
        borderStyle: 'solid',
        marginRight: theme.spacing(3),
        '& .MuiSvgIcon-root': {
          maxHeight: 18,
          maxWidth: 18,
        },
        '&:hover': {
          background: theme.palette.background.medium,
          color: theme.palette.text.primary,
        }
      }
    },
  }
}))
