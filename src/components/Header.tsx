import { useContext } from 'react';
import { Box, Stack, Typography, IconButton, useTheme, alpha } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../theme/ColorModeContext';

const Header = () => {
  const theme = useTheme();
  const { toggleColorMode, mode } = useContext(ColorModeContext);

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        bgcolor: alpha(theme.palette.background.paper, 0.8),
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
        <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'action.hover' } }}>
            <CodeIcon />
        </IconButton>
        <IconButton
            size="small"
            onClick={toggleColorMode}
            sx={{
                color: 'primary.main',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.2) }
            }}
        >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;
