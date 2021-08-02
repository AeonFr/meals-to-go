import styled from 'styled-components/native';
import { Card as _Card } from 'react-native-paper';

export const Card = styled(_Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading_regular};
`;
