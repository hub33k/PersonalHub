declare module 'bun:test' {
  // NOTE (hub33k): add missing vitest types

  // node_modules/bun-types/test.d.ts line 821; <T = unknown>
  export interface MatchersBuiltin {
    toBeInTheDocument(): void;
    toBeDisabled(): void;

    // toHaveTextContent(): void;
  }
}
