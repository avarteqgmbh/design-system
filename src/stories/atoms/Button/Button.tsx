import {
  Button as MuiButton,
  makeStyles,
  ButtonProps,
} from '@material-ui/core';
import { Theme } from '../../../theme/types';

export function Button(props: ButtonProps) {
  const { variant = 'contained', color = 'primary' } = props;
  const classes = useStyles();
  return (
    <MuiButton
      classes={{
        root: classes.root,
        label: classes.label,
        text: classes.text,
        textPrimary: classes.textPrimary,
        textSecondary: classes.textSecondary,
        outlined: classes.outlined,
        outlinedPrimary: classes.outlinedPrimary,
        outlinedSecondary: classes.outlinedSecondary,
        contained: classes.contained,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
        disabled: classes.disabled,
      }}
      variant={variant}
      color={color}
      {...props}
    />
  );
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(3, 5),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.background.border,
    borderRadius: theme.radius.button,
    background: theme.palette.background.paper,
    boxShadow: 'none',
    '&:hover': {
      background: theme.shadows[0],
    },
  },
  label: {
    textTransform: 'none',
    letterSpacing: 0,
  },
  text: {
    borderColor: 'transparent',
    background: 'transparent',
    '&:hover': {
      background: theme.palette.background.light,
    }
  },
  textPrimary: {
    borderColor: 'transparent',
    background: 'transparent',
    '&:hover': {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
    }
  },
  sizeLarge: {
    padding: theme.spacing(4, 6),
  },
  sizeSmall: {
    padding: theme.spacing(2, 4),
  },
  outlined: {
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    '&:hover': {
      background: theme.palette.background.light,
      borderColor: theme.palette.text.primary,
    }
  },
  outlinedPrimary: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.background.paper,
      borderColor: theme.palette.primary.dark,
    }
  },
  contained: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    '&:hover': {
      background: theme.palette.background.light,
    },
  },
  containedPrimary: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderColor: theme.palette.primary.light,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  containedSecondary: {
    background: theme.palette.background.light,
    '&:hover': {
      background: theme.palette.background.medium,
    },
  },
  disabled: {
    '&$disabled': {
      color: theme.palette.text.disabled,
      background: theme.palette.background.default,
      borderColor: theme.palette.background.border,
    },
  },
}));
