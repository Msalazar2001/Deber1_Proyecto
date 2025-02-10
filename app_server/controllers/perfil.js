exports.perfil = (req, res) => {
    res.render('perfil', { 
        title: "Perfil de Usuario",
        navbar: {
            links: [
                { name: "Inicio", href: "/home" },
                { name: "Productos", href: "/productos" },
                { name: "Carrito", href: "/carrito" },
                { name: "Perfil", href: "/perfil" }
            ]
        },
        user: {
            name: "Juan Pérez"
        },
        buttons: {  
            login: { text: "Iniciar sesión", href: "/login" },
            register: { text: "Registrarse", href: "/signin" }
        },
        profile: {
            tagline: "Perfil",
            heading: "Características Clave de Tu Perfil de Usuario",
            description: "Accede a tu historial de compras y realiza un seguimiento de tus pedidos de manera sencilla. Además, disfruta de un soporte al cliente eficiente y opciones de devolución flexibles."
        },
        sections: [
            { icon: "/img/placeholder-img.jpg", title: "Historial de Compras y Seguimiento de Pedidos", description: "Consulta fácilmente todas tus compras anteriores." },
            { icon: "/img/placeholder-img.jpg", title: "Devoluciones y Soporte al Cliente", description: "Gestiona devoluciones con un solo clic." },
            { icon: "/img/placeholder-img.jpg", title: "Administración de Direcciones y Métodos de Pago", description: "Actualiza tus datos de envío y pago fácilmente." }
        ],
        history: {
            tagline: "Historial",
            heading: "Tu Historial de Compras y Seguimiento",
            description: "Accede a un registro detallado de tus compras. Consulta los productos adquiridos, las fechas de compra y el estado actual de tus envíos."
        },
        returns: {
            heading: "Devoluciones y Soporte",
            description: "Nuestra sección de devoluciones te permite gestionar fácilmente cualquier inconveniente con tus pedidos. Contacta a nuestro servicio de atención al cliente para recibir asistencia personalizada.",
            actions: [
                { title: "Iniciar Devolución", description: "Comienza el proceso de devolución en pocos pasos y sin complicaciones." },
                { title: "Atención al Cliente", description: "Estamos aquí para ayudarte con cualquier duda o problema que tengas." }
            ]
        },
        preferences: {
            tagline: "Gestión",
            heading: "Administra tus direcciones y métodos de pago",
            description: "Facilita la gestión de tus direcciones y métodos de pago. Añade, edita o elimina información de manera sencilla y rápida."
        },
        footer: {
            newsletter: "Únete a nuestro boletín",
            privacyPolicy: "Al suscribirte, aceptas nuestra Política de Privacidad.",
            rights: "&copy; 2024 - Todos los derechos reservados.",
            links: [
                { title: "Columna Uno", links: ["Enlace Uno", "Enlace Dos", "Enlace Tres", "Enlace Cuatro", "Enlace Cinco"] },
                { title: "Columna Dos", links: ["Enlace Seis", "Enlace Siete", "Enlace Ocho", "Enlace Nueve", "Enlace Diez"] },
                { title: "Columna Tres", links: ["Enlace Once", "Enlace Doce", "Enlace Trece", "Enlace Catorce", "Enlace Quince"] }
            ]
        }
    });
};