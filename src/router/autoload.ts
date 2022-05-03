import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.globEager('../layouts/*.vue')
console.log(layouts);

Object.entries(layouts).forEach(([name, layout]) => {
  const route = getRouteByLayout(name, layout)
})

function getRouteByLayout(name: string, layout: { [key: string]: any }) {
  console.log(name, layout);
}

const layoutRoutes = [] as RouteRecordRaw[]

export default layoutRoutes 
