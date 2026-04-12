/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXComponent: ComponentType<Record<string, unknown>>;
  export const post: {
    title: string;
    subtitle: string;
    meta: string[];
    tags: string[];
    introNote?: {
      label: string;
      body: string;
    };
  };
  export default MDXComponent;
}
