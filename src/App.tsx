import { Box, Stack } from '@mui/material';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Stack spacing={0} flex={1}>
        <Hero />
        <OriginStory />
        <Projects />
        <Certifications />
        <Interests />
      </Stack>
      <VisitorCounter />
    </Box>
  );
}

export default App;
