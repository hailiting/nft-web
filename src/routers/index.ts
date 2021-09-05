import React from "react";
import { HomeIndex, AdminIndex, AboutUsIndex } from "../page";
const preLink = "/nft-web";
export type RouterType = {
  path: string;
  component: React.LazyExoticComponent<any>;
  root: string[];
  notExect?: boolean;
};

const HomeRouter: RouterType = {
  path: `${preLink}/`,
  component: HomeIndex,
  root: [],
};

const AdminRouter: RouterType = {
  path: `${preLink}/admin`,
  component: AdminIndex,
  root: [],
};
const AboutUsRouter: RouterType = {
  path: `${preLink}/about`,
  component: AboutUsIndex,
  root: [],
};

const Routers: RouterType[] = [HomeRouter, AdminRouter, AboutUsRouter];
export { Routers };
