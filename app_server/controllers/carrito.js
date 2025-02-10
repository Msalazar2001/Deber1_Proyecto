exports.carrito = (req, res) => {
    res.render('carrito', { 
        title: "Carrito de Compras",
        navbar: {
            links: [
                { name: "Inicio", href: "/home" },
                { name: "Productos", href: "/productos" },
                { name: "Carrito", href: "/carrito" },
                { name: "Perfil", href: "/Perfil" }
            ]
        },
        buttons: {  
            login: "Iniciar sesión",
            register: "Registrarse"
        },
        checkout: {
            title: "Compra",
            heading: "Tu carrito de compra está listo",
            description: "Aquí puedes revisar los productos seleccionados. Ajusta la cantidad y verifica los precios.",
            updateButton: "Actualizar",
            checkoutButton: "Pagar"
        },
        features: [
            { icon: "/img/relume-2.svg", title: "Ajusta tu compra", description: "Nuestro sistema calcula automáticamente impuestos y costos de envío según tu dirección." },
            { icon: "/img/relume.svg", title: "Transparencia total", description: "Conoce el total de tu compra antes de finalizar el pago." },
            { icon: "/img/image.svg", title: "Opciones de pago seguras", description: "Aceptamos tarjetas, PayPal y transferencias para facilitar tu compra." }
        ],
        payment: {
            heading: "Completa tu compra fácilmente",
            description: "Revisa tu carrito y procede al pago para disfrutar de tus nuevos accesorios para auto.",
            payButton: "Pagar",
            cancelButton: "Cancelar"
        },
        shipping: {
            heading: "Detalles de Envío y Pago",
            description: "Completa tu compra ingresando tu dirección y elige un método de pago seguro.",
            registerButton: "Registrarse",
            termsText: "Al hacer clic en Registrarse, aceptas nuestros Términos y Condiciones."
        },
        support: {
            tagline: "Soporte",
            heading: "Contáctanos",
            description: "Estamos aquí para ayudarte en tu compra.",
            methods: [
                { icon: "/img/envelope.svg", title: "Correo", text: "Escríbenos para resolver cualquier duda.", value: "soporte@autopartes.com" },
                { icon: "/img/phone.svg", title: "Teléfono", text: "Llámanos para asistencia inmediata.", value: "+1 (555) 123-4567" },
                { icon: "/img/map.svg", title: "Oficina", text: "Visítanos para atención personalizada.", value: "456 Calle Ejemplo, Ciudad NSW 2000 AU" }
            ]
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