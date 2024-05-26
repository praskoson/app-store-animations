import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import { Header } from "./header";
import { AnimatePresence } from "framer-motion";
import { List } from "./list";
import { Item } from "./item";

function Store() {
  const { id } = useParams();
  const imageHasLoaded = true;

  return (
    <>
      <List />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

const router = createBrowserRouter([
  { path: "/:id", element: <Store /> },
  { path: "/", element: <Store /> },
]);

function App() {
  return (
    <div className="max-w-screen-lg flex-[1_1_100%] px-[25px] py-[45px]">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
