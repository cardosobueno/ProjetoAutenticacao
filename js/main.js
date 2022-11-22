function entrar()
{
    var em = document.getElementById('email').value;
    var psw = document.getElementById('password').value;

    if(em == 'andre' && psw == 'aleatorio')
    {
        alert("Seja Bem-vindo, "+ em);
        location.href="sucesso.html";
    }
    else 
    {
        alert("Erro! Usuário ou senha incorretos");
    }

}