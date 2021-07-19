import * as React from 'react';
import styled, { useTheme } from 'styled-components/native';

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

type SizeKey = keyof typeof sizeVariants;

const positionVariants = {
  top: 'marginTop',
  left: 'marginLeft',
  bottom: 'marginBottom',
  right: 'marginRight',
};

type PositionKey = keyof typeof positionVariants;

interface Props {
  position: PositionKey;
  size: SizeKey;
}

// const StyledSpacer = styled.View<Props>`
//   ${({ position, size, theme }) =>
//     `${positionVariants[position]}: ${theme.space[sizeVariants[size]]}`};
// `;

const StyledSpacer = styled.View<{ variant: string }>`
  ${(props) => props.variant}
`;

export const Spacer: React.FC<Props> = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = `${positionVariants[position]}: ${
    theme.space[sizeVariants[size]]
  }`;
  return <StyledSpacer variant={variant} children={children} />;
};
