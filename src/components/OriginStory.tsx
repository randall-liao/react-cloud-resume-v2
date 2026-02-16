import { Container, Paper, Typography, Stack } from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const OriginStory = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper 
            elevation={0}
            sx={{ 
                p: 4, 
                borderLeft: '4px solid #00ff9d',
                bgcolor: 'rgba(0, 255, 157, 0.05)'
            }}
        >
            <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                     <CloudQueueIcon color="primary" />
                     <Typography variant="h5" color="text.primary">
                        origin_story.log
                     </Typography>
                </Stack>
                <Typography variant="body1" sx={{ fontFamily: '"Roboto Mono", monospace', lineHeight: 1.8 }}>
                    In 2018, I discovered cloud computing via GeForce Now. It wasn't just gaming; it was a realization. 
                    I saw that compute power was becoming a centralized utility, much like the electricity grid of the 1900s. 
                    This shift from local hardware to on-demand, scalable infrastructure sparked my journey into building 
                    fault-tolerant, distributed systems.
                </Typography>
            </Stack>
        </Paper>
    </Container>
  );
};

export default OriginStory;
