import { describe, expect, it } from 'bun:test';
import { RenderContext } from '@/tests/RenderContext';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreatePost } from './create-post';

describe(CreatePost.name, () => {
  const user = userEvent.setup();

  it('should pass 1', async () => {
    // given
    const obj = new TestObject();
    obj.render();

    const input: HTMLInputElement = screen.getByPlaceholderText(/^title/i);
    expect(input).toBeInTheDocument();

    // screen.debug();
  });

  it('should pass 2', async () => {
    // given
    const obj = new TestObject();
    obj.render();

    const input: HTMLInputElement = screen.getByPlaceholderText(/^title/i);
    expect(input).toBeTruthy();

    await user.click(input);
    await user.type(input, 'test');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('test');

    const submitButton = await screen.findByText(/^submit/i);
    expect(submitButton).toBeTruthy();
    expect(submitButton).not.toBeDisabled();

    await user.click(submitButton);

    // await screen.findByText(/^Submitting.../i);

    // when

    // then
    // screen.debug();
  });
});

class TestObject {
  public context = new RenderContext();

  public render(children = <CreatePost />) {
    return this.context.render(children);
  }
}
