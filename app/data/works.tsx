const WorksData = [
  {
    Nombre: "E-commerce Store",
    Img: "/img/work/work-ecommerce/work-ecommerce.png",
    Img1: "/img/work/work-ecommerce/work-ecommerce1.png",
    Img2: "/img/work/work-ecommerce/work-ecommerce2.png",
    Img3: "/img/work/work-ecommerce/work-ecommerce3.png",
    ProyectoDescripcion:
      "Aplicación web de e-commerce desarrollada con Next.js. Permite al usuario navegar productos, filtrarlos por categoría, ordenarlos por precio, ver detalles individuales y gestionarlos dentro de un carrito persistente.",
    Tecnologias: "Next.js, TypeScript, TailwindCSS, Zustand, FakeStoreAPI",
    TecnologiaDescripcion:
      "Next.js con App Router se utiliza para el ruteo de páginas dinámicas. Zustand gestiona el estado global del carrito. TailwindCSS permite estilos utilitarios y clases personalizadas con sistema de temas. Se conecta a la API pública FakeStoreAPI para obtener los productos.",
    Rol:
      "Diseño y desarrollo completo del frontend, incluyendo estructura de rutas, consumo de API, lógica de filtrado y ordenamiento, interfaz responsive, y animaciones de interacción.",
    Funcionalidades: [
      "Listado de productos con imagen, precio y puntuación",
      "Filtro por categoría (men, women, joyería, tecnología)",
      "Ordenamiento por precio ascendente/descendente",
      "Carrito con contador, aumento/disminución de cantidad y borrado por ítem",
      "Página de detalle del producto con información completa",
      "Mensaje visual al completar una compra",
      "Diseño 100% responsive para desktop y mobile",
    ],
    Enlace: "https://tu-enlace-deploy.com",
  },
  {
    Nombre: "Weather App",
    Img: "/img/work/work-weather/work-weather.png",
    Img1: "/img/work/work-weather/work-weather1.png",
    Img2: "/img/work/work-weather/work-weather2.png",
    Img3: "/img/work/work-weather/work-weather3.png",
    ProyectoDescripcion:
      "Aplicación web del clima desarrollada con Next.js. Permite al usuario buscar una ciudad y visualizar el clima actual, pronóstico extendido, mapa de ubicación, y datos meteorológicos detallados con íconos animados personalizados.",
    Tecnologias: "Next.js, TypeScript, TailwindCSS, React Leaflet, OpenWeatherMap API, Meteocons",
    TecnologiaDescripcion:
      "Se utiliza Next.js con App Router para el enrutamiento y rendering. TailwindCSS para estilos utilitarios y responsive. React Leaflet muestra un mapa interactivo con coordenadas. OpenWeatherMap API provee datos del clima actual y pronóstico extendido. Meteocons ofrece íconos SVG animados y personalizados. TypeScript asegura el tipado fuerte en todos los componentes.",
    Rol:
      "Desarrollo completo del frontend, conexión con APIs, gestión de estados locales, manipulación dinámica de datos del clima, integración de íconos animados, diseño responsive, y visualización geográfica.",
    Funcionalidades: [
      "Búsqueda de clima por ciudad (soporta nombres compuestos)",
      "Visualización del clima actual con íconos animados personalizados",
      "Pronóstico extendido de 5 días (filtrado por hora específica)",
      "Datos detallados: temperatura, sensación térmica, humedad, presión, nubes, visibilidad y viento",
      "Mapa de ubicación centrado con marcador usando Leaflet",
      "Estilos modernos con sombras internas y gradientes usando TailwindCSS",
      "Diseño 100% responsive adaptado para mobile y desktop",
    ],
    Enlace: "https://tu-enlace-deploy.com"
  }
  
];

export default WorksData;
