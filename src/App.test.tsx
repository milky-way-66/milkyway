import { render, screen } from '@testing-library/react';
import App from './App';

describe('test root component', () => {
    it('it should render some string', () => {
        render(<App />);
        expect(screen.getByText(/weather/)).toBeInTheDocument();
    });
});
