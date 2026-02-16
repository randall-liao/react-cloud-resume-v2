import { Box, Container, Stack, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';

const Hero = () => {
  return (
    <Box sx={{ pt: 8, pb: 4 }}>
      <Container maxWidth="md">
        <Stack spacing={2} alignItems="flex-start">
          <Stack direction="row" alignItems="center" spacing={1}>
            <TerminalIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h2" component="h1" color="primary">
              Randall
            </Typography>
          </Stack>
          <Typography variant="h4" color="text.secondary" sx={{ fontFamily: '"Fira Code", monospace' }}>
            Backend Engineer & Cloud Architect
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton 
              color="primary" 
              component="a" 
              href="https://github.com/randall-mpac" 
              target="_blank"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton 
              color="primary" 
              component="a" 
              href="https://linkedin.com" 
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
