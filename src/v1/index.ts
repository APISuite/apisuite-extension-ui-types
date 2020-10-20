import { Hooks, ExtensionParams } from '..'

export const protocolVersion = '1'

export * from '..'

/**
 * All extensions must inherit from this base `Extension` class. It encapsulates
 * and provides all the functionality that the APISuite Portal needs to interact
 * with any extension.
 *
 * Example usage:
 *
 * ```typescript
 * import { Extension } from "apisuite-extension-ui-types";
 * import hooks from "./hooks";
 * import configHelper from "./helpers/config";
 * import { name, version } from "../package.json";
 *
 * class MyExtension extends Extension {
 *   static info = {
 *     name,
 *     version,
 *   };
 *
 *   hooks = hooks;
 *
 *   constructor(config?: {}) {
 *     super(config);
 *     configHelper.set(config);
 *   }
 * }
 *
 * export default MyExtension;
 * ```
 */
export abstract class Extension {
  public hooks: Hooks
  public config: {}
  public core: {}

  static info: {
    name: string
    version: string
    protocolVersion: string
  }

  constructor({ core, config }: ExtensionParams) {
  // constructor(config?: ExtensionConfig) {
    this.config = config || {}
    this.core = core || {}

    this.hooks = {
      menu: () => null,
      pages: () => null,
      sections: () => null,
    }
  }

  /**
   * The name of the extension
   */
  get name(): string {
    return (this.constructor as typeof Extension).info.name
  }

  /**
   * The version of the extension
   */
  get version(): string {
    return (this.constructor as typeof Extension).info.version
  }

  /**
   * The version of the extension
   */
  get protocolVersion(): string {
    return (this.constructor as typeof Extension).info.protocolVersion
  }
}
