import TestRoutes from "./pages/test";

export default class Routes {
  
  apply(routeHandler) {
  
    const routes = [
      ...TestRoutes
    ];
    
    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
