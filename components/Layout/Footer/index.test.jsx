// libs
import { render, screen } from '@testing-library/react';
// layouts
import Footer from './index';
// others
import FooterData from '@/data_source/Footer';

describe('render a footer', () => {
  it('should include email', () => {
    render(<Footer />);
    // arrange
    const indexEmail = FooterData.contact.findIndex(
      (item) => item.title === 'email',
    );
    const emailValue = FooterData.contact[indexEmail].content;
    // act
    const emailEle = screen.getByText(emailValue);
    // assert
    expect(emailEle).toBeInTheDocument();
  });
  it('should include phone', () => {
    render(<Footer />);
    // arrange
    const indexPhone = FooterData.contact.findIndex(
      (item) => item.title === 'phone',
    );
    const phoneValue = FooterData.contact[indexPhone].content;
    // act
    const phoneEle = screen.getByText(phoneValue);
    // assert
    expect(phoneEle).toBeInTheDocument();
  });
});
