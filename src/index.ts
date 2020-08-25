/**
 * The different (sub)menus that the APISuite provides.
 */
export enum Menus {
  // Header Anonymous
  HeaderAnonymousMain = 'HEADER_ANONYMOUS_MAIN',
  // Header Authenticated
  HeaderAuthenticatedMain = 'HEADER_AUTHENTICATED_MAIN',
  HeaderAuthenticatedDashboard = 'HEADER_AUTHENTICATED_DASHBOARD',
  HeaderAuthenticatedProfile = 'HEADER_AUTHENTICATED_PROFILE',
  // Footer
  FooterProducts = 'FOOTER_PRODUCTS',
  FooterProfile = 'FOOTER_PROFILE',
  FooterDocumentation = 'FOOTER_DOCUMENTATION',
  FooterTeam = 'FOOTER_TEAM',
  FooterDashboard = 'FOOTER_DASHBOARD',
  FooterLegal = 'FOOTER_LEGAL',
  FooterSupport = 'FOOTER_SUPPORT',
  FooterStatus = 'FOOTER_STATUS'
}

/**
 * A `Section` is an area/section/place anywhere in the portal.
 *
 * These are the different sections that the APISuite portal provides for
 * extensions to inject arbitrary React components.
 */
export enum Sections {
  HomepagePrecontent = 'HOMEPAGE_PRECONTENT'
}

/**
 * A full-page React component with respective routing information.
 */
export type PageEntry = {
  auth?: boolean
  path: string
  exact: boolean
  component: any // TODO React component
}

/**
 * An menu entry that will usually be a link to another page.
 */
export type MenuEntry = {
  label: string
  route: string
  title?: string
}

/**
 * Returns all pages provided by the extension to the APISuite
 * portal.
 */
export type HookPages = () => PageEntry[] | null

/**
 * Returns all [[MenuEntry | menu entries]] that the APISuite
 * should add to the provided [[Menus | menu]].
 */
export type HookMenu = (menu: Menus | string) => MenuEntry[] | null

/**
 * Returns the React component that the APISuite
 * should render in the provided [[Sections | section]].
 */
export type HookSections = (section: Sections | string, props?: object) => any | null

/**
 * The hooks (extension points) that the extension implements.
 */
export type Hooks = {
  menu: HookMenu
  pages: HookPages
  sections: HookSections
}

/**
 * The base extension configuration is optional and has no mandatory properties.
 */
export type ExtensionConfig = {}

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

  static info: {
    name: string
    version: string
  }

  constructor(config?: ExtensionConfig | undefined) {
    this.config = config || {}

    this.hooks = {
      menu: () => null,
      pages: () => null,
      sections: () => null
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
}
