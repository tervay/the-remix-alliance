/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TBA_AUTH_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
