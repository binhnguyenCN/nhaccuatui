// libs
import renderer from 'react-test-renderer';
// layouts
import Slider from '.';
// mocks
import mockData from '@/mocks/mockApi';

describe('render slider', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(<Slider banners={mockData.bannerList} />)
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
