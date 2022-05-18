// libs
import { render, screen, fireEvent } from '@testing-library/react';
// layouts
import Header from '.';
// others
import TestProvider from '@/utils/TestProvider.jsx';

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
    const songVietnamese = 'Bài hát';
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
    const songEnglish = 'Songs';
    const shortCutEnglish = 'en';
    // act
    const selectLang = screen.getByTestId(testId);
    fireEvent.change(selectLang, { target: { value: shortCutEnglish } });
    const songsEle = screen.getByText(songEnglish);
    // assert
    expect(songsEle).toBeInTheDocument();
  });
});
