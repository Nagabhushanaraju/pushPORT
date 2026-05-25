import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { expect, describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the initial route (Home component) successfully', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // We expect the layout text to be in the document
    expect(screen.getByText('Alex Evans')).toBeInTheDocument();
  });

  it('navigates correctly when a route link is clicked', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Initial check
    expect(screen.getByText('Alex Evans')).toBeInTheDocument();

    // Find the Projects link
    const projectsLinks = screen.getAllByRole('link', { name: /projects/i });
    expect(projectsLinks.length).toBeGreaterThan(0);

    // Click the desktop projects link
    await user.click(projectsLinks[0]);

    // Check that Projects page content is rendered
    expect(await screen.findByText('Building at the')).toBeInTheDocument();
    expect(screen.getByText('edge of possible')).toBeInTheDocument();
  });
});
