import StyleDictionary from "style-dictionary-utils";

const config = {
  source: ["tokens/**/*tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};

StyleDictionary.registerTransform({
  name: "transform/strToNumber",
  type: `value`,
  matcher: (token) => token?.$type === "strToNumber",
  transitive: true,
  transformer:
    () =>
    ({ $value }) =>
      Number($value),
});

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();
