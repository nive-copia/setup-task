import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
  plugins: [nodeResolve(), commonJS({ include: "node_modules/**" })],
};
