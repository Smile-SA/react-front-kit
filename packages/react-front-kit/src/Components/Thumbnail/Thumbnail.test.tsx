import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { Thumbnail } from './Thumbnail';

describe('Thumbnail', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Thumbnail id="test" />);
    expect(container).toMatchSnapshot();
  });
});
