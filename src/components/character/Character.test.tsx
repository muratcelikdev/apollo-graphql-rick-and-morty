import { screen, render } from '@testing-library/react';

import Character from 'components/character/Character';

const TEST_DATA = {
  id: '#1',
  name: 'Rick',
  image:
    'https://img-s1.onedio.com/id-5dc92800471fe11b12623353/rev-0/w-620/f-jpg/s-864a979c856afcdfea23619b122b41e2bb385192.jpg',
  location: { name: 'Earth' },
};

test('image, id, name and location values must be visible on initial render', () => {
  render(<Character {...TEST_DATA} />);

  expect(screen.getByTestId('character-box')).toBeInTheDocument();
  expect(screen.getByTestId('character-image')).toHaveAttribute('src', TEST_DATA.image);
  expect(screen.getByTestId('character-id')).toHaveTextContent(TEST_DATA.id);
  expect(screen.getByTestId('character-name')).toHaveTextContent(TEST_DATA.name);
  expect(screen.getByTestId('character-location')).toHaveTextContent(TEST_DATA.location.name);
});
