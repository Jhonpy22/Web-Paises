import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routers/route";

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
// Este cambio es para probar el flujo dev → main
