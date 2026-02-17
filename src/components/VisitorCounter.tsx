import { useState, useEffect } from 'react';
import { Box, Typography, Stack, CircularProgress, useTheme, alpha } from '@mui/material';

const VisitorCounter = () => {
  const theme = useTheme();
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
            bgcolor: alpha(theme.palette.background.paper, 0.9),
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
                            <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'success.main', mb: 0.25 }}>
                                ▲ 12
                            </Typography>
                        </>
                    )}
                </Stack>
            </Box>

            <Box
                sx={{
                    bgcolor: 'background.default',
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
                            bgcolor: 'success.main',
                            borderRadius: '50%',
                            animation: 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
                            '@keyframes pulse-ring': {
                                '0%': { transform: 'scale(0.33)' },
                                '80%, 100%': { opacity: 0 }
                            }
                        }}
                    />
                    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'success.main', borderRadius: '50%', zIndex: 10 }} />
                </Box>
                <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'success.dark', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    System Online
                </Typography>
            </Box>
        </Stack>

        <Box sx={{ width: 128, height: 4, bgcolor: 'divider', borderRadius: 999, mx: 'auto', display: { xs: 'block', md: 'none' } }} />
    </Box>
  );
};

export default VisitorCounter;
