import { Theme } from './index';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
