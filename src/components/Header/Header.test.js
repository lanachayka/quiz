import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Header from './Header';

test('render without errors', () => {
    render(<Header />);
    expect(screen.getByAltText(/quiz icon/i)).toBeInTheDocument();
    expect(screen.getByText(/вікторина/i)).toBeInTheDocument();
});