// libs
import renderer from 'react-test-renderer';
// layouts
import MVRanking from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render MV ranking', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(<MVRanking mvs={mockData.videoList} />)
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
