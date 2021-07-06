import clsx from 'clsx';
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  makeStyles
} from "@material-ui/core";
import { Theme } from "../../../theme/types";

export interface MenuItemProps extends MuiMenuItemProps {
  button?: true | undefined,
}

export function MenuItem(props: MenuItemProps) {
  const classes = useStyles();
  return (
    <MuiMenuItem {...props} className={clsx(classes.root)}>{props.children}</MuiMenuItem>
  )
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    }
  }
}));
