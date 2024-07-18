import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('test root component', () => {
    it('it should render some string', () => {
        render(<App />);
        expect(screen.getByText(/milky way/)).toBeInTheDocument();
    });
});
