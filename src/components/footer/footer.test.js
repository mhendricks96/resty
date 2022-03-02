import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './index';

describe('Footer', () => {
  it('should render the footer component', () => {
    render(<Footer />);
    let text = screen.getByText('© 2018');
    expect(text).toBeInTheDocument();
  });
});