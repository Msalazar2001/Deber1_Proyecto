exports.login = (req, res) => {
    res.render('login', { 
        title: "Registro de Usuario",
        navbar: {
            links: [
                { name: "Inicio", href: "/" },
                { name: "Productos", href: "/productos" },
                { name: "Carrito", href: "/carrito" },
                { name: "Perfil", href: "/perfil" }
            ]
        },
        auth: {
            tagline: "Bienvenido",
            heading: "Iniciar sesión",
            description: "Accede a tu cuenta para disfrutar de nuestros servicios.",
            emailLabel: "Correo",
            passwordLabel: "Contraseña",
            termsLabel: "Acepto los Términos",
            submitButton: "Enviar"
        },
        buttons: {  
            login: { text: "Iniciar sesión", href: "/login" },
            register: { text: "Registrarse", href: "/signin" }
        }
    });
};