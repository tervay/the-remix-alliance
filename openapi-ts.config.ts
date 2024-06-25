import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input:
    "https://raw.githubusercontent.com/the-blue-alliance/the-blue-alliance/py3/src/backend/web/static/swagger/api_v3.json",
  output: {
    path: "app/api/",
    format: "biome",
  },
  // client: "@hey-api/client-fetch",
  client: "fetch",
});
