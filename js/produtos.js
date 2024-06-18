function btnPlacaDeVideo() {

    var telaProdutos = document.querySelector('.telaGeralProdutos'),
        // Novo HTML que será inserido
        HTMLNovo = '<div class="cardProduto" id="placaDeVideo"> <img src="/images/produtos/Placa de Video.jpg" alt=""><span class="descricao">Placa de Vídeo Zotac NVIDIA GeForce RTX 3060 Ti Twin Edge LHR, 8GB, 14.0 Gbps,GDDR6, DLSS, RayTracing - ZT-A30610E-10MLHR</span><span class="valor">R$ 4.299,90</span><button>Comprar</button></div>  ';

    telaProdutos.innerHTML = HTMLNovo;
}

function btnProcessadores() {

    var telaProdutos = document.querySelector('.telaGeralProdutos'),
        // Novo HTML que será inserido
        HTMLNovo = '<div class="cardProduto"> <img src="/images/produtos/processadores/intel.jpg" alt=""><span class="descricao">Processador Intel Core i7-10700F, Cache 16MB, 2.9GHz (4.8GHz Max Turbo), LGA 1200 - BX8070110700F</span> <span class="valor">R$ 2.059,90</span>      <button>Comprar</button> </div>';

    telaProdutos.innerHTML = HTMLNovo;
}

function btnMemorias() {

    var telaProdutos = document.querySelector('.telaGeralProdutos'),
        // Novo HTML que será inserido
        HTMLNovo = ' <div class="cardProduto"><img src="/images/produtos/memoria ram.jpg" alt=""><span class="descricao">Memória Gamer Husky Gaming, Avalanche,16GB, 3200Mhz, DDR4, CL19 - HGMF008</span><span class="valor">R$ 559,90</span> <button>Comprar</button></div> ';

    telaProdutos.innerHTML = HTMLNovo;
}

function btnPlacaMae() {

    var telaProdutos = document.querySelector('.telaGeralProdutos'),
        // Novo HTML que será inserido
        HTMLNovo = ' <div class="cardProduto"> <img src="/images/produtos/placa mae.jpg" alt=""><span class="descricao">Placa Mãe Asus Prime H510M-E, Intel LGA 1200, microATX, DDR4-90MB17E0-C1BAY0</span><span class="valor">R$ 639,90</span><button>Comprar</button></div>';

    telaProdutos.innerHTML = HTMLNovo;
}

