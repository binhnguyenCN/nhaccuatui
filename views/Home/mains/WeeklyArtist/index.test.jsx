// libs
import renderer from 'react-test-renderer';
// layouts
import WeeklyArtist from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render weekly artists', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(<WeeklyArtist artists={mockData.topSong} />)
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
