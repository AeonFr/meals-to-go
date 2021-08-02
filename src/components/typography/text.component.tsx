import styled from 'styled-components/native';
import { Theme } from '../../infrastructure/theme';

const defaultTextStyles = (theme: Theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme) => `
  font-size: ${theme.fontSizes[2]};
`;

const hint = (theme: Theme) => `
  font-size: ${theme.fontSizes[2]};
`;

const error = (theme: Theme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme: Theme) => `
  font-size: ${theme.fontSizes[2]};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: Theme) => `
  font-family: ${theme.fonts.heading_bold};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  hint,
  error,
  label,
  caption,
};

interface Props {
  variant: keyof typeof variants;
}

export const Text = styled.Text<Props>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
