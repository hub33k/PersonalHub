import { describe, expect, it } from 'bun:test';
import { RenderContext } from '@/tests/RenderContext';
import { screen } from '@testing-library/react';

const Example = () => {
  return (
    <>
      <p>Example</p>
    </>
  );
};

describe(Example.name, () => {
  it('should pass', async () => {
    // given
    const obj = new TestObject();
    obj.render();

    const p = screen.getByText(/^example/i);

    // when

    // then
    expect(p).toBeTruthy();
  });
});

class TestObject {
  public context = new RenderContext();

  public render(children = <Example />) {
    return this.context.render(children);
  }
}
