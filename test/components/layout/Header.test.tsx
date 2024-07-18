import { render, screen } from '@testing-library/react';
import { Header } from '@components/layout/Header';

describe('test root component', () => {
    it('it should render some string', () => {
        render(<Header logoText="Milky way header" />);
        expect(screen.getByText(/header/)).toBeInTheDocument();
    });
});
