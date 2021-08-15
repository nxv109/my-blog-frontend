import { ThemeProvider as ThemeProviderBase } from 'styled-components';

import GlobalStyle from '@/styles/globals';
import theme from '@/styles/themes';

const ThemeProvider: React.FC = ({ children }) => (
  <ThemeProviderBase theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProviderBase>
);

export default ThemeProvider;
