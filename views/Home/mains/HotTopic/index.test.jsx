// libs
import renderer from 'react-test-renderer';
// layouts
import HotTopic from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render hot topic', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(<HotTopic topics={mockData.hotTopic} />)
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
