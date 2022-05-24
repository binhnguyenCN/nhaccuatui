// libs
import renderer from 'react-test-renderer';
// layouts
import Layout from '.';
// others

describe('render a footer', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer.create(<Layout />).toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
