// libs
import { render, screen, fireEvent } from '@testing-library/react';
// layouts
import Header from './index';

describe('Header', () => {
  it('renders a header', () => {
    render(<Header />);
    const logo = screen.getByAltText('nhaccuatui icon');
    expect(logo).toBeInTheDocument();
  });
  it('checks vietnamese', () => {
    render(<Header />);
    const selectLang = screen.getByPlaceholderText('Choose language');
    fireEvent.change(selectLang, { target: { value: 'vi' } });
    const songs = screen.getByText('Bài hát');
    expect(songs).toBeInTheDocument();
  });
  it('checks english', () => {
    render(<Header />);
    const selectLang = screen.getByTestId('select');
    fireEvent.change(selectLang, { target: { value: 'en' } });
    const songs = screen.getByText('Songs');
    expect(songs).toBeInTheDocument();
  });
});
