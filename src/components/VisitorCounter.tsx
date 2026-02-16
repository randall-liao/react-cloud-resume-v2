<<<<<<< HEAD
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
=======
import { useState, useEffect } from 'react';
import { Box, Typography, Stack, CircularProgress } from '@mui/material';

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        setTimeout(() => {
            setCount(1402);
            setLoading(false);
        }, 1000);

      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setCount(0);
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <Box
        component="footer"
        sx={{
            position: 'sticky',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid',
            borderColor: 'divider',
            p: 2,
            pb: 3,
            zIndex: 1100,
            boxShadow: '0 -5px 15px rgba(0,0,0,0.02)'
        }}
    >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', mb: 0.5 }}>
                    Visitor Count
                </Typography>
                <Stack direction="row" alignItems="flex-end" spacing={1}>
                    {loading ? (
                        <CircularProgress size={16} thickness={5} />
                    ) : (
                        <>
                            <Typography variant="h6" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
                                {count?.toLocaleString()}
                            </Typography>
                            <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: '#059669', mb: 0.25 }}>
                                ▲ 12
                            </Typography>
                        </>
                    )}
                </Stack>
            </Box>

            <Box
                sx={{
                    bgcolor: '#f8fafc',
                    borderRadius: 999,
                    border: '1px solid',
                    borderColor: 'divider',
                    px: 1.5,
                    py: 0.75,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
            >
                <Box sx={{ position: 'relative', width: 8, height: 8 }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            bgcolor: '#10b981',
                            borderRadius: '50%',
                            animation: 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
                            '@keyframes pulse-ring': {
                                '0%': { transform: 'scale(0.33)' },
                                '80%, 100%': { opacity: 0 }
                            }
                        }}
                    />
                    <Box sx={{ position: 'absolute', inset: 0, bgcolor: '#10b981', borderRadius: '50%', zIndex: 10 }} />
                </Box>
                <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: '#047857', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    System Online
                </Typography>
            </Box>
        </Stack>

        <Box sx={{ width: 128, height: 4, bgcolor: '#cbd5e1', borderRadius: 999, mx: 'auto' }} />
>>>>>>> main
    </Box>
  );
};

export default VisitorCounter;
