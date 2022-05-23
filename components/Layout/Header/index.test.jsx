// libs
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// layouts
import Header from '.';
// others
import TestProvider from '@/utils/TestProvider.jsx';
import vi from '@/locales/vi';
import en from '@/locales/en';

describe('renders a header', () => {
  it('should include logo', () => {
    // arrange
    const logoAlt = 'nhaccuatui icon';
    // act
    render(
      <TestProvider>
        <Header />
      </TestProvider>,
    );
    // assert
    expect(screen.getByAltText(logoAlt)).toBeInTheDocument();
  });
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(
        <TestProvider>
          <Header />
        </TestProvider>,
      )
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});

describe('check multi language', () => {
  it('should change to vietnamese when select vi', () => {
    // arrange
    const testId = 'select';
    const songVietnamese = vi.header.menuList[0].title;
    const shortCutVietnamese = 'vi';
    // act
    render(
      <TestProvider>
        <Header />
      </TestProvider>,
    );
    // assert
    expect(screen.getByText(songVietnamese)).toBeInTheDocument();
    fireEvent.change(screen.getByTestId(testId), {
      target: { value: shortCutVietnamese },
    });
    expect(screen.getByText(songVietnamese)).toBeInTheDocument();
  });
  it('should change to english when select en', () => {
    // arrange
    const testId = 'select';
    const songEnglish = en.header.menuList[0].title;
    const songVietnamese = vi.header.menuList[0].title;
    const shortCutEnglish = 'en';
    // act
    render(
      <TestProvider>
        <Header />
      </TestProvider>,
    );
    // assert
    expect(screen.getByText(songVietnamese)).toBeInTheDocument();
    fireEvent.change(screen.getByTestId(testId), {
      target: { value: shortCutEnglish },
    });
    expect(screen.getByText(songEnglish)).toBeInTheDocument();
  });
});
