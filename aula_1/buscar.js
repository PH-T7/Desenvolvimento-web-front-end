function buscarCEPv2(){
       const cep = document.getElementById('cep').value;
       const url = `https://viacep.com.br/ws/${cep}/json/`;

       const xhr = new XMLHttpRequest();
       xhr.open('GET', url, true);

       xhr.onload = function() {
            if (xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                document.getElementById('resultado').innerText = JSON.stringify(data, null, 2);
            } else {
                console.error('Erro na requisição:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Erro de rede.');
        };
       xhr.send();
}