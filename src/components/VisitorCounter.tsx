import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Stack, CircularProgress, useTheme, alpha } from '@mui/material';

const VisitorCounter = () => {
    const theme = useTheme();
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                setTimeout(() => {
                    setCount(1402);
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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show if at top (within 50px buffer)
            const isAtTop = currentScrollY < 50;

            // Show if at bottom (within 50px buffer)
            const isAtBottom = windowHeight + currentScrollY >= documentHeight - 50;

            if (isAtTop || isAtBottom) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: alpha(theme.palette.background.default, 0.8), // changed to default for better blend
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid',
                borderColor: 'divider',
                py: 1.5, // Reduced vertical padding
                px: 3,
                zIndex: 1100,
                boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                {/* Left Side: Count */}
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Visitors
                    </Typography>
                    <Stack direction="row" alignItems="baseline" spacing={1}>
                        {loading ? (
                            <CircularProgress size={12} thickness={5} />
                        ) : (
                            <>
                                <Typography variant="body1" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
                                    {count?.toLocaleString()}
                                </Typography>
                                <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'success.main' }}>
                                    ▲ 12
                                </Typography>
                            </>
                        )}
                    </Stack>
                </Stack>

                {/* Right Side: Status */}
                <Box
                    sx={{
                        bgcolor: alpha(theme.palette.success.main, 0.1),
                        borderRadius: 999,
                        border: '1px solid',
                        borderColor: alpha(theme.palette.success.main, 0.2),
                        px: 1.5,
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Box sx={{ position: 'relative', width: 6, height: 6 }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                bgcolor: 'success.main',
                                borderRadius: '50%',
                                animation: 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
                                '@keyframes pulse-ring': {
                                    '0%': { transform: 'scale(0.33)' },
                                    '80%, 100%': { opacity: 0 }
                                }
                            }}
                        />
                        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'success.main', borderRadius: '50%', zIndex: 10 }} />
                    </Box>
                    <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'success.dark', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                        Online
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default VisitorCounter;
