import { renderToString } from 'react-dom/server';

import { App } from '../../src/App';

describe('App', () => {
  it('renders the default title', () => {
    expect(renderToString(<App />)).toContain('test-host-2-fe');
  });

  it('renders a custom title', () => {
    expect(renderToString(<App title="custom" />)).toContain('custom');
  });
});
