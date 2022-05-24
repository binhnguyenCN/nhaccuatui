// libs
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// layouts
import Songs from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render song list', () => {
  it('should include 12 items', () => {
    // arrange
    const testId = 'song-item';
    const maxLength = 12;
    // act
    render(<Songs songs={mockData.songList} />);
    // assert
    expect(screen.getAllByTestId(testId)).toHaveLength(maxLength);
  });
  it('should renders correctly', () => {
    // act
    const tree = renderer.create(<Songs songs={mockData.songList} />).toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
