// libs
import renderer from 'react-test-renderer';
// layouts
import NewRelease from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render new release', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(<NewRelease songs={mockData.newSong} />)
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
