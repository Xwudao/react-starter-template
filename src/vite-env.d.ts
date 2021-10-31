/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string | undefined | boolean>> {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

//@ts-ignore
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
