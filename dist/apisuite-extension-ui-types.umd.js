(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.apisuiteExtensionUiTypes = {}));
}(this, (function (exports) { 'use strict';

  /**
   * The different (sub)menus that the APISuite provides.
   */
  (function (Menus) {
      // Header Anonymous
      Menus["HeaderAnonymousMain"] = "HEADER_ANONYMOUS_MAIN";
      // Header Authenticated
      Menus["HeaderAuthenticatedMain"] = "HEADER_AUTHENTICATED_MAIN";
      Menus["HeaderAuthenticatedDashboard"] = "HEADER_AUTHENTICATED_DASHBOARD";
      Menus["HeaderAuthenticatedProfile"] = "HEADER_AUTHENTICATED_PROFILE";
      // Footer
      Menus["FooterProducts"] = "FOOTER_PRODUCTS";
      Menus["FooterProfile"] = "FOOTER_PROFILE";
      Menus["FooterDocumentation"] = "FOOTER_DOCUMENTATION";
      Menus["FooterTeam"] = "FOOTER_TEAM";
      Menus["FooterDashboard"] = "FOOTER_DASHBOARD";
      Menus["FooterLegal"] = "FOOTER_LEGAL";
      Menus["FooterSupport"] = "FOOTER_SUPPORT";
      Menus["FooterStatus"] = "FOOTER_STATUS";
  })(exports.Menus || (exports.Menus = {}));
  (function (Sections) {
      Sections["HomepagePrecontent"] = "HOMEPAGE_PRECONTENT";
  })(exports.Sections || (exports.Sections = {}));
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
  var Extension = /** @class */ (function () {
      function Extension(config) {
          this.config = config || {};
          this.hooks = {
              menu: function () { return null; },
              pages: function () { return null; },
              sections: function () { return null; }
          };
      }
      Object.defineProperty(Extension.prototype, "name", {
          /**
           * The name of the extension
           */
          get: function () {
              return this.constructor.info.name;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Extension.prototype, "version", {
          /**
           * The version of the extension
           */
          get: function () {
              return this.constructor.info.version;
          },
          enumerable: false,
          configurable: true
      });
      return Extension;
  }());

  exports.Extension = Extension;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=apisuite-extension-ui-types.umd.js.map
