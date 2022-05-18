// libs
import { render, screen, fireEvent } from '@testing-library/react';
// layouts
import Header from '.';
// others
import TestProvider from '@/utils/TestProvider.jsx';
import vi from '@/locales/vi';
import en from '@/locales/en';

describe('renders a header', () => {
  it('should include logo', () => {
    render(
      <TestProvider>
        <Header />
      </TestProvider>,
    );
    // arrange
    const logoAlt = 'nhaccuatui icon';
    // act
    const logo = screen.getByAltText(logoAlt);
    // assert
    expect(logo).toBeInTheDocument();
  });
});

describe('check multi linguistic', () => {
  it('should vietnamese songs', () => {
    render(
      <TestProvider>
        <Header />
      </TestProvider>,
    );
    // arrange
    const placeholder = 'Choose language';
    const songVietnamese = vi.header.menuList[0].title;
    const shortCutVietnamese = 'vi';
    // act
    const selectLang = screen.getByPlaceholderText(placeholder);
    fireEvent.change(selectLang, { target: { value: shortCutVietnamese } });
    const songsEle = screen.getByText(songVietnamese);
    // assert
    expect(songsEle).toBeInTheDocument();
  });
  it('should english songs', () => {
    render(
      <TestProvider>
        <Header />
      </TestProvider>,
    );
    // arrange
    const testId = 'select';
    const songEnglish = en.header.menuList[0].title;
    const shortCutEnglish = 'en';
    // act
    const selectLang = screen.getByTestId(testId);
    fireEvent.change(selectLang, { target: { value: shortCutEnglish } });
    const songsEle = screen.getByText(songEnglish);
    // assert
    expect(songsEle).toBeInTheDocument();
  });
});
