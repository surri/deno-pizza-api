import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "denon run --allow-read --allow-env --allow-net app.ts",
      desc: "run app.ts file",
    },
    dev: {
      cmd: "denon run --watch --allow-read --allow-env --allow-net app.ts",
      desc: "watch app.ts file",
    },
  },
};

export default config;
