import {
  Button as MuiButton,
  makeStyles,
  ButtonProps,
} from '@material-ui/core';
import { GRADIENT_PRIMARY } from '../../../theme/theme';

export function Button(props: ButtonProps) {
  const { variant = 'contained', color = 'primary' } = props;
  const classes = useStyles();
  return (
    <MuiButton
      classes={{
        root: classes.root,
        label: classes.label,
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
        contained: classes.contained,
        disabled: classes.disabled,
      }}
      variant={variant}
      color={color}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(4),
    border: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(3, 6),
    boxShadow: 'none',
    '&.MuiButton-text': {
      border: 'none',
    },
    display: 'flex',
  },
  label: {
    textTransform: 'none',
    letterSpacing: 0,
  },
  sizeLarge: {
    borderRadius: theme.spacing(5),
    padding: theme.spacing(4, 8),
    fontSize: theme.spacing(5),
  },
  sizeSmall: {
    borderRadius: `${theme.spacing(3)}px`,
    padding: theme.spacing(2, 4),
  },
  contained: {
    background: theme.palette.grey[50],
    border: `1px solid ${theme.palette.grey[300]}`,
    color: theme.palette.text.primary,
    '&:hover': {
      background: 'white',
      border: `1px solid ${theme.palette.grey[200]}`,
    },
  },
  containedPrimary: {
    background: GRADIENT_PRIMARY,
    color: 'white',
    border: `1px solid ${theme.palette.primary.light}`,
    '&:hover': {
      background: GRADIENT_PRIMARY,
      border: `1px solid ${theme.palette.primary.light}`,
    },
  },
  containedSecondary: {
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.grey[200]}`,
    '&:hover': {
      background: theme.palette.grey[50],
      border: `1px solid ${theme.palette.grey[200]}`,
    },
  },
  disabled: {
    '&$disabled': {
      color: theme.palette.text.disabled,
      background: theme.palette.background.default,
      borderColor:
        theme.palette.type === 'dark'
          ? theme.palette.grey[800]
          : theme.palette.grey[200],
    },
  },
}));
