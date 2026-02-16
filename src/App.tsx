import { Box, Container, Grid } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="main" sx={{ flex: 1, overflowY: 'auto' }}>
        <Container maxWidth="xl" disableGutters sx={{ pb: { xs: 10, md: 4 } }}>
            <Grid container spacing={{ xs: 0, md: 3 }} sx={{ mt: { xs: 0, md: 2 }, px: { xs: 0, md: 2 } }}>
                {/* Left Column: Profile & Bio */}
                <Grid item xs={12} md={4} lg={3}>
                    <Hero />
                    <OriginStory />
                </Grid>

                {/* Middle Column: Main Work */}
                <Grid item xs={12} md={8} lg={6}>
                    <Projects />
                </Grid>

                {/* Right Column: Extras */}
                <Grid item xs={12} md={12} lg={3}>
                     <Box sx={{ display: { xs: 'block', md: 'flex', lg: 'block' }, gap: 3 }}>
                        <Box sx={{ flex: 1 }}><Certifications /></Box>
                        <Box sx={{ flex: 1 }}><Interests /></Box>
                     </Box>
                </Grid>
            </Grid>
        </Container>
      </Box>

      <VisitorCounter />
    </Box>
  );
}

export default App;
