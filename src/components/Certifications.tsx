import { Box, Typography, Stack, Link, useTheme, alpha } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Certifications = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 3,
        p: 1,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: theme.shadows[1],
        transition: 'all 0.3s',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: theme.shadows[4],
          borderColor: alpha(theme.palette.primary.main, 0.3),
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 128,
          height: 128,
          background: 'linear-gradient(to bottom right, rgba(255, 153, 0, 0.2), transparent)',
          borderBottomLeftRadius: '100%',
          pointerEvents: 'none',
        }}
      />
      <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <Box>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#232F3E',
                borderRadius: 2,
                boxShadow: theme.shadows[2],
                color: '#FF9900',
                fontSize: 32,
              }}
            >
              <i className="fab fa-aws"></i>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                AWS Certified
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                Official Certification
              </Typography>
            </Box>
          </Stack>
          <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary', mb: 0.5 }}>
            Solutions Architect – Professional
          </Typography>
          <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', color: 'text.secondary', letterSpacing: '0.05em' }}>
            Validation ID: AWS-PRO-2023-88X
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Link
            href="#"
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#FF9900',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              '&:hover': { color: '#e08900' }
            }}
          >
            Verify Badge <OpenInNewIcon sx={{ fontSize: 16, ml: 0.5 }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Certifications;
