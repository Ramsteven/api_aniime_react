import React from 'react'
import {screen, render} from '@testing-library/react'
import Header from "./Header"



describe('Header', () => {
    it('must display a title', () => {
        render(<Header />);
        expect(screen.queryByText(/AnimeList/i)).toBeInTheDocument();
    })
})
