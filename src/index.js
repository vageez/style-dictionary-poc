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

/**
 *
 * CUSTOM TRANSFORM EXAMPLE
 * JSON SCHEMA
 *
  {
    "test": {
      "small": { "$type": "strToNumber", "$value": "12" },
      "med": { "$type": "strToNumber", "$value": "14" },
      "large" : { "$value": "{test.small}" },
      "xlarge" : { "$value": "{test.med}" }
    }
  }
  *
 */

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
