// libs
import renderer from 'react-test-renderer';
// layouts
import TopSong from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render top song list', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer.create(<TopSong songs={mockData.topSong} />).toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
