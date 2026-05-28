import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

import fs from "node:fs";
import path from "node:path";

const PROJECT_ROOT = import.meta.dirname;

// =============================================================================
// Manus Debug Collector
// =============================================================================

const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function writeToLogFile(source: string, entries: unknown[]) {
  if (!entries?.length) return;

  ensureLogDir();

  const logPath = path.join(LOG_DIR, `${source}.log`);

  const lines = entries.map((entry) => {
    return `[${new Date().toISOString()}] ${JSON.stringify(entry)}`;
  });

  fs.appendFileSync(logPath, `${lines.join("\n")}\n`);
}

function vitePluginManusDebugCollector() {
  return {
    name: "manus-debug-collector",

    configureServer(server: any) {
      server.middlewares.use("/__manus__/logs", (req: any, res: any, next: any) => {
        if (req.method !== "POST") {
          return next();
        }

        let body = "";

        req.on("data", (chunk: any) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const payload = JSON.parse(body);

            if (payload.consoleLogs) {
              writeToLogFile("browserConsole", payload.consoleLogs);
            }

            if (payload.networkRequests) {
              writeToLogFile("networkRequests", payload.networkRequests);
            }

            if (payload.sessionEvents) {
              writeToLogFile("sessionReplay", payload.sessionEvents);
            }

            res.writeHead(200, {
              "Content-Type": "application/json",
            });

            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.writeHead(400, {
              "Content-Type": "application/json",
            });

            res.end(JSON.stringify({
              success: false,
              error: String(e),
            }));
          }
        });
      });
    },
  };
}

// =============================================================================
// VITE CONFIG
// =============================================================================

export default defineConfig({
base: "./",
  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
    vitePluginManusDebugCollector(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },

  envDir: PROJECT_ROOT,

  root: path.resolve(PROJECT_ROOT, "client"),

  build: {
    outDir: path.resolve(PROJECT_ROOT, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
});
