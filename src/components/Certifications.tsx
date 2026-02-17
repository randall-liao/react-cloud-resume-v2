import { Box, Typography, Stack, Paper, useTheme, alpha } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

const Certifications = () => {
  const theme = useTheme();
  return (
    <Box sx={{ px: 2, mb: 4 }}>
      <Paper
        elevation={0}
        sx={{
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            p: 2.5,
            boxShadow: theme.shadows[1],
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '60%' }}>
            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 0.5 }}>
                <StarsIcon sx={{ color: '#f59e0b', fontSize: 18 }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#d97706', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Certified
                </Typography>
            </Stack>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3, mb: 0.5 }}>
                AWS Solutions Architect
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Professional Level
            </Typography>
        </Box>

        <Box
            sx={{
                width: 56,
                height: 56,
                borderRadius: 2,
                background: 'linear-gradient(to bottom right, #fbbf24, #f97316)',
                transform: 'rotate(3deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 3,
                border: '2px solid',
                borderColor: 'background.paper',
                zIndex: 1
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                AWS
            </Typography>
        </Box>

        <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: '66%',
                background: `linear-gradient(to left, ${alpha(theme.palette.warning.light, 0.1)}, transparent)`,
                zIndex: 0
            }}
        />
      </Paper>
    </Box>
  );
};

export default Certifications;
