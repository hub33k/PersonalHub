// https://github.com/zertosh/invariant
// https://github.com/alexreardon/tiny-invariant
// https://github.com/epicweb-dev/invariant

// biome-ignore lint/suspicious/noExplicitAny: off
export function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}
