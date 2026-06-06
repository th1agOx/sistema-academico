import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Sistema Acadêmico</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/alunos">Alunos</Link>
        <Link to="/disciplina">Disciplinas</Link>
        <Link to="/administrativa">Administrativa</Link>
        <Link to="/declaracao">Declarações</Link>
      </nav>
    </header>
  );
}