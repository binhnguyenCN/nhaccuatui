// libs
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// layouts
import SongRanking from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render song list', () => {
  it('should include 12 items', () => {
    // arrange
    const testId = 'song-ranking-item';
    const maxLength = 10;
    // act
    render(<SongRanking songs={mockData.songRanking.song} />);
    // assert
    expect(screen.getAllByTestId(testId)).toHaveLength(maxLength);
  });
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(<SongRanking songs={mockData.songRanking.song} />)
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
