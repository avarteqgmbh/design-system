import {
		Checkbox as MuiCheckbox,
		CheckboxProps as MuiCheckboxProps,
		makeStyles,
	} from '@material-ui/core';
	import { Theme } from '../../../theme/types';

	export function Checkbox(props: MuiCheckboxProps) {
		const classes = useStyles();
		return (
				<MuiCheckbox
				classes={{
					root: classes.root,
				}}
				{...props}
				/>
		);
	}

	const useStyles = makeStyles<Theme>((theme) => ({
	root: {
		
	},
}));
  