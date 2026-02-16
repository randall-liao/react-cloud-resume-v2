import { Box, Typography, Stack, Paper, Grid } from '@mui/material';
import InterestsIcon from '@mui/icons-material/Interests';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Interests = () => {
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
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                    '&:hover': { bgcolor: 'background.default' }
                }}
            >
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: '#fef2f2',
                        color: '#ef4444',
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
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                    '&:hover': { bgcolor: 'background.default' }
                }}
            >
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: '#eef2ff',
                        color: '#6366f1',
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
