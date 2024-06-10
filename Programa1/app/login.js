function changeScreen() {

    var screen1 = document.getElementById("screen1");
    var screen2 = document.getElementById("screen2");

    if (screen1.style.display === "none") {
        screen1.classList.remove("fade-out");
        screen1.style.display = "flex";
        screen2.classList.add("fade-out");
        screen2.style.display = "none";

    } else {
        screen2.classList.remove("fade-out");
        screen2.style.display = "flex";
        screen1.classList.add("fade-out");
        screen1.style.display = "none";
    }

}


function login() {
    const cpf = document.getElementById("cpf_id").value
    const data = document.getElementById("data_id").value
    const resp = document.getElementById("formBox")

    const formData = new FormData()

    formData.append("cpf", cpf)
    formData.append("data", data)
    fetch("http://localhost/Programa1/api/index.php", {
        method: "POST",
        mode: "no-cors",
        body: formData
    })

    .then(response => response.json())

    .then(data => {

        localStorage.setItem('usstat', data.logd)

        localStorage.setItem('usstid', data.usid)

        localStorage.setItem('usname', data.usnm)
        
        localStorage.setItem('usdata', data.data)

        resp.textContent = data.msgn + "Carregando...";

        setTimeout(function(){

            document.location.href = "./app/home";

        }, 3000)

    })

    .catch(error => {

        console.log("Erro no processamento", error)

        resp.textContent = "Usuário não encontrado no sistema!"

    })

}


function register() {

    const cpf = document.getElementById("cpf_id").value

    const nome = document.getElementById("nome_id").value

    const data = document.getElementById("data_id").value

    const resp = document.getElementById("formBox")


    const formData = new FormData()

    formData.append("cpf", cpf)

    formData.append("nome", nome)

    formData.append("data", data)

    

    fetch("http://localhost/Programa1/api/index.php", {

        method: "POST",

        mode: "no-cors",

        body: formData

    })

    .then(response => response.json())

    .then(data => {

        localStorage.setItem('usstat', data.logd)

        localStorage.setItem('usstid', data.usid)

        localStorage.setItem('usname', data.usnm)

        localStorage.setItem('usmail', data.mail)

        resp.textContent = data.msgn + "Carregando...";

        setTimeout(function(){

            document.location.href = "./app/home";

        }, 3000)

    })

    .catch(error => {

        console.log("Erro no processamento", error)

        resp.textContent = "Erro ao cadastrar usuário!"

    })

}