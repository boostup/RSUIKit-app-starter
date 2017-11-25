import React from "react"
import ReactDOM from "react-dom"
import { Catalog, pageLoader } from "catalog"
import UnderConstruction from './UnderConstruction'

const catalogTitle = "RSUIKit Starter App";
const markdownLoader = page => pageLoader(() => import(`./${page}.md`));
const jsxLoader = page => pageLoader(() => import(`./${page}.jsx`));

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: markdownLoader("intro")
  },
  {
    path: "/dev-status",
    title: "Development status",
    content: markdownLoader("dev-status")
  },
  {
    path: "/reqs",
    title: "Requirements",
    content: markdownLoader("reqs")
  },
  {
    path: "/get-started",
    title: "Get started",
    content: markdownLoader("install")
  },
];

ReactDOM.render(
  <Catalog title={catalogTitle} pages={pages} imports={{UnderConstruction}}/>,
  document.getElementById("catalog")
);
