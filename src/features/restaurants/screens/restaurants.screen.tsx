import React from 'react';
import styled from 'styled-components/native';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchbarContainer = styled.View`
  padding: 16px;
`;

const ListContainer = styled.View`
  flex: 1;
  background-color: teal;
  padding: 16px;
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
