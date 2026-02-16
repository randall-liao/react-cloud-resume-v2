import { Container, Card, CardContent, Typography, Box, Stack } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Certifications = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, borderBottom: '1px solid #333', pb: 1 }}>
        ./certifications
      </Typography>
      <Card sx={{ borderLeft: '4px solid #FF9900' }}>
        <CardContent>
            <Stack direction="row" alignItems="center" spacing={2}>
                <VerifiedUserIcon sx={{ color: '#FF9900', fontSize: 40 }} />
                <Box>
                    <Typography variant="h6">
                        AWS Certified Solutions Architect – Professional
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Fira Code", monospace' }}>
                        ID: AWS-PSA-XXXXX
                    </Typography>
                </Box>
            </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Certifications;
