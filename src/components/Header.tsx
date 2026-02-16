import { Box, Stack, Typography, IconButton } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        px: 2,
        py: 1.5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box
            sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.5)'
            }}
        >
            <TerminalIcon fontSize="small" />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.025em', color: 'text.primary' }}>
            Cloud Resume
        </Typography>
      </Stack>

      <Stack direction="row" spacing={0.5}>
        <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'grey.100' } }}>
            <CodeIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: 'primary.main', bgcolor: 'primary.50', '&:hover': { bgcolor: 'primary.100' } }}>
            <LightModeIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;
