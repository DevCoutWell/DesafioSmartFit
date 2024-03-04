const buscarUnidade = document.getElementById('buscarUnidade');
const cunidfech = document.getElementById("cunidfech");
const sectionDados = document.getElementById("Dados");
const quantEncontrada = document.getElementById("qEncontrada");
const statusLocal = document.getElementById("status");




buscarUnidade.addEventListener("click", async (event) => {

    event.preventDefault();

  //location.reload();

    const resultados = await fetch(`https://test-frontend-developer.s3.amazonaws.com/data/locations.json`).then(response => response.json().then(dados => {
        dados.locations.map(cidade => {
        
            if (cidade.opened === true) {
              

                sectionDados.innerHTML += `<div class="resultados">
                <div class="endereco">
                    <p id="status">Aberto</p>
                    <h4 id="cidade">${cidade.title}</h4>
                    <p id="endereco-completo">${cidade.content}</p>
                </div>
                <div class="resul-img">
                    <img src="assets/imgs/${cidade.mask}-mask.png" alt="">

                    <img src="assets/imgs/${cidade.towel}-towel.png" alt="">

                    <img src="assets/imgs/${cidade.fountain}-fountain.png" alt="">

                    <img src="assets/imgs/${cidade.locker_room}-locker_room.png" alt="">

                </div>

                <div class="resul-horarios">
                    <h3 id="dia-semana">Seg. à Sex.</h3>
                    <p id="hora">06h às 22h</p>
                </div>

            </div>`;



                    console.log("entrou");
                    quantEncontrada.innerHTML = cidade.wp_total;
                }

            if(cidade.opened === false && cunidfech.checked === true){

                sectionDados.innerHTML += `<div class="resultados">
                <div class="endereco">
                    <p id="status">fechado</p>
                    <h4 id="cidade">${cidade.title}</h4>
                    <p id="endereco-completo">${cidade.content}</p>
                </div>`

                statusLocal.classList.add("statusFechado");


            }
            

        });

    }));



    const cidade = document.getElementById("cidade");
    const resultImg = document.getElementsByClassName("resul-img");











});

