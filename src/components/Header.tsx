<<<<<<< HEAD
import { AppBar, Toolbar, Typography, IconButton, Button, Stack, Container, useTheme, alpha } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`,
        bgcolor: alpha(theme.palette.background.default, 0.9),
        backdropFilter: 'blur(12px)',
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 64 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="h6"
              color="primary"
              sx={{
                fontFamily: '"Fira Code", monospace',
                fontWeight: 700,
                letterSpacing: '-0.025em'
              }}
            >
              &lt;Randall /&gt;
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'action.hover' } }} aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
            <IconButton sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'action.hover' } }} aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'action.hover' } }} aria-label="Email">
              <EmailIcon />
            </IconButton>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              disableElevation
              sx={{
                ml: 1,
                display: { xs: 'none', md: 'flex' },
                boxShadow: `0 4px 6px -1px ${alpha(theme.palette.primary.main, 0.2)}`,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              Resume.pdf
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
=======
import { Box, Stack, Typography, IconButton } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        px: 2,
        py: 1.5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box
            sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.5)'
            }}
        >
            <TerminalIcon fontSize="small" />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.025em', color: 'text.primary' }}>
            Cloud Resume
        </Typography>
      </Stack>

      <Stack direction="row" spacing={0.5}>
        <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'grey.100' } }}>
            <CodeIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: 'primary.main', bgcolor: 'primary.50', '&:hover': { bgcolor: 'primary.100' } }}>
            <LightModeIcon />
        </IconButton>
      </Stack>
    </Box>
>>>>>>> main
  );
};

export default Header;
