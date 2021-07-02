import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  makeStyles,
} from '@material-ui/core';
import { Theme } from '../../../theme/types';

export function TextField(props: MuiTextFieldProps) {
  const { variant = 'outlined'} = props;
  const classes = useStyles();
  return (
    <MuiTextField
      classes={{
        root: classes.root,
      }}
      variant={variant}
      {...props}
    />
  );
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {

  },
}));
