exports.detalle = (req, res) => {
    res.render('detalle', { 
        title: "Detalle del Producto",
        navbar: {
            links: [   { name: "Inicio", href: "/home" },
                { name: "Productos", href: "/productos" },
                { name: "Carrito", href: "/carrito" },
                { name: "Perfil", href: "/perfil" }]
        },
        breadcrumbs: {
            viewAll: "Ver todo",
            category: "Categoría",
            productName: "Frenos de alto rendimiento"
        },
        product: {
            name: "Frenos de alto rendimiento",
            price: "$55",
            rating: "3.5 estrellas",
            reviews: "10 opiniones",
            description: "Mejora la seguridad de tu vehículo con nuestros frenos de alto rendimiento. Diseñados para ofrecer un rendimiento superior en cualquier condición.",
            images: ["/img/placeholder-img.jpg", "/img/placeholder-img.jpg", "/img/placeholder-img.jpg", "/img/placeholder-img.jpg"],
            mainImage: "/img/placeholder-img.jpg",
            shipping: "Envío gratis en compras mayores a $50"
        },
        options: {
            variantLabel: "Variante",
            quantityLabel: "Cantidad",
            selectText: "Seleccionar",
            optionsList: ["Opción uno", "Opción dos", "Opción tres"]
        },
        buttons: {
            login: "Iniciar sesión",
            register: "Registrarse",
            addToCart: "Añadir al carrito",
            buyNow: "Comprar ahora",
            subscribe: "Suscribirse",
            explore: "Explorar",
            moreInfo: "Más información"
        },
        sections: [
            { title: "Detalles", icon: "/img/icon-4.svg", text: "Estos frenos están fabricados con materiales de alta calidad para garantizar durabilidad y rendimiento." },
            { title: "Envío", icon: "/img/image.svg", text: "Los pedidos se procesan en un plazo de 1 a 3 días hábiles." },
            { title: "Devoluciones", icon: "/img/icon-2.svg", text: "Aceptamos devoluciones dentro de los 30 días posteriores a la compra." }
        ],
        features: [
            "Ideal para tuning y personalización de autos.",
            "Compatible con múltiples marcas y modelos de vehículos.",
            "Fácil instalación y mantenimiento para todos los usuarios."
        ],
        additionalInfo: {
            tagline: "Descubre los beneficios de nuestro producto",
            description: "Este producto está diseñado para mejorar el rendimiento de tu vehículo. Fabricado con materiales de alta calidad, garantiza durabilidad y eficiencia.",
            benefits: [
                { icon: "/img/relume-2.svg", text: "Rendimiento mejorado para optimizar la conducción." },
                { icon: "/img/relume-2.svg", text: "Compatibilidad con diversos modelos de autos." },
                { icon: "/img/relume-2.svg", text: "Instalación rápida y sencilla." }
            ]
        },
        footer: {
            newsletter: "Únete a nuestro boletín",
            privacyPolicy: "Al suscribirte, aceptas nuestra Política de Privacidad.",
            rights: "&copy; 2024 - Todos los derechos reservados.",
            footerLinks: [
                { title: "Columna Uno", links: ["Enlace Uno", "Enlace Dos", "Enlace Tres", "Enlace Cuatro", "Enlace Cinco"] },
                { title: "Columna Dos", links: ["Enlace Seis", "Enlace Siete", "Enlace Ocho", "Enlace Nueve", "Enlace Diez"] },
                { title: "Columna Tres", links: ["Enlace Once", "Enlace Doce", "Enlace Trece", "Enlace Catorce", "Enlace Quince"] }
            ]
        }
    });
};