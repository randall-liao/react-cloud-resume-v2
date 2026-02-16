import { Box, Container, Stack } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <Box sx={{ bgcolor: '#f1f5f9', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <Container
        maxWidth="xs"
        disableGutters
        sx={{
            bgcolor: 'background.default',
            minHeight: '100vh',
            boxShadow: { sm: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' },
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}
      >
        <Header />
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
            <Stack spacing={0} pb={8}>
                <Hero />
                <OriginStory />
                <Projects />
                <Certifications />
                <Interests />
            </Stack>
        </Box>
        <VisitorCounter />
      </Container>
    </Box>
  );
}

export default App;
