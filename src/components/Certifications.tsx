<<<<<<< HEAD
import { Box, Typography, Stack, Link, useTheme, alpha } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
=======
import { Box, Typography, Stack, Paper } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
>>>>>>> main

const Certifications = () => {
  const theme = useTheme();

  return (
<<<<<<< HEAD
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
=======
    <Box sx={{ px: 2, mb: 4 }}>
      <Paper
        elevation={0}
        sx={{
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            p: 2.5,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
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
                border: '2px solid white',
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
                background: 'linear-gradient(to left, #fffbeb, transparent)',
                zIndex: 0
            }}
        />
      </Paper>
>>>>>>> main
    </Box>
  );
};

export default Certifications;
