import { Box, Typography, Stack, useTheme, alpha } from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const OriginStory = () => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ mb: 12 }}>
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          p: 0.5,
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          borderRadius: 3,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: '#ffffff',
            borderRadius: 2,
            border: `1px solid ${theme.palette.divider}`,
            borderLeft: 'none',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="flex-start">
            <Box
              sx={{
                flexShrink: 0,
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                p: 2,
                borderRadius: '50%',
                color: 'primary.main',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CloudQueueIcon sx={{ fontSize: 32 }} />
            </Box>
            <Box>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                Origin Story: The GeForce Analogy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  fontFamily: 'serif',
                }}
              >
                "In 2018, I tried GeForce Now and realized my flimsy laptop was running a AAA game on a rig hundreds of miles away. The latency was negligible, the power was immense. That's when it clicked: computing isn't about the box in front of you, it's about the pipe and the powerhouse at the other end. I've been building those powerhouses ever since."
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default OriginStory;
