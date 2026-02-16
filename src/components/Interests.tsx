import { Container, Paper, Typography, Stack, Box } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const Interests = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, borderBottom: '1px solid #333', pb: 1 }}>
        ./interests
      </Typography>
      <Paper elevation={0} sx={{ p: 3, border: '1px dashed #555' }}>
        <Stack direction="row" spacing={3} alignItems="flex-start">
            <ThermostatIcon color="secondary" sx={{ fontSize: 40 }} />
            <Box>
                <Typography variant="h6" gutterBottom>
                    Precision Cooking (Sous Vide)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Applying the same rigorous temperature and time controls used for perfect chicken thighs to building fault-tolerant cloud infrastructure.
                </Typography>
            </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Interests;
