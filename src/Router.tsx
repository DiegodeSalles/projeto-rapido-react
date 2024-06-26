import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import CriarUsuario from "./pages/CriarUsuario";
import { ListarUsuarios } from "./pages/ListarUsuarios";
import { ListarPostagens } from "./pages/ListarPostagens";
import { CriarPostagem } from "./pages/CriarPostagem";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<CriarUsuario />} />
        <Route path="/usuarios" element={<ListarUsuarios />} />
        <Route path="/postagens" element={<ListarPostagens />} />
        <Route path="/criar_postagem" element={<CriarPostagem />} />
      </Route>
    </Routes>
  );
}
