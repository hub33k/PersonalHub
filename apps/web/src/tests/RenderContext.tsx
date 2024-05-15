import { render } from '@testing-library/react';

export class RenderContext {
  public render(children: JSX.Element) {
    return render(
      <>
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <>{children}</>
      </>,
    );
  }
}
