import * as React from 'react';
import styled from 'styled-components/native';

import { SvgXml } from 'react-native-svg';
import { Card } from 'react-native-paper';
import { Restaurant } from '../types/restaurant';

import { Spacer } from '../../../components/spacer/spacer.component';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

interface Props {
  restaurant?: Restaurant;
}

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const ClosedLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading_bold};
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading_regular};
`;

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
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <ClosedLabel>Closed temporarily</ClosedLabel>
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
