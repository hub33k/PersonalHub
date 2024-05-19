import { describe, expect, it } from 'bun:test';
import { env } from '@/env.mjs';
import { RenderContext } from '@/tests/RenderContext';
import { useUser } from '@clerk/nextjs';
import { screen } from '@testing-library/react';
import { useEffect, useState } from 'react';

const Example = () => {
  const [user, setUser] = useState('');
  const u = useUser();

  useEffect(() => {
    fetch(`${env.API_URL}/example`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.name);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <p>Example</p>
      <p data-testid="user">{user}</p>
      {u.isSignedIn && <p>{u.user?.fullName}</p>}
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

    const user = await screen.findByTestId('user');
    expect(user.innerHTML).toBe('John Maverick');
  });
});

class TestObject {
  public context = new RenderContext();

  public render(children = <Example />) {
    return this.context.render(children);
  }
}
