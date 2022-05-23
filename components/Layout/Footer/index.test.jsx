// libs
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// layouts
import Footer from '.';
// others
import FooterData from '@/mocks/dataSource/Footer';

describe('render a footer', () => {
  it('should include email', () => {
    // arrange
    const indexEmail = FooterData.contact.findIndex(
      (item) => item.title === 'email',
    );
    const emailValue = FooterData.contact[indexEmail].content;
    // act
    render(<Footer />);
    // assert
    expect(screen.getByText(emailValue)).toBeInTheDocument();
  });
  it('should include phone', () => {
    // arrange
    const indexPhone = FooterData.contact.findIndex(
      (item) => item.title === 'phone',
    );
    const phoneValue = FooterData.contact[indexPhone].content;
    // act
    render(<Footer />);
    // assert
    expect(screen.getByText(phoneValue)).toBeInTheDocument();
  });
  it('should renders correctly', () => {
    // act
    const tree = renderer.create(<Footer />).toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
