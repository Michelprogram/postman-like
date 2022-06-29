import type { TabParameter } from "@/types/index";

export default [
  {
    type: "Headers",
    descritpion: "Let the client and the server pass additional information.",
    icons: "fa-book-open",
  },
  {
    type: "Authorization",
    descritpion:
      "HTTP provides a general framework for access control and authentication",
    icons: "fa-address-card",
  },
  {
    type: "Query",
    descritpion:
      "Is a part of a URL that assigns values to specified parameters",
    icons: "fa-gear",
  },
  {
    type: "Body",
    descritpion: "null",
    icons: "fa-sitemap",
  },
] as TabParameter[];
