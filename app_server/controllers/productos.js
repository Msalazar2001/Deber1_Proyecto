exports.productos = (req, res) => {
    res.render('productos', { 
        title: "Nuestros Productos",
        navbar: {
            links: [
                { name: "Inicio", href: "/home" },
                { name: "Productos", href: "/productos" },
                { name: "Carrito", href: "/carrito" },
                { name: "Perfil", href: "/perfil" }
            ]
        },
        hero: {
            tagline: "Calidad",
            title: "Productos",
            description: "Explora nuestra amplia gama de accesorios para autos."
        },
        products: [
            { image: "/img/placeholder-img.jpg", name: "Frenos de alto rendimiento", color: "Rojo", price: 55, href: "/detalle"},
            { image: "/img/placeholder-img.jpg", name: "Luces LED", color: "Blanco", price: 55, href: "/detalle" },
            { image: "/img/placeholder-img.jpg", name: "Filtro de aire", color: "Sport", price: 55, href: "/detalle" },
            { image: "/img/placeholder-img.jpg", name: "Escape deportivo", color: "Cromado", price: 55, href: "/detalle" },
            { image: "/img/placeholder-img.jpg", name: "Suspensión ajustable", color: "Negro", price: 55, href: "/detalle" }
        ],
        quality: {
            tagline: "Calidad",
            title: "Características Clave de Nuestros Productos",
            description: "Nuestros productos están diseñados para ofrecer durabilidad y rendimiento excepcionales. Cada accesorio es compatible con una amplia gama de modelos de vehículos, asegurando una experiencia óptima.",
            features: [
                { icon: "/img/relume.svg", title: "Durabilidad y Resistencia", description: "Fabricados con materiales de alta calidad para una larga vida útil." },
                { icon: "/img/relume-3.svg", title: "Compatibilidad con Diversos Modelos", description: "Nuestros accesorios son versátiles y fáciles de instalar." },
                { icon: "/img/relume-2.svg", title: "Instalación Sencilla y Rápida", description: "Diseñados para que cualquier usuario pueda instalarlos sin complicaciones." }
            ]
        },
        benefits: {
            tagline: "Beneficios",
            title: "Descubre los beneficios de nuestros productos",
            description: "Al elegir nuestros productos, garantizas calidad y durabilidad. Además, contamos con un amplio stock de repuestos para tu comodidad.",
            list: [
                { title: "Garantía de Calidad", description: "Nuestros productos están respaldados por una sólida garantía de calidad." },
                { title: "Atención Personalizada", description: "Nuestro equipo está listo para ayudarte en cada paso de tu compra." }
            ]
        },
        faqs: [
            { question: "¿Cómo realizar un pedido?", answer: "Selecciona los productos y sigue las instrucciones para completar la compra." },
            { question: "¿Cuáles son los métodos de pago?", answer: "Aceptamos tarjetas de crédito, débito y PayPal. Todos los pagos son seguros." },
            { question: "¿Cómo se envían los productos?", answer: "Los productos se envían a través de mensajerías confiables con número de seguimiento." },
            { question: "¿Cuál es el tiempo de entrega?", answer: "Depende de tu ubicación. Generalmente, los pedidos se entregan entre 3 y 7 días hábiles." },
            { question: "¿Puedo devolver un producto?", answer: "Sí, aceptamos devoluciones dentro de los 30 días. El producto debe estar en su estado original." }
        ],
        buttons: {
            login: "Iniciar sesión",
            register: "Registrarse",
            viewAll: "Ver todo",
            buy: "Comprar",
            explore: "Explorar",
            contact: "Contáctanos",
            subscribe: "Suscribirse"
        },
        footer: {
            newsletter: "Únete a nuestro boletín",
            privacyPolicy: "Al suscribirte, aceptas nuestra Política de Privacidad.",
            rights: "&copy; 2025 - Todos los derechos reservados."
        }
    });
};