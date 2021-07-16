import React from 'react';
import styled from 'styled-components/native';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0}px;
`;

const SearchbarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <ScreenContainer>
      <SearchbarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchbarContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </ScreenContainer>
  );
};
