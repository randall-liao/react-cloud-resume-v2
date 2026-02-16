import { useState, useEffect } from 'react';
import { Box, Typography, Container, CircularProgress } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Placeholder fetch call
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Simulating API call
        // const response = await fetch('https://api.your-aws-gateway.com/visitor-count');
        // const data = await response.json();
        // setCount(data.count);
        
        // Mock data for display
        setTimeout(() => {
            setCount(1337);
            setLoading(false);
        }, 1000);

      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setCount(0);
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <Box 
        component="footer" 
        sx={{ 
            py: 2, 
            mt: 8,
            borderTop: '1px solid #333',
            bgcolor: '#0e0e0e'
        }}
    >
      <Container maxWidth="md">
        <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1}>
            <VisibilityIcon color="action" fontSize="small" />
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2 }}>
                VISITOR_COUNT: 
            </Typography>
            {loading ? (
                <CircularProgress size={14} thickness={5} />
            ) : (
                <Typography variant="body2" sx={{ fontFamily: '"Fira Code", monospace', color: '#00ff9d' }}>
                    {count}
                </Typography>
            )}
        </Box>
      </Container>
    </Box>
  );
};

export default VisitorCounter;
