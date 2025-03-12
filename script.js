/* 
<h2>Cardapio do Dia</h2>
<h3>Segunda-feira</h3>
<section>
        <ul>
        <li>Arroz</li>
        <li>Feijão</li>
        <li>Salada</li>
        </ul>


        <figure>
        <img src="img/image (1).png" alt="feijoada">
        </figure>
</section>
*/
const main= document.querySelector("main");// selecionar  a tag main
main.immerHTML="<h2>cardapio do dia </h2>";
const diaDaSemana= [`domingo`,`segunda-feira`,`terça-feira`,`quarta-feira`,`quinta-feira`,`sexta-feira`,`sabado`]
    const hoje= new Date().getDay();
    //Date informa a data e o getDay()informaqualdos7(0-6)
    const diaAtual= diaDaSemana[hoje]
    alert(diaAtual)