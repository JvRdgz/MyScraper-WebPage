document.getElementById('facebook-login-btn').addEventListener('click', function() {
    handleFacebookLogin();
});

function handleFacebookLogin() {
    // Inicia sesión con Facebook
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Usuario autenticado con Facebook');
            // Aquí puedes añadir cualquier lógica adicional después de iniciar sesión con Facebook
        } else {
            console.error('Error al iniciar sesión con Facebook:', response);
        }
    }, { scope: 'email' }); // Puedes ajustar los permisos según tus necesidades
}
