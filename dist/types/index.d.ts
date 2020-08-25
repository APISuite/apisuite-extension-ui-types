/**
 * The different (sub)menus that the APISuite provides.
 */
export declare enum Menus {
    HeaderAnonymousMain = "HEADER_ANONYMOUS_MAIN",
    HeaderAuthenticatedMain = "HEADER_AUTHENTICATED_MAIN",
    HeaderAuthenticatedDashboard = "HEADER_AUTHENTICATED_DASHBOARD",
    HeaderAuthenticatedProfile = "HEADER_AUTHENTICATED_PROFILE",
    FooterProducts = "FOOTER_PRODUCTS",
    FooterProfile = "FOOTER_PROFILE",
    FooterDocumentation = "FOOTER_DOCUMENTATION",
    FooterTeam = "FOOTER_TEAM",
    FooterDashboard = "FOOTER_DASHBOARD",
    FooterLegal = "FOOTER_LEGAL",
    FooterSupport = "FOOTER_SUPPORT",
    FooterStatus = "FOOTER_STATUS"
}
/**
 * A `Section` is an area/section/place anywhere in the portal.
 *
 * These are the different sections that the APISuite portal provides for
 * extensions to inject arbitrary React components.
 */
export declare enum Sections {
    HomepagePrecontent = "HOMEPAGE_PRECONTENT"
}
/**
 * A full-page React component with respective routing information.
 */
export declare type PageEntry = {
    auth?: boolean;
    path: string;
    exact: boolean;
    component: any;
};
/**
 * An menu entry that will usually be a link to another page.
 */
export declare type MenuEntry = {
    label: string;
    route: string;
    title?: string;
};
/**
 * Returns all pages provided by the extension to the APISuite
 * portal.
 */
export declare type HookPages = () => PageEntry[] | null;
/**
 * Returns all [[MenuEntry | menu entries]] that the APISuite
 * should add to the provided [[Menus | menu]].
 */
export declare type HookMenu = (menu: Menus | string) => MenuEntry[] | null;
/**
 * Returns the React component that the APISuite
 * should render in the provided [[Sections | section]].
 */
export declare type HookSections = (section: Sections | string, props?: object) => any | null;
/**
 * The hooks (extension points) that the extension implements.
 */
export declare type Hooks = {
    menu: HookMenu;
    pages: HookPages;
    sections: HookSections;
};
/**
 * The base extension configuration is optional and has no mandatory properties.
 */
export declare type ExtensionConfig = {};
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
export declare abstract class Extension {
    hooks: Hooks;
    config: {};
    static info: {
        name: string;
        version: string;
    };
    constructor(config?: ExtensionConfig | undefined);
    /**
     * The name of the extension
     */
    get name(): string;
    /**
     * The version of the extension
     */
    get version(): string;
}
