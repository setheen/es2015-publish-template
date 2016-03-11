System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "lib": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "typescript": "npm:typescript@1.8.7"
  }
});
