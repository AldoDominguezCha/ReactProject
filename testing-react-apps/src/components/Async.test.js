import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('Renders posts if request suceeds', async () => {
        // Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }, { id: 'p2', title: 'Second post' }],
        });
        render(<Async />);
        // Act

        // Assert
        const listItemElements = await screen.findAllByRole('listitem', {}, { timeout: 1000 });
        expect(listItemElements).not.toHaveLength(0);
    });
});