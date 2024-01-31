import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { childrenExampleMock } from '../SummaryBox/SummaryBox.mock';

import { CardList } from './CardList';

describe('CardList', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <CardList>
        {[
          childrenExampleMock,
          childrenExampleMock,
          childrenExampleMock,
          childrenExampleMock,
        ]}
      </CardList>,
    );
    expect(container).toMatchSnapshot();
  });
});
