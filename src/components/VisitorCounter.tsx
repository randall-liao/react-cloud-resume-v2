import { Box, Typography, Stack, Container, useTheme, Divider } from '@mui/material';
import DnsIcon from '@mui/icons-material/Dns';
import VisibilityIcon from '@mui/icons-material/Visibility';

const VisitorCounter = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: '#ffffff',
        borderTop: `1px solid ${theme.palette.divider}`,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
        zIndex: theme.zIndex.appBar,
        height: 40,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.75rem',
            color: 'text.secondary',
          }}
        >
          {/* Left Side */}
          <Stack direction="row" spacing={3} alignItems="center">
            {/* System Status */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 1,
                py: 0.25,
                bgcolor: '#f0fdf4', // green-50
                border: '1px solid #dcfce7', // green-100
                borderRadius: 0.5,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: '#22c55e',
                  mr: 1,
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />
              <Typography variant="caption" sx={{ display: { xs: 'none', sm: 'inline' }, fontWeight: 600, color: '#15803d', mr: 0.5 }}>
                System:
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#15803d' }}>
                Healthy
              </Typography>
            </Box>

            {/* Region */}
            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <DnsIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
              <Typography variant="caption">us-east-1</Typography>
            </Stack>

            {/* Visitors */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                px: 1,
                py: 0.5,
                borderRadius: 0.5,
                transition: 'background-color 0.2s',
                '&:hover': { bgcolor: '#f8fafc' },
                position: 'relative',
              }}
            >
              <VisibilityIcon sx={{ fontSize: 14, color: '#f97316', mr: 0.5 }} />
              <Typography variant="caption">
                Visitors: <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>843</Box>
              </Typography>
            </Box>
          </Stack>

          {/* Right Side */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>Latency:</Typography>
              <Typography variant="caption" sx={{ color: '#2563eb', fontWeight: 600 }}>24ms</Typography>
            </Stack>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />

            <Typography variant="caption" sx={{ display: { xs: 'none', sm: 'block' }, color: 'text.disabled' }}>
              Built with <Box component="span" sx={{ color: '#3b82f6', mx: 0.5 }}><i className="fab fa-react"></i></Box> & MUI
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default VisitorCounter;
