//MUI
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 8, mb: 4 }} >
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/VirajPatidar/WDACE-frontend">
				WDACE
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}