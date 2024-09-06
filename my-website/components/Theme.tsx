import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark', 
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      light: '#000000',
      dark: 'ffffff',
    },
    background: {
      light: '#ffffff',
      dark: '#1a202c',
    },
  },
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        bg: mode('background.light', 'background.dark')(props),
        color: mode('primary.light', 'primary.dark')(props),
      },
    }),
  },
});

export default theme;