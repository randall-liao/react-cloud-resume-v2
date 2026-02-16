import { Box, Stack, Typography, IconButton, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  return (
    <Box sx={{ p: 2, pt: 3 }}>
      <Paper
        elevation={0}
        sx={{
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            p: 2.5,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
            position: 'relative'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, pb: 1, borderBottom: '1px solid', borderColor: 'grey.100' }}>
            <Stack direction="row" spacing={0.75}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#f87171', border: '1px solid rgba(239, 68, 68, 0.2)' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#facc15', border: '1px solid rgba(234, 179, 8, 0.2)' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.2)' }} />
            </Stack>
            <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', color: 'text.secondary', bgcolor: 'background.default', px: 1, py: 0.25, borderRadius: 1 }}>
                bash — 80x24
            </Typography>
        </Box>

        <Box sx={{ fontFamily: '"Fira Code", monospace', fontSize: '0.875rem', lineHeight: 1.6, color: 'text.primary', bgcolor: 'rgba(248, 250, 252, 0.5)', p: 1, borderRadius: 2 }}>
            <Typography component="span" sx={{ color: 'text.secondary' }}>{'{'}</Typography><br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"name"</Typography>: <Typography component="span" sx={{ color: '#16a34a' }}>"Randall"</Typography>,<br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"role"</Typography>: <Typography component="span" sx={{ color: '#16a34a' }}>"Sr. Cloud Engineer"</Typography>,<br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"location"</Typography>: <Typography component="span" sx={{ color: '#16a34a' }}>"us-west-2"</Typography>,<br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"level"</Typography>: <Typography component="span" sx={{ color: '#2563eb' }}>5</Typography>,<br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"status"</Typography>: <Typography component="span" sx={{ color: '#16a34a' }}>"ready_to_deploy"</Typography><br/>
            <Typography component="span" sx={{ color: 'text.secondary' }}>{'}'}</Typography>
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold', animation: 'pulse 1s infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } } }}>_</Box>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3, pt: 2, borderTop: '1px solid', borderColor: 'grey.100' }}>
            <IconButton 
                component="a"
                href="https://github.com/randall-mpac"
                target="_blank"
                sx={{
                    width: 40, height: 40,
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    color: 'text.secondary',
                    '&:hover': { bgcolor: 'white', color: 'text.primary', borderColor: 'primary.main', transform: 'scale(1.05)' },
                    transition: 'all 0.2s'
                }}
            >
                <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton 
                component="a"
                href="https://linkedin.com"
                target="_blank"
                sx={{
                    width: 40, height: 40,
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    color: 'text.secondary',
                    '&:hover': { bgcolor: 'white', color: '#0077b5', borderColor: 'primary.main', transform: 'scale(1.05)' },
                    transition: 'all 0.2s'
                }}
            >
                <LinkedInIcon fontSize="small" />
            </IconButton>
             <IconButton
                component="a"
                href="mailto:randall@example.com"
                sx={{
                    width: 40, height: 40,
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    color: 'text.secondary',
                    '&:hover': { bgcolor: 'white', color: '#ef4444', borderColor: 'primary.main', transform: 'scale(1.05)' },
                    transition: 'all 0.2s'
                }}
            >
                <EmailIcon fontSize="small" />
            </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Hero;
