module.exports = {
  tba: {
    input: {
      target:
        "https://raw.githubusercontent.com/the-blue-alliance/the-blue-alliance/py3/src/backend/web/static/swagger/api_v3.json",
    },
    output: {
      target: "./app/api/query/",
      client: "react-query",
      mode: "split",
      baseUrl: "https://www.thebluealliance.com/api/v3/",
      override: {
        mutator: {
          path: "./app/lib/api/orvalCustomInstance.ts",
          name: "useCustomInstance",
        },
      },
    },
  },
  tbaAxios: {
    input: {
      target:
        "https://raw.githubusercontent.com/the-blue-alliance/the-blue-alliance/py3/src/backend/web/static/swagger/api_v3.json",
    },
    output: {
      target: "./app/api/axios/",
      client: "axios-functions",
      mode: "split",
      baseUrl: "https://www.thebluealliance.com/api/v3/",
      override: {
        mutator: {
          path: "./app/lib/api/orvalCustomInstance.ts",
          name: "useCustomInstance",
        },
      },
    },
  },
};
