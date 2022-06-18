import { screen, render, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import CharacterList, { GET_CHARACTERS } from 'components/character-list/CharacterList';

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        limit: 20,
      },
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: '1',
              name: 'Rick Sanchez',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              location: { name: 'Citadel of Ricks', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '2',
              name: 'Morty Smith',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              location: { name: 'Citadel of Ricks', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '3',
              name: 'Summer Smith',
              image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
              location: { name: 'Earth (Replacement Dimension)', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '4',
              name: 'Beth Smith',
              image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
              location: { name: 'Earth (Replacement Dimension)', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '5',
              name: 'Jerry Smith',
              image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
              location: { name: 'Earth (Replacement Dimension)', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '6',
              name: 'Abadango Cluster Princess',
              image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
              location: { name: 'Abadango', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '7',
              name: 'Abradolf Lincler',
              image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
              location: { name: 'Testicle Monster Dimension', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '8',
              name: 'Adjudicator Rick',
              image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
              location: { name: 'Citadel of Ricks', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '9',
              name: 'Agency Director',
              image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
              location: { name: 'Earth (Replacement Dimension)', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '10',
              name: 'Alan Rails',
              image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
              location: { name: "Worldender's lair", __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '11',
              name: 'Albert Einstein',
              image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
              location: { name: 'Earth (Replacement Dimension)', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '12',
              name: 'Alexander',
              image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
              location: { name: 'Anatomy Park', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '13',
              name: 'Alien Googah',
              image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
              location: { name: 'Earth (Replacement Dimension)', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '14',
              name: 'Alien Morty',
              image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
              location: { name: 'Citadel of Ricks', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '15',
              name: 'Alien Rick',
              image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
              location: { name: 'Citadel of Ricks', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '16',
              name: 'Amish Cyborg',
              image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
              location: { name: 'Earth (Replacement Dimension)', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '17',
              name: 'Annie',
              image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
              location: { name: 'Anatomy Park', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '18',
              name: 'Antenna Morty',
              image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
              location: { name: 'Citadel of Ricks', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '19',
              name: 'Antenna Rick',
              image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
              location: { name: 'unknown', __typename: 'Location' },
              __typename: 'Character',
            },
            {
              id: '20',
              name: 'Ants in my Eyes Johnson',
              image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
              location: { name: 'Interdimensional Cable', __typename: 'Location' },
              __typename: 'Character',
            },
          ],
          __typename: 'Characters',
        },
      },
    },
  },
];

test('should  open filter modal properly', async () => {
  await new Promise((resolve) => setTimeout(resolve, 0));

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharacterList />
    </MockedProvider>
  );

  const filterButton = screen.getByTestId('filter-button');

  fireEvent.click(filterButton);
});

// TODO: will be implemented later
