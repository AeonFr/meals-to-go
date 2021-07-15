import * as React from 'react';
import styled from 'styled-components/native';

import { Card } from 'react-native-paper';
import { Restaurant } from '../types/restaurant';

interface Props {
  restaurant?: Restaurant;
}

const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.brand.primary};
  font-size: 22px;
  font-weight: bold;
`;

export const RestaurantInfoCard: React.FC<Props> = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://p2.piqsels.com/preview/355/185/90/sandwich-vegetarian-healthy-panini.jpg',
    ],
    address = '100 some random street',
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};
