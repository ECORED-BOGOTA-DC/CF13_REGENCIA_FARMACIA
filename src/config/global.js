export default {
  global: {
    componenteFormativo: 'Dispensación y distribución de medicamentos',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia entregar productos farmacéuticos según delegación y normativa de salud, referentes a los dos procesos generales de dispensación y distribución de medicamentos y dispositivos médicos soportados por la resolución 1403 de 2007, con el fin de reconocer su importancia en la preservación de la salud y bienestar de las personas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procesos generales y especiales del servicio farmacéutico',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso de dispensación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'nstalaciones locativas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Áreas técnicas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Talento humano',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Uso racional de los medicamentos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Recepción de la prescripción médica',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Alistamiento de productos farmacéuticos',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Fuentes de información',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manual de procesos y procedimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estilos de vida saludable',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Proceso de distribución de medicamentos y dispositivos médicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Distribución externa',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Distribución interna',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Administración de medicamentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Formas farmacéuticas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Vías de administración de medicamentos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Manejo de residuos y políticas posconsumo',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF13_DU.pdf',
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
  complementario: [
    {
      tema: 'Proceso de dispensación',
      referencia:
        'Hospital Nacional. [Hospital Nacional]. (2020, 6 de febrero). <em>Dispensación correcta de la receta médica</em> [vídeo]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=NsOPkDXeI1Y&ab_channel=HospitalNacional',
    },
    {
      tema: 'Proceso de distribución de medicamentos y dispositivos médicos',
      referencia:
        'UMA. [Universidad Maria Auxiliadora]. (2015, 1 de octubre). <em>Conferencia: el farmacéutico en la dosis unitaria</em> [vídeo]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=WO1F7QeIrlE&ab_channel=UniversidadMariaAuxiliadora',
    },
    {
      tema: 'Proceso de distribución de medicamentos y dispositivos médicos',
      referencia:
        'Velendia, S. [Sofia Velandia]. (2020, 27 de octubre). <em>Sistema de Distribución de Medicamentos en Dosis Unitaria (SDMDU)</em> [vídeo]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=bkEgw-OciAI&ab_channel=SofiaVelandia',
    },
    {
      tema: 'Administración de medicamentos',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). Programas posconsumo.',
      tipo: 'Documento',
      link:
        'https://www.minambiente.gov.co/index.php/component/content/article/28-plantilla-asuntos-ambientales-y-sectorial-y-urbana',
    },
    {
      tema:
        'Ramos y Olivares. (2010). Uso racional de medicamentos: una tarea de todos.',
      referencia:
        'Ramos y Olivares. (2010). Uso racional de medicamentos: una tarea de todos.',
      tipo: 'Documento',
      link:
        'https://www.minsal.cl/portal/url/item/8da19e5eac7b8164e04001011e012993.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acuoso',
      significado:
        'Que es parecido al agua o que posee alguna de sus características.',
    },
    {
      termino: 'Adherencia',
      significado:
        '(adherirse) Mostrar a una persona su conformidad con las ideas o las opiniones de otro.',
    },
    {
      termino: 'Aparcamiento',
      significado:
        'Detener un vehículo colocándolo en un lugar destinado para ello durante cierto tiempo.',
    },
    {
      termino: 'Carro de reanimación',
      significado:
        'Es una unidad móvil dedicada a la resucitación cardiopulmonar (CPR).',
    },
    {
      termino: 'Farmacia satélite',
      significado:
        'Son pequeñas farmacias que están ubicadas en diferentes áreas de atención dentro de los hospitales',
    },
    {
      termino: 'Farmacoterapia',
      significado: 'Es el sinónimo de terapia con medicamentos.',
    },
    {
      termino: 'Fotosensible',
      significado: 'Que es sensible a la acción de la luz.',
    },
    {
      termino: 'Membrana lipoidea',
      significado: 'Membrana grasosa.',
    },
    {
      termino: 'Preparación estéril',
      significado: 'Preparación libre de microorganismos.',
    },
    {
      termino: 'Preparación extemporánea',
      significado:
        'Es una preparación que se lleva a cabo en el momento de su uso porque pierde sus principios activos en poco tiempo.',
    },
    {
      termino: 'Prospecto',
      significado:
        'Es el texto que incluye todos los medicamentos en el envase y que contiene la información para el paciente sobre las características del fármaco.',
    },
    {
      termino: 'SDMDU:',
      significado: 'Sistema de Distribución de Medicamentos en Dosis Unitaria.',
    },
    {
      termino: 'Separata',
      significado:
        'Impresión por separado de un artículo o capítulo publicado en una revista o libro.',
    },
    {
      termino: 'Termolábil',
      significado: 'Sustancia o material sensible al calor.',
    },
  ],
  referencias: [
    {
      referencia:
        'Le, J. (2020). Administración de fármacos. PharmD, MAS, BCPS-ID, FIDSA, FCCP, FCSHP, Skaggs School of Pharmacy and Pharmaceutical Sciences, University of California San Diego',
      link:
        'https://www.msdmanuals.com/es/hogar/f%C3%A1rmacos-o-sustancias/administraci%C3%B3n-y-cin%C3%A9tica-de-los-f%C3%A1rmacos/administraci%C3%B3n-de-los-f%C3%A1rmacos',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). <em>Programas posconsumo.</em>',
      link:
        'https://www.minambiente.gov.co/index.php/component/content/article/28-plantilla-asuntos-ambientales-y-sectorial-y-urbana',
    },
    {
      referencia:
        'Ministerio de salud pública. (s.f). Dispensación de medicamentos. Dirección Provincial de Salud de Santo Domingo de Los Tsáchilas.',
      link:
        'http://instituciones.msp.gob.ec/dps/santo_domingo/images/stories/dispensacion.pdf',
    },
    {
      referencia:
        'MINISTERIO DE PROTECCIÓN SOCIAL, Por la cual se determina el modelo de gestión del servicio farmacéutico, se adopta el manual de condiciones esenciales y procedimientos de dicho servicio y se dictan otras disposiciones. Resolución número 1403. Colombia 2007.',
      link:
        'https://www.invima.gov.co/documents/20143/453029/Resoluci%C3%B3n+1403+de+2007.pdf/6b2e1ce1-bb34-e17f-03ef-34e35c126949',
    },
    {
      referencia:
        'Ministerio de Salud y Protección social, Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Decreto 780. Colombia 2016.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      referencia:
        'Unab. (s.f.). <em>Unidad 5: Dispensación y Distribución de medicamentos y dispositivos médicos.</em>',
      link:
        'http://unab.edupol.com.co/pluginfile.php/7208/mod_resource/content/1/UNIDAD_5%20Dispensaci%C3%B3n%20y%20distribuci%C3%B3n%20de%20medicamentos%20y%20dispositivos%20m%C3%A9dicos.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable de equipo',
          centro: 'Dirección general',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instrucciona',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital.',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander.',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital.',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Andrés Felipe Velandia Espitia',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
