import styled from 'styled-components/native';

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

export const Spacer = styled.View<Props>`
  ${({ position, size, theme }) =>
    `${positionVariants[position]}: ${theme.space[sizeVariants[size]]}`};
`;
