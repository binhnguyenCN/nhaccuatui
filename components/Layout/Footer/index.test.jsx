// libs
import { render, screen } from '@testing-library/react';
// layouts
import Footer from './index';

describe('footer', () => {
  it('renders a footer', () => {
    render(<Footer />);
    const email = screen.getByText(/support@nct.vn/i);
    expect(email).toBeInTheDocument();
  });
});
