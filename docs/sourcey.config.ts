import { defineConfig } from "sourcey";

export default defineConfig({
  name: "moxygen",
  prettyUrls: "strip",
  repo: "https://github.com/nilstate/moxygen-docs",
  editBranch: "main",
  editBasePath: "docs",
  theme: {
    colors: {
      primary: "#ea580c",
      light: "#f97316",
      dark: "#c2410c",
    },
  },
  navigation: {
    tabs: [
      {
        tab: "Documentation",
        groups: [
          {
            group: "Getting Started",
            pages: ["introduction", "installation", "cli-reference"],
          },
          {
            group: "Guides",
            pages: ["templates", "example-workflow"],
          },
          {
            group: "Example Output",
            pages: [
              "example-overview",
              "example-bicycle",
              "example-mountainbike",
              "example-racingbike",
              "example-changelog",
            ],
          },
        ],
      },
    ],
  },
  navbar: {
    links: [
      { type: "github", href: "https://github.com/sourcey/moxygen" },
      { type: "npm", href: "https://www.npmjs.com/package/moxygen" },
    ],
  },
  footer: {
    links: [
      { type: "github", href: "https://github.com/sourcey/moxygen" },
    ],
  },
});
