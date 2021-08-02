import * as React from 'react';

import { SvgXml } from 'react-native-svg';
import { Restaurant } from '../types/restaurant';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
  Address,
  Card,
  Icon,
  Info,
  Rating,
  Section,
  SectionEnd,
} from './restaurant-info-card.styles';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

interface Props {
  restaurant?: Restaurant;
}

export const RestaurantInfoCard: React.FC<Props> = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://p2.piqsels.com/preview/355/185/90/sandwich-vegetarian-healthy-panini.jpg',
    ],
    address = '100 some random street',
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, key) => (
              <SvgXml xml={star} key={key} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed temporarily</Text>
            )}
            {isOpenNow && (
              <Spacer position="left" size="large">
                <SvgXml xml={open} width={20} height={20} />
              </Spacer>
            )}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
