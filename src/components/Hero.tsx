import { Box, Typography, Button, Stack, Grid, useTheme, alpha } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ pt: { xs: 12, md: 20 }, pb: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Column: Text */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Stack spacing={4}>
            {/* Open to Work Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                color: 'primary.main',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                width: 'fit-content',
                typography: 'caption',
                fontFamily: '"Fira Code", monospace',
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#22c55e', // green-500
                  mr: 1,
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: .5 },
                  }
                }}
              />
              Open to Work
            </Box>

            {/* Title */}
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, lineHeight: 1.15 }}>
              Building Resilient <br />
              <Box component="span" sx={{
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Cloud Systems
              </Box>
            </Typography>

            {/* Description */}
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', maxWidth: 480, lineHeight: 1.6 }}>
              Senior Backend Engineer specializing in distributed systems, serverless architectures, and high-throughput data pipelines.
            </Typography>

            {/* Buttons */}
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderColor: theme.palette.divider,
                  color: 'text.primary',
                  bgcolor: 'background.paper',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: 'background.paper',
                    boxShadow: theme.shadows[2],
                  }
                }}
              >
                View Projects
              </Button>
              <Button
                variant="text"
                sx={{
                  py: 1.5,
                  px: 3,
                  color: 'text.secondary',
                  fontFamily: '"Fira Code", monospace',
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' }
                }}
              >
                ./contact_me.sh
              </Button>
            </Stack>
          </Stack>
        </Grid>

        {/* Right Column: Code Editor */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: theme.shadows[10],
              bgcolor: '#ffffff',
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            {/* Editor Header */}
            <Box
              sx={{
                bgcolor: '#f3f3f3',
                px: 2,
                py: 1,
                display: 'flex',
                alignItems: 'center',
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Stack direction="row" spacing={1} sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56', border: '1px solid #e0443e' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e', border: '1px solid #dea123' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f', border: '1px solid #1aab29' }} />
              </Stack>
              <Box
                sx={{
                  ml: 2,
                  px: 2,
                  py: 0.5,
                  bgcolor: '#ffffff',
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  border: `1px solid ${theme.palette.divider}`,
                  borderBottom: 'none',
                  fontSize: '0.75rem',
                  fontFamily: '"Fira Code", monospace',
                  color: 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  transform: 'translateY(5px)',
                  boxShadow: '0 -1px 2px rgba(0,0,0,0.05)',
                }}
              >
                <DataObjectIcon sx={{ fontSize: 14, mr: 0.5, color: '#3b82f6' }} />
                profile.json
                <CloseIcon sx={{ fontSize: 10, ml: 1, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover', borderRadius: '50%' } }} />
              </Box>
            </Box>

            {/* Editor Body */}
            <Box sx={{ p: 3, bgcolor: '#ffffff', fontFamily: '"Fira Code", monospace', fontSize: '0.875rem', overflowX: 'auto' }}>
              <Grid container spacing={0}>
                {/* Line Numbers */}
                <Grid item sx={{ width: '2rem', textAlign: 'right', pr: 2, color: '#d1d5db', userSelect: 'none', borderRight: '1px solid #f3f4f6' }}>
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <Box key={n}>{n}</Box>)}
                </Grid>
                {/* Code */}
                <Grid item xs sx={{ pl: 2 }}>
                  <Box>
                    <span style={{ color: '#a626a4' }}>const</span> <span style={{ color: theme.palette.text.primary }}>engineer</span> = {'{'}<br/>
                    &nbsp;&nbsp;<span style={{ color: '#e45649' }}>name</span>: <span style={{ color: '#50a14f' }}>"Randall"</span>,<br/>
                    &nbsp;&nbsp;<span style={{ color: '#e45649' }}>role</span>: <span style={{ color: '#50a14f' }}>"Cloud Architect"</span>,<br/>
                    &nbsp;&nbsp;<span style={{ color: '#e45649' }}>location</span>: <span style={{ color: '#50a14f' }}>"Toronto, ON"</span>,<br/>
                    &nbsp;&nbsp;<span style={{ color: '#e45649' }}>stack</span>: [<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#50a14f' }}>"React"</span>, <span style={{ color: '#50a14f' }}>"Node.js"</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#50a14f' }}>"AWS Lambda"</span>, <span style={{ color: '#50a14f' }}>"Terraform"</span><br/>
                    &nbsp;&nbsp;],<br/>
                    &nbsp;&nbsp;<span style={{ color: '#e45649' }}>status</span>: <span style={{ color: '#50a14f' }}>"Ready to deploy"</span>,<br/>
                    &nbsp;&nbsp;<span style={{ color: '#e45649' }}>execute</span>: <span style={{ color: '#a626a4' }}>async function</span>() {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#a626a4' }}>return</span> <span style={{ color: '#50a14f' }}>"High Impact"</span>;<br/>
                    &nbsp;&nbsp;{'}'}<br/>
                    {'};'}<span className="blinking-cursor"></span>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Editor Footer */}
            <Box
              sx={{
                bgcolor: theme.palette.primary.main,
                color: '#ffffff',
                py: 0.5,
                px: 1.5,
                fontFamily: '"Fira Code", monospace',
                fontSize: '0.625rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <GitHubIcon sx={{ fontSize: 10, mr: 0.5 }} /> main*
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SyncAltIcon sx={{ fontSize: 10, mr: 0.5 }} /> 0↓ 1↑
                </Box>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box>Ln 12, Col 2</Box>
                <Box>UTF-8</Box>
                <Box>JSON</Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
