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
    borderRadius: theme.spacing(2),
    display: 'flex',
    border:
      theme.palette.type === 'dark'
        ? `1px solid ${theme.palette.grey[700]}`
        : `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(3, 6),
    boxShadow: 'none',
    '&.MuiButton-text': {
      border: 'none',
    },
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
    background:
      theme.palette.type === 'dark'
        ? 'rgba(0,0,0,0.25)'
        : theme.palette.grey[50],
    border:
      theme.palette.type === 'dark'
        ? `1px solid ${theme.palette.grey[900]}`
        : `1px solid ${theme.palette.grey[300]}`,
    color: theme.palette.text.primary,
    '&:hover': {
      background:
        theme.palette.type === 'dark' ? theme.palette.grey[800] : 'white',
      border:
        theme.palette.type === 'dark'
          ? `1px solid ${theme.palette.grey[800]}`
          : `1px solid ${theme.palette.grey[200]}`,
    },
  },
  containedPrimary: {
    background: GRADIENT_PRIMARY,
    color: 'white',
    border:
      theme.palette.type === 'dark'
        ? `1px solid ${theme.palette.primary.dark}`
        : `1px solid ${theme.palette.primary.light}`,
    '&:hover': {
      background: GRADIENT_PRIMARY,
      border:
        theme.palette.type === 'dark'
          ? `1px solid ${theme.palette.primary.dark}`
          : `1px solid ${theme.palette.primary.light}`,
    },
    '&$disabled': {
      color: theme.palette.type === 'dark' && theme.palette.grey[500],
      background:
        theme.palette.type === 'dark'
          ? theme.palette.grey[800]
          : theme.palette.grey[300],
      borderColor:
        theme.palette.type === 'dark'
          ? theme.palette.grey[700]
          : theme.palette.grey[400],
    },
  },
  containedSecondary: {
    background: theme.palette.background.default,
    border:
      theme.palette.type === 'dark'
        ? `1px solid ${theme.palette.grey[700]}`
        : `1px solid ${theme.palette.grey[200]}`,
    '&:hover': {
      background:
        theme.palette.type === 'dark'
          ? theme.palette.grey[700]
          : theme.palette.grey[300],
      border:
        theme.palette.type === 'dark'
          ? `1px solid ${theme.palette.grey[800]}`
          : `1px solid ${theme.palette.grey[200]}`,
    },
  },
  disabled: {},
}));
