export default {
  global: {
    componenteFormativo: 'Caracterización de procesos',
    descripcionCurso:
      'La definición de procesos ayuda al entendimiento del funcionamiento de una organización, el análisis, moldeamiento, diagramación y mejora continua son actividades esenciales en la estructura de una empresa que quiere aplicar desde una orden lógico las actividades diarias de una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría general de sistemas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Enfoque de sistemas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Definición de los sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Clasificación de sistemas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sistemas de Información',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Análisis de los procesos a nivel de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Identificar los procesos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Determinar el equipo de trabajo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Generar los diagramas de los procesos de negocio',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Definir la situación actual de cada proceso',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Puntos de mejora',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Nuevo proceso mejorado',
            hash: 't_4_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.7',
            titulo: 'Caso de estudio',
            hash: 't_4_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Bertalanffy, L. (1968). Theory General Systems. ',
    },
    {
      referencia: 'Centro Tic de Andalucía. (2019). El enfoque sistémico. ',
      link:
        'https://www.juntadeandalucia.es/averroes/centros-tic/14002996/helvia/aula/archivos/repositorio/250/271/html/economia/1c/sistemico.htm',
    },
    {
      referencia:
        'Ekon, E. (2020). ¿Qué es un diagrama de procesos y por qué es tan importante para tu empresa? ',
      link: 'https://www.ekon.es/diagrama-procesos-empresa/',
    },
    {
      referencia:
        'ESAN Graduate School of Business. (2019). ¿Qué es el análisis de procesos de negocio y cómo aplicarlo en mi empresa? ',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2019/11/que-es-el-analisis-de-procesos-de-negocio-y-como-aplicarlo-en-mi-empresa/',
    },
    {
      referencia:
        'Espinal, I., Gimeno, A. y González, F. (1998). El enfoque sistémico en los estudios sobre la familia. ',
      link: 'https://www.uv.es/jugar2/Enfoque%20Sistemico.pdf',
    },
    {
      referencia: 'Tamayo. A (1999). Teoría general de sistemas. ',
    },
    {
      referencia:
        'Torres. A (2021). La Teoría General de Sistemas, de Ludwig von Bertalanffy. ',
      link:
        'https://psicologiaymente.com/psicologia/teoria-general-de-sistemas-ludwig-von-bertalanffy',
    },
  ],
  glosario: [
    {
      termino: 'ANSI',
      significado: ' American National Standards Institute.',
    },
    {
      termino: 'Gantt',
      significado: 'Método popularizado por Henry Gantt.',
    },
    {
      termino: 'Holismo',
      significado: 'Capacidad de analizar un componente como un todo.',
    },
    {
      termino: 'Pert',
      significado: ' Program Evaluation Research Task.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Cuando parte de un mensaje de salida se convierte nuevamente en entrada.',
    },
    {
      termino: 'Simulación',
      significado:
        'Corresponde a la posibilidad de conducir experimentos en una computadora.',
    },
    {
      termino: 'Sinergia',
      significado:
        'Cuando varios elementos de una organización actúan de manera concertada.',
    },
    {
      termino: 'Teoría de colas',
      significado:
        'Teoría que estudia los tiempos de espera dentro de un sistema.',
    },
    {
      termino: 'Teoría de comportamientos',
      significado:
        'Orientada al estudio del comportamiento humano en la administración.',
    },
    {
      termino: 'Teoría de juegos',
      significado:
        'Corresponde a la aplicación de un modelo matemático juego para entender la toma de decisiones.',
    },
    {
      termino: 'TGS',
      significado: ' Teoría General de sistemas.',
    },
  ],
  complementario: [
    {
      texto:
        'Saber programas. (2021). Cómo crear un DIAGRAMA de FLUJO en WORD paso a paso 2021. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nJq8A85zNZU',
    },
    {
      texto: 'Lucidchart Software. (2021). Lucichart.com.',
      tipo: 'Página web',
      link: 'https://www.lucidchart.com/pages/es',
    },
    {
      texto:
        'Digignos. (2013). Elaboración de procesos. Sugerencia de una metodología. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-U-RQKJ9KKg&ab_channel=Digignos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Hernán Muñoz Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
