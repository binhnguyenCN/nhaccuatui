// libs
import renderer from 'react-test-renderer';
// layouts
import CompanyInfo from '.';

describe('render company info', () => {
  it('should renders correctly', () => {
    // act
    const tree = renderer.create(<CompanyInfo />).toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
