import * as React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
import { Restaurant } from '../types/restaurant';

interface Props {
  restaurant?: Restaurant;
}

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
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Title title={name} />
    </Card>
  );
};
