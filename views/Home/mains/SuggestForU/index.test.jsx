// libs
import renderer from 'react-test-renderer';
// layouts
import SuggestForYou from '.';

describe('render suggest for you', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer.create(<SuggestForYou />).toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
