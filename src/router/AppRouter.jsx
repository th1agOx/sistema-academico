import { Route, Routes } from "react-router-dom";

import Home from '../pages/home';
import Alunos from '../pages/Alunos'
import Declaracao from '../pages/Declaracao'
import Disciplina from '../pages/Disciplina'
import Administrativa from '../pages/Administrativa'

export default function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/alunos" elements={<Alunos/>} />
            <Route path="/disciplina" elements={ <Disciplina/> } />
            <Route path="/declaracao" elements={ <Declaracao/> } />
            <Route path="/administracao" elements={ <Administrativa/> } >
                <Route path="/admin/usuarios" />
                <Route path="/admin/relatorios" />
            </Route>

        </Routes>
    )
}