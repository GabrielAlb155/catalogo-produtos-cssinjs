import styled from "styled-components";
import CardProduto from "./components/CardProduto";

const Pagina = styled.main`
  min-height: 100vh;
  padding: 40px 20px;
  background: #f4f6f8;
  font-family: Arial, sans-serif;
`;

const Titulo = styled.h1`
  margin-bottom: 12px;
  color: #212529;
  text-align: center;
  font-size: 32px;
`;

const Descricao = styled.p`
  margin-bottom: 36px;
  color: #6c757d;
  text-align: center;
`;

const ListaProdutos = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 24px;
`;

function App() {
  return (
    <Pagina>
      <Titulo>Catálogo de Produtos</Titulo>

      <Descricao>
        Confira nossos produtos e preços.
      </Descricao>

      <ListaProdutos>
        <CardProduto
          nome="Fone Bluetooth"
          preco={149.90}
          adicionado={false}
        />

        <CardProduto
          nome="Teclado Mecânico"
          preco={279.90}
          adicionado={true}
        />

        <CardProduto
          nome="Mouse Gamer"
          preco={99.90}
          adicionado={false}
        />
      </ListaProdutos>
    </Pagina>
  );
}

export default App;