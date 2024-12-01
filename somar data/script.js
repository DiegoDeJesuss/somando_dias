// Função para adicionar dias à data selecionada
function adicionarDias(dataSelecionada, diasParaAdicionar) {
    const data = new Date(`${dataSelecionada}T00:00:00`);
    data.setDate(data.getDate() + diasParaAdicionar);
    return data.toLocaleDateString("pt-BR");
  }
  
  // Evento de clique no botão
  document.getElementById("calcularBtn").addEventListener("click", function () {
    const dataSelecionada = document.getElementById("dataSelecionada").value;
  
    // Obter o valor do botão de rádio selecionado
    const diasSelecionados = document.querySelector('input[name="dias"]:checked');
  
    if (!dataSelecionada) {
      document.getElementById("dataEvento").innerText =
        "Por favor, selecione uma data primeiro.";
      return;
    }
  
    // if (!diasSelecionados) {
    //   document.getElementById("dataEvento").innerText =
    //     "Por favor, selecione uma opção de dias.";
    //   return;
    // }
  
    const diasParaAdicionar =  parseInt(diasSelecionados.value);
  
    // Calcular a data futura
    const dataFutura = adicionarDias(dataSelecionada , diasParaAdicionar);
  
    // Atualizar o conteúdo do parágrafo com a data calculada
    document.getElementById("dataEvento").innerText =
      `Evento marcado para: ${dataFutura}`;
  });
  