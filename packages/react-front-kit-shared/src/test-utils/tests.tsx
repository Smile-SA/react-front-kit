import type {
  Queries,
  RenderOptions,
  RenderResult,
  queries,
} from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

import { render } from '@testing-library/react';

import { Provider } from '../3-custom/Provider/Provider';

export function renderWithProviders<
  Q extends Queries = typeof queries,
  Container extends DocumentFragment | Element = HTMLElement,
  BaseElement extends DocumentFragment | Element = Container,
>(
  ui: ReactElement,
  renderOptions: RenderOptions<Q, Container, BaseElement> = {},
): RenderResult<Q, Container, BaseElement> {
  function Wrapper({ children }: { children: ReactNode }): ReactElement {
    return <Provider>{children}</Provider>;
  }
  return render<Q, Container, BaseElement>(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
}
