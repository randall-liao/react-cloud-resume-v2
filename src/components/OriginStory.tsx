import { Box, Typography, Stack, Paper, useTheme, alpha } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const OriginStory = () => {
  const theme = useTheme();
  return (
    <Box sx={{ px: 2, mb: 4 }}>
      <Box
        sx={{
            p: '1px',
            background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, transparent)`,
            borderRadius: 3,
            boxShadow: theme.shadows[1]
        }}
      >
        <Paper 
            elevation={0}
            sx={{ 
                p: 2.5,
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                bgcolor: 'background.paper'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 128,
                    height: 128,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
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
