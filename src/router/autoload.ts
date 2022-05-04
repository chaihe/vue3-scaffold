import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.globEager('../layouts/*.vue')
const views = import.meta.globEager('../views/**/*.vue')
console.log(views);


function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, view]) => {
    const route = getRouteByView(file, view)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

function getChildrenRoutes(route: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, view]) => {
    if (file.includes(`../views/${route.name as string}`)) {
      const route = getRouteByView(file, view)
      routes.push(route)
    }
  })
  return routes
}

function getRouteByView(file: string, layout: { [key: string]: any }) {
  console.log(file, layout);
  // console.log(file.split('/').pop()?.split('.')[0]);
  // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name);
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: layout.default
  } as RouteRecordRaw

  return route
}

export default getRoutes() 
