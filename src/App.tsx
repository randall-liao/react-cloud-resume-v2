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
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
      <Header />

      {/* Background Abstract Pattern */}
      <Box
        sx={{
          position: 'fixed',
          top: 80,
          right: 0,
          zIndex: -1,
          opacity: 0.1,
          pointerEvents: 'none',
          height: 384, // 96 * 4
          width: 384,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXH0uVSkacDEXWFsTXf7bQyTDHw1PqD5vSFg-s28lNIzgDlQUrsPxqf7zEvL06pdokdmmib0kNxupAkbiRr12Ll7Ng9eXT_AumUwiq1RmnrAs1dOgqhGylKXMeMUz5oLk0pAfkTiUwc1LpJV9QJTKZruwlPkURthngXmGZZHplSOSYJQt2YJOd1fTR-GuEIChDBrxFJG_KPS4_4W3BJqNasw8UOvUJA-_aSxpNyd9q52k3p_lIt8RCNHImUGD4WUDA6mOlzpRt7BL"
          alt="Abstract Pattern"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(64px)',
            borderRadius: '50%',
            mixBlendMode: 'multiply',
          }}
        />
      </Box>

      <Box component="main" sx={{ flexGrow: 1, pb: 10 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Hero />
          <OriginStory />
          <Projects />

          <Box component="section" sx={{ mb: 12 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Certifications />
              </Grid>
              <Grid item xs={12} md={6}>
                <Interests />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <VisitorCounter />
    </Box>
  );
}

export default App;
