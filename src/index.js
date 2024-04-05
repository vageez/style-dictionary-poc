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

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();
