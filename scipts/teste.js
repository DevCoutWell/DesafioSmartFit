const buscarUnidade = document.getElementById('buscarUnidade');
const cunidfech = document.getElementById("cunidfech");
const sectionDados = document.getElementById("dados-Result");
const quantEncontrada = document.getElementById("qEncontrada");
const statusLocal = document.getElementById("status");




buscarUnidade.addEventListener("click", async (event) => {

    event.preventDefault();

    const APIresponse = await fetch(`https://test-frontend-developer.s3.amazonaws.com/data/locations.json`);

    const dados = await APIresponse.json();

    exibirDados(dados);
    console.log(dados)







});

function exibirDados(dados) {



    dados.locations.forEach(element => {






        let towel = element.towel;
        let mask = element.mask;
        let fountain = element.fountain;
        let title = element.title;
        let content = element.content;
        let locker_room = element.locker_room;



        if (element.opened === true) {
            sectionDados.innerHTML += `<div class="resultados">
            <div class="endereco">
            <p id="status">Aberto</p>
                <h4 id="cidade">${title}</h4>
                <p id="endereco-completo">${content}</p>
            </div >
            <div class="resul-img">
                <img src="assets/imgs/${mask}-mask.png" alt="">

                    <img src="assets/imgs/${towel}-towel.png" alt="">

                        <img src="assets/imgs/${fountain}-fountain.png" alt="">

                            <img src="assets/imgs/${locker_room}-locker_room.png" alt="">

                            </div>

                            <div class="resul-horarios">
                                <h3 id="dia-semana">Seg. à Sex.</h3>
                                <p id="hora">06h às 22h</p>
                            </div>

                        </div>`
        };




    });


    quantEncontrada.textContent = dados.total;



};


