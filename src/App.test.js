import { render, screen, waitFor } from '@testing-library/react';
import { user } from '@testing-library/user-event';
import App from './App.js';

test('Show 6 product by default', async () => {
  render(<App />);
  const title = await screen.findAllByRole('heading');
  expect(title).toHaveLength(6);
});

test('Show 6 more product if the user click on load More', async () => {
  render(<App />);
  const button = await screen.findByRole('button', {
    name: /Load More/i,
  });
  user.click(button);

  await waitFor(async () => {
    const title = await screen.findAllByRole('heading');
    expect(title).toHaveLength(12);
  });
});
