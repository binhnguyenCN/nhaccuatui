// libs
import { render, screen } from '@testing-library/react';
// layouts
import Footer from './index';

describe('Footer', () => {
  it('renders a heading', () => {
    render(<Footer />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
