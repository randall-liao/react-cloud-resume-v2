import { Box, Typography, Stack, Paper, Grid, useTheme, alpha } from '@mui/material';
import InterestsIcon from '@mui/icons-material/Interests';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Interests = () => {
  const theme = useTheme();
  return (
    <Box sx={{ px: 2, mb: 12 }}>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2, px: 1 }}>
        <InterestsIcon color="primary" fontSize="small" />
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Side Channel
        </Typography>
      </Stack>

      <Grid container spacing={1.5}>
        <Grid item xs={6}>
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: theme.shadows[1],
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                    '&:hover': { bgcolor: 'background.default' },
                    bgcolor: 'background.paper'
                }}
            >
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: alpha(theme.palette.error.main, 0.1),
                        color: 'error.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1
                    }}
                >
                    <ThermostatIcon fontSize="small" />
                </Box>
                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        Sous Vide
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                        IoT Temp Control
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'text.primary' }}>
                        132.5°F
                    </Typography>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: theme.shadows[1],
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                    '&:hover': { bgcolor: 'background.default' },
                    bgcolor: 'background.paper'
                }}
            >
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1
                    }}
                >
                    <FlightTakeoffIcon fontSize="small" />
                </Box>
                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        Drone Pilot
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                        FPV Racing
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'text.primary' }}>
                        4S LiPo
                    </Typography>
                </Box>
            </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Interests;
