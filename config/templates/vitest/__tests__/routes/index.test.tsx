import AppRoutes from '@/routes';
import { render, screen } from '@testing-library/react';

describe('AppRoutes', () => {
  it('Should renders without crashing', () => {
    render(<AppRoutes />);
    expect(screen.getByText('Hello world!'));
  });
});
