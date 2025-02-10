exports.home = (req, res) => {
    res.render('home', { 
        title: "Página de Inicio",
        navbar: {
            links: [
                { name: "Inicio", href: "/" },
                { name: "Productos", href: "/productos" },
                { name: "Carrito", href: "/carrito" },
                { name: "Perfil", href: "/perfil" }
            ]
        },
        buttons: {  
            login: { text: "Iniciar sesión", href: "/login" },
            register: { text: "Registrarse", href: "/signin" },
            buy: "Comprar",
            seeMore: "Ver más",
            subscribe: "Suscribirse"
        },
        hero: {
            title: "Descubre las mejores ofertas",
            description: "Encuentra los mejores productos a precios increíbles. No te lo pierdas."
        },
        quality: {
            tagline: "Calidad garantizada",
            title: "Nuestros estándares",
            description: "Ofrecemos productos de la más alta calidad para garantizar tu satisfacción.",
            features: [
                { icon: "/img/relume-3.svg", title: "Soporte al Cliente", description: "Nuestro equipo está disponible para ayudarte." },
                { icon: "/img/relume-2.svg", title: "Envío Rápido", description: "Entrega garantizada en el menor tiempo posible." },
                { icon: "/img/image.svg", title: "Garantía de Satisfacción", description: "Calidad y confianza en cada compra." }
            ]
        },
        benefits: {
            tagline: "Ventajas",
            title: "Descubre los beneficios de comprar con nosotros",
            description: "Precios competitivos y amplia selección de productos.",
            list: [
                { icon: "/img/relume-4.svg", text: "Precios ajustados a tu presupuesto." },
                { icon: "/img/relume-4.svg", text: "Amplia selección de productos." },
                { icon: "/img/relume.svg", text: "Calidad garantizada en cada compra." }
            ]
        },
        contact: {
            tagline: "Contáctanos",
            title: "Estamos aquí para ayudarte",
            description: "Si tienes preguntas, no dudes en escribirnos.",
            methods: [
                { icon: "/img/envelope.svg", title: "Correo", text: "Envíanos un email.", value: "contacto@ejemplo.com" },
                { icon: "/img/phone.svg", title: "Teléfono", text: "Llámanos para más información.", value: "+1 (555) 000-0000" },
                { icon: "/img/map.svg", title: "Ubicación", text: "Visítanos en nuestra tienda.", value: "123 Calle Ejemplo, Ciudad" }
            ]
        },
        footer: {
            newsletter: "Únete a nuestro boletín",
            privacyPolicy: "Al suscribirte, aceptas nuestra Política de Privacidad.",
            rights: "&copy; 2024 - Todos los derechos reservados."
        }
    });
};