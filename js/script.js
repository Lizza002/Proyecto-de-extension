// INTERFAZ DE PROYECTO
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
        target.addEventListener('click', () => {
            content.forEach(c => {
                c.classList.remove('active')
            })
            const t = document.querySelector(target.dataset.target)
            t.classList.add('active')
        })
    })
    // ALERTA DE REGISTRADO 
document.getElementById('boton1').onclick = function() {
        alert('Has registrado exitosamente');
    }
    //INGRESAR

/*Roles
1: Adm
2: Usuario*/

/*function ObtenerListaUsuarios() {
    var ListaUsuarios = JSON.parse(localStorage.getItem('ListaUsuariosLs'));

    if (ListaUsuarios == null) {
        ListaUsuarios == [
            //numero de cedula, contrasena
            ['1', 'Nombre', 'Apellido', '4567898', 'administrador', '1'],
            ['2', 'Nombre', 'Apellido', '5086078', 'usuario', '2']
        ]
    }
    return ListaUsuarios;
}

function validarCredenciales(pcedula, pcontrasena) {
    var ListaUsuarios = ObtenerListaUsuarios();
    var bacceso = false;

    for (var i = 0; i < ListaUsuarios.length; i++) {
        if (pcedula == ListaUsuarios[i][3] && pcontrasena == ListaUsuarios[i][4]) {
            bacceso = true
            sessionStorage.setItem('usuarioactivo', ListaUsuarios[i][1] + ' ' + ListaUsuarios[i][2]);
            sessionStorage.setItem('rolusuarioactivo', ListaUsuarios[i][5])
        }
    }
    return bacceso;
}


//Interfaz inicio sesion 
document.querySelector('#btnIngresar').addEventListener('click',
    iniciarSesion);

function iniciarSesion() {
    var scedula = '';
    var scontrasena = '';
    var bacceso = false;

    scedula = document.querySelector('#cedula').value;
    scontrasena = document.querySelector('#contrasena').value;


    bacceso = validarCredenciales(scedula, scontrasena);

    if (bacceso == true) {
        ingresar();
    }
}

function ingresar() {
    var rol = sessionStorage.getItem('rolusuarioactivo');
    switch (rol) {
        case '1':
            window.location.href = '../paginas/Adm-Home.html';

            break;
        case '2':
            window.location.href = '../paginas/R-Home.html';
            break;


            window.location.href = "../paginas/contincorrecta.html";

            break;
    }
}*/


/*LO QUE DEBE IR EN VEZ DEL LINK DEL INGRESAR
<input type="image" src="imagenes/Trazado 5.png" id="btnIngresar">*/