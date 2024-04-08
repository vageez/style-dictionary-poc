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
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    ios: {
      transformGroup: "ios",
      buildPath: "build/ios/",
      files: [
        {
          destination: "StyleDictionaryColor.h",
          format: "ios/colors.h",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionaryColor.m",
          format: "ios/colors.m",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionarySize.h",
          format: "ios/static.h",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
        {
          destination: "StyleDictionarySize.m",
          format: "ios/static.m",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },
  },
};

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();
