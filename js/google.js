function handleGoogleSignIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn({ prompt: 'select_account' }).then(function() {
        console.log('Usuario autenticado con Google');
        // Aquí puedes añadir cualquier lógica adicional después de iniciar sesión con Google
    }).catch(function(error) {
        console.error('Error al iniciar sesión con Google:', error);
    });
}

// Escucha el evento click del botón de Google e inicia sesión
document.getElementById('google-signin-btn').addEventListener('click', function() {
    // Inicia sesión con Google
    handleGoogleSignIn();
});

// Función que se llama cuando la API de Google Sign-In se ha cargado
function onGoogleScriptLoad() {
    // Configuración de la API de Google Sign-In
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'TU_CLIENT_ID.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            scope: 'profile email'
        }).then(function(auth2) {
            console.log('La API de Google Sign-In se ha inicializado correctamente');
        }).catch(function(error) {
            console.error('Error al inicializar la API de Google Sign-In:', error);
        });
    });
}

// Llama a la función onGoogleScriptLoad cuando la API de Google Sign-In se haya cargado
onGoogleScriptLoad();
