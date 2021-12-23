/**
 * Information about a module's dependency on "special" packages (either part of
 * the go standard library, or generated as part of the current module).
 */
export interface SpecialDependencies {
  /** Whether the jsii runtime library for go is needed */
  readonly runtime: boolean;

  /** Whether the jsii API library for go is ineeded */
  readonly api: boolean;

  /** Whether the package's initialization hook is needed */
  readonly init: boolean;

  /** Whether the internal type aliases package is needed */
  readonly internal: boolean;
}
