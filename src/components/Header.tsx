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
  );
};

export default Header;
