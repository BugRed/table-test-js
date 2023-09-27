//selecionando as variaveis que vou usar 
var campos =[
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

//adicionando o evento de submit ao botão incluir
document.querySelector('.form').addEventListener('submit', function(event){
    
    //não atualizar a pagina depois de submeter formulariio
    event.preventDefault();
    
    //criando elemento do DOM que ainda não faz parte dele
    var tr = document.createElement('tr');

    //adicionando uma td para cada tr
    campos.forEach(function(campo){
        
        var td = document.createElement('td');
        td.textContent = campo.value;
        //adicionando a td a tr como filha
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value

    //adicionando o texto a nova tr
    tr.appendChild(tdVolume);
    //adicionando tr ao tbody
    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});

