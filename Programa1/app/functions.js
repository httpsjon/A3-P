alert('JS OK');

function verifica(){
    const status = localStorage.getItem('usstat')
    if (status !== 'logado'){
        document.body.textContent = "É preciso estar logado para usar este recurso."
        setTimeout(function(){
            document.location.href = "../..";
        }, 3500)
    }
}