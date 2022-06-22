import TabelaRecados, { recados } from "../shared/TabelaRecados";
import { Link } from "react-router-dom";

export default function CampeosCopa() {
  const CampeosCopa: recados[] = [
    {
      itemCol1: "Brasil",
      itemCol2: "6",
    },
    {
      itemCol1: "Alemanha",
      itemCol2: "4",
    },
    {
      itemCol1: "Argentina",
      itemCol2: "2",
    },
  ];

  return (
    <>
      <h1 className="text-center">Campeões do Mundo</h1>
      <TabelaRecados
        titleCol1="Pais"
        titleCol2="Quantidade"
        tableBody={CampeosCopa}
      />
      <Link to="/">voltar para home</Link>
    </>
  );
}
