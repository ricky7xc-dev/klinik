import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Box component="img" src="/static/logo_random.svg" sx={{ width: 100, height: 50, ...sx }} />
  );
}
