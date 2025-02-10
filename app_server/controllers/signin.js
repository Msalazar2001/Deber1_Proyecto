exports.signin = (req, res) => {
    res.render('signin', { 
        title: "Perfil de Usuario",
        navbar: {
            links: [
                { name: "Inicio", href: "/home" },
                { name: "Productos", href: "/productos" },
                { name: "Carrito", href: "/carrito" },
                { name: "Perfil", href: "/perfil" }
            ]
        },
        auth: {  // ✅ Asegurar que auth está definido
            tagline: "Bienvenido",
            heading: "Iniciar sesión",
            description: "Accede a tu cuenta para disfrutar de nuestros servicios.",
            nameLabel: "Nombre",
            emailLabel: "Correo",
            passwordLabel: "Contraseña",
            termsLabel: "Acepto los Términos",
            submitButton: "Enviar"
        },
        user: {
            name: "Usuario Ejemplo"
        },
        profile: {
            tagline: "Perfil",
            heading: "Características Clave de Tu Perfil de Usuario",
            description: "Accede a tu historial de compras y realiza un seguimiento de tus pedidos de manera sencilla."
        },
        sections: [
            { icon: "/img/placeholder-img.jpg", title: "Historial de Compras", description: "Consulta fácilmente todas tus compras anteriores." },
            { icon: "/img/placeholder-img.jpg", title: "Devoluciones y Soporte", description: "Gestiona devoluciones con un solo clic." },
            { icon: "/img/placeholder-img.jpg", title: "Administración de Direcciones", description: "Actualiza tus datos de envío y pago fácilmente." }
        ],
        buttons: {  
            login: "Iniciar sesión",
            register: "Registrarse",
            save: "Guardar",
            help: "Ayuda",
            view: "Ver",
            details: "Detalles",
            edit: "Editar",
            subscribe: "Suscribirse"
        },
        history: {
            tagline: "Historial",
            heading: "Tu Historial de Compras y Seguimiento",
            description: "Accede a un registro detallado de tus compras."
        },
        returns: {
            tagline: "Devoluciones y Soporte",
            heading: "Tu tranquilidad es nuestra prioridad",
            description: "Nuestra sección de devoluciones te permite gestionar fácilmente cualquier inconveniente.",
            actions: [
                { title: "Iniciar Devolución", description: "Comienza el proceso de devolución en pocos pasos." },
                { title: "Atención al Cliente", description: "Estamos aquí para ayudarte con cualquier duda." }
            ]
        },
        preferences: {
            tagline: "Gestión",
            heading: "Administra tus direcciones y métodos de pago",
            description: "Facilita la gestión de tus direcciones y métodos de pago."
        },
        support: {
            tagline: "Soporte",
            heading: "Contáctanos",
            description: "Estamos aquí para ayudarte en tu compra.",
            contacts: [
                { icon: "/img/envelope.svg", title: "Correo", text: "Escríbenos para resolver cualquier duda.", value: "soporte@autopartes.com" },
                { icon: "/img/phone.svg", title: "Teléfono", text: "Llámanos para asistencia inmediata.", value: "+1 (555) 123-4567" },
                { icon: "/img/map.svg", title: "Oficina", text: "Visítanos para atención personalizada.", value: "456 Calle Ejemplo, Ciudad NSW 2000 AU" }
            ]
        },
        footer: {
            newsletter: "Únete a nuestro boletín",
            privacyPolicy: "Al suscribirte, aceptas nuestra Política de Privacidad.",
            rights: "&copy; 2024 Relume. Todos los derechos reservados.",
            links: [
                { title: "Columna Uno", links: ["Enlace Uno", "Enlace Dos", "Enlace Tres", "Enlace Cuatro", "Enlace Cinco"] },
                { title: "Columna Dos", links: ["Enlace Seis", "Enlace Siete", "Enlace Ocho", "Enlace Nueve", "Enlace Diez"] },
                { title: "Columna Tres", links: ["Enlace Once", "Enlace Doce", "Enlace Trece", "Enlace Catorce", "Enlace Quince"] }
            ]
        }
    });
};