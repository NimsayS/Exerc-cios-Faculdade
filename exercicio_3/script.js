const consultarCEP = async () => {
    const cepInput = document.getElementById('cepInput');
    const resultadoDiv = document.getElementById('resultado');
    const cep = cepInput.value.trim();

    
    if (cep.length !== 8 || isNaN(cep)) {
        resultadoDiv.innerHTML = "Insira um CEP válido com 8 dígitos";
        return;
    }

    try {
 
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const data = await response.json();

        if (data.erro) {
            resultadoDiv.innerHTML = "CEP não encontrado";
        } else {
            resultadoDiv.innerHTML = `
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
        }
    } catch (error) {
        resultadoDiv.innerHTML = "Erro ao consultar o CEP";
        console.error(error);
    }
};