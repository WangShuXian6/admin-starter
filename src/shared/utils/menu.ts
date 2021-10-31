import { RouteParams } from "@/routes";

interface Menu {
  key: string;
  title: string;
  icon?: any;
  path?: string;
  children?: Menu[];
}

const filterMenuRoute = (route: RouteParams) => {
  return route.path && route.path.indexOf(":") === -1;
};

const generateMenus = (routerList: RouteParams[]): Menu[] => {
  const mainRoutes = routerList.find((router) => {
    return router.path === "/";
  });
  if (!mainRoutes) return [];
  if (!mainRoutes.children) return [];
  const routes = mainRoutes.children.filter(filterMenuRoute);
  return routes.map((router, index) => {
    const subRoutes = router.children?.filter(filterMenuRoute);
    const subMenus = subRoutes?.map((subRoute, subIndex) => {
      return {
        key:
          `${router.path}${subRoute.path}` ||
          `${String(index)}${String(subIndex)}`,
        title: subRoute.title || "",
        icon: subRoute.icon,
        path: subRoute.path,
      };
    });
    return {
      key: router.path || String(index),
      title: router.title || "",
      icon: router.icon,
      path: router.path,
      children: subMenus || [],
    };
  });
};

export default generateMenus;
