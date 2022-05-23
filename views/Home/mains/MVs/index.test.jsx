// libs
import renderer from 'react-test-renderer';
// layouts
import MVs from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render MVs', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(<MVs videoList={mockData.videoList} />)
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
