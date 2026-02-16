import { Box, Typography, Stack, Paper } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const OriginStory = () => {
  return (
    <Box sx={{ px: 2, mb: 4 }}>
      <Box
        sx={{
            p: '1px',
            background: 'linear-gradient(to bottom right, #0369a1, transparent)',
            borderRadius: 3,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
        }}
      >
        <Paper 
            elevation={0}
            sx={{ 
                p: 2.5,
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 128,
                    height: 128,
                    bgcolor: '#eff6ff',
                    borderRadius: '50%',
                    transform: 'translate(50%, -50%)',
                    filter: 'blur(40px)',
                    zIndex: 0
                }}
            />

            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5, position: 'relative', zIndex: 1 }}>
                 <HistoryEduIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                 <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Origin Story
                 </Typography>
            </Stack>

            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontWeight: 500, position: 'relative', zIndex: 1 }}>
                Forged in the fires of monolithic legacy systems, I now architect serverless microservices. My mission is to build scalable, resilient cloud infrastructure that developers love to deploy on.
            </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default OriginStory;
