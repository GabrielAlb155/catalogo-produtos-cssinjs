import styled from "styled-components";

const Card = styled.div`
  width: 280px;
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const NomeProduto = styled.h2`
  color: #212529;
  font-size: 22px;
  margin-bottom: 12px;
`;

const PrecoProduto = styled.p`
  color: #198754;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BotaoCarrinho = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  color: #ffffff;

  background-color: ${({ adicionado }) =>
    adicionado ? "#198754" : "#6c757d"};

  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    filter: brightness(0.92);
  }

  &:focus-visible {
    outline: 3px solid #0d6efd;
    outline-offset: 3px;
  }
`;

function CardProduto({ nome, preco, adicionado = false }) {
  return (
    <Card>
      <NomeProduto>{nome}</NomeProduto>

      <PrecoProduto>
        {preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </PrecoProduto>

      <BotaoCarrinho adicionado={adicionado}>
        Adicionar ao carrinho
      </BotaoCarrinho>
    </Card>
  );
}

export default CardProduto;