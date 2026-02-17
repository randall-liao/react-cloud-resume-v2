import { Box, Stack, Typography, IconButton, Paper, useTheme, alpha } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const theme = useTheme();
  return (
    <Box sx={{ p: 2, pt: 3 }}>
      <Paper
        elevation={0}
        sx={{
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            p: 2.5,
            boxShadow: theme.shadows[1],
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, pb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Stack direction="row" spacing={0.75}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#f87171', border: '1px solid', borderColor: alpha('#f87171', 0.2) }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#facc15', border: '1px solid', borderColor: alpha('#facc15', 0.2) }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#4ade80', border: '1px solid', borderColor: alpha('#4ade80', 0.2) }} />
            </Stack>
            <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', color: 'text.secondary', bgcolor: 'background.default', px: 1, py: 0.25, borderRadius: 1 }}>
                bash — 80x24
            </Typography>
        </Box>

        <Box sx={{ fontFamily: '"Fira Code", monospace', fontSize: '0.875rem', lineHeight: 1.6, color: 'text.primary', bgcolor: alpha(theme.palette.background.default, 0.5), p: 1, borderRadius: 2 }}>
            <Typography component="span" sx={{ color: 'text.secondary' }}>{'{'}</Typography><br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"name"</Typography>: <Typography component="span" sx={{ color: '#16a34a' }}>"Randall"</Typography>,<br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"role"</Typography>: <Typography component="span" sx={{ color: '#16a34a' }}>"Sr. Cloud Engineer"</Typography>,<br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"location"</Typography>: <Typography component="span" sx={{ color: '#16a34a' }}>"us-west-2"</Typography>,<br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"level"</Typography>: <Typography component="span" sx={{ color: '#2563eb' }}>5</Typography>,<br/>
            &nbsp;&nbsp;<Typography component="span" sx={{ color: '#d946ef', fontWeight: 500 }}>"status"</Typography>: <Typography component="span" sx={{ color: '#16a34a' }}>"ready_to_deploy"</Typography><br/>
            <Typography component="span" sx={{ color: 'text.secondary' }}>{'}'}</Typography>
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold', animation: 'pulse 1s infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } } }}>_</Box>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            {[
                { Icon: GitHubIcon, href: "https://github.com/randall-mpac", color: "text.primary" },
                { Icon: LinkedInIcon, href: "https://linkedin.com", color: "#0077b5" },
                { Icon: EmailIcon, href: "mailto:randall@example.com", color: "#ef4444" }
            ].map((item, index) => (
                <IconButton
                    key={index}
                    component="a"
                    href={item.href}
                    target="_blank"
                    sx={{
                        width: 40, height: 40,
                        bgcolor: 'background.default',
                        border: '1px solid',
                        borderColor: 'divider',
                        color: 'text.secondary',
                        '&:hover': { bgcolor: 'background.paper', color: item.color, borderColor: 'primary.main', transform: 'scale(1.05)' },
                        transition: 'all 0.2s'
                    }}
                >
                    <item.Icon fontSize="small" />
                </IconButton>
            ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Hero;
