<<<<<<< HEAD
import { Box, Typography, Stack, useTheme, alpha, Divider } from '@mui/material';
=======
import { Box, Typography, Stack, Paper, Grid } from '@mui/material';
import InterestsIcon from '@mui/icons-material/Interests';
>>>>>>> main
import ThermostatIcon from '@mui/icons-material/Thermostat';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Interests = () => {
  const theme = useTheme();

  return (
<<<<<<< HEAD
    <Box
      sx={{
        bgcolor: '#ffffff',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 3,
        p: 4,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: theme.shadows[1],
        transition: 'all 0.3s',
        height: '100%',
        '&:hover': {
          boxShadow: theme.shadows[4],
          borderColor: alpha(theme.palette.primary.main, 0.3),
        }
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Precision Cooking
          </Typography>
          <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600, mt: 0.5 }}>
            Sous Vide Enthusiast
          </Typography>
        </Box>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: '#fef2f2', // red-50
            border: '1px solid #fee2e2', // red-100
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ef4444', // red-500
          }}
        >
          <ThermostatIcon sx={{ fontSize: 24 }} />
        </Box>
      </Stack>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
        Applying the same fault-tolerant logic to steak as I do to servers. Consistent temperature control ensures 99.99% reliability on medium-rare outcomes.
      </Typography>

      <Box
        sx={{
          bgcolor: '#f8fafc', // slate-50
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          p: 2,
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.75rem',
          color: 'text.secondary',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ textTransform: 'uppercase', color: 'text.disabled', fontSize: '0.625rem' }}>
            Target Temp
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary' }}>
            54.5°C
          </Typography>
        </Stack>
        <Stack spacing={0.5} alignItems="flex-end">
          <Typography variant="caption" sx={{ textTransform: 'uppercase', color: 'text.disabled', fontSize: '0.625rem' }}>
            Duration
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary' }}>
            2h 30m
          </Typography>
        </Stack>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Stack direction="row" alignItems="center" spacing={1} sx={{ color: '#16a34a', fontWeight: 700 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: '#22c55e',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          <Typography variant="caption" sx={{ fontWeight: 700 }}>ACTIVE</Typography>
        </Stack>
      </Box>
=======
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
>>>>>>> main
    </Box>
  );
};

export default Interests;
