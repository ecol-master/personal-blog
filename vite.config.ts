import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypePrettyCode from "rehype-pretty-code";
import tailwindcss from "@tailwindcss/vite";

const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx({ rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]] }), tailwindcss()],
});
