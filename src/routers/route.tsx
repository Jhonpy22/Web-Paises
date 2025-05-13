import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import Home from "../features/pages/Home/Home";
import PaisCreate from "../features/pages/pais-create/PaisCreate";
import PaisUpdate from "../features/pages/pais-update/PaisUpdate";
import PaisDetails from "../features/pages/pais-detail/PaisDetails";
import PaisRemove from "../features/pages/pais-delete/PaisDelete";
import Navbar from "../features/layout/Navbar/Navbar";


const rootRoute = createRootRoute({
    component: () => (
        <>
            <Navbar />
            <Outlet /> {/* Aquí se renderizan las páginas */}
            
        </>
    ),
});

const homeRoute = createRoute({
    path: "/",
    getParentRoute: () => rootRoute,
    component: Home,
});

const createRoutePais = createRoute({
    path: "/crear",
    getParentRoute: () => rootRoute,
    component: PaisCreate,
});

const detailRoutPais = createRoute({
    path:"/detalle",
    getParentRoute:() => rootRoute,
    component: PaisDetails
})

const updateRoutePais = createRoute({
    path: "/editar",
    getParentRoute: () => rootRoute,
    component: PaisUpdate,
});

const removeRoutePais = createRoute({
    path: "/eliminar",
    getParentRoute:()=> rootRoute,
    component: PaisRemove,
})

const routeTree = rootRoute.addChildren([
    homeRoute,
    createRoutePais,
    updateRoutePais,
    detailRoutPais,
    removeRoutePais,
]);

export const router = createRouter({ routeTree });
