import Home from '@/pages/Home';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('Should renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Hello world!'));
  });
});
