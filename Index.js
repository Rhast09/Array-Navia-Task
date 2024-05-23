let book=[]

let books=[
   

    {title:'Medios técnicos audiovisuales y escénicos',
    author:'Mora de la torre, V.',
    genre:'Publicacion digital',
    lenguaje:'Español',
    price:'Gratis',
    Format:'Digital',
    ISBN:'9788428343459',
    description:'La forma de comprender el universo y de representarlo está condicionada por las características humanas de la visión y de la percepción de la luz y el color.',
    status:'Finalizado',
    location:'Armenia-Quindio',
    publication_date:'Febrero 2020',
    editorial:'Paraninfo',
    pages:'359',
    dimensions:'5x8',
    weigth:'20g',
    },
    
    {title:'Realizacion de microformatos de video',
    author:'Mettini Danilo Gabriel',
    genre:'Publicacion digital',
    lenguaje:'Español',
    price:'25000',
    Format:'EPUB',
    ISBN:'9789508442284',
    description:'Los microformatos son posiblemente un emergente del gusto por lo fragmentario propuesto por la cultura postmoderna. ',
    status:'Finalizado',
    location:'Pereira-Quindio',
    publication_date:'Mayo 2022',
    editorial:'Paraninfo',
    pages:'102',
    dimensions:'5x6',
    weigth:'15g',
    },

    {title:'Arduino Curso completo',
    author:'Schmidt, D.',
    genre:'Publicacion digital',
    lenguaje:'Español',
    price:'50000',
    Format:'EPUB',
    ISBN:'9788419444226',
    description:'El principal objetivo de este libro es tratar distintos aspectos prácticos de la programación para la arquitectura Arduino haciendo foco en la optimización de códigos considerando los recursos de Hardware que ofrece la placa Arduino UNO. ',
    status:'Finalizado',
    location:'Medellin-Antioquia',
    publication_date:'Septiembre 2022',
    editorial:'Paraninfo',
    pages:'350',
    dimensions:'10x20',
    weigth:'50g',
    },

    {title:'Excel para ciencia e ingeniería',
    author:'Montes, J. y Ternero, F.',
    genre:'Publicacion digital',
    lenguaje:'Español',
    price:'150000',
    Format:'EBOOK',
    ISBN:'9789587787955',
    description:'Incluso en el improbable caso de que este sea su primer contacto con la aplicación Microsoft® Excel, seguramente ya sabrá que se trata de una aplicación informática perteneciente a la categoría de hojas de cálculo.',
    status:'Finalizado',
    location:'Bogota-Colombia',
    publication_date:'Abril 2022',
    editorial:'Paraninfo',
    pages:'488',
    dimensions:'33x20',
    weigth:'100g',
    },

    {title:'Tu y yo digital',
    author:'López, F',
    genre:'Publicacion digital',
    lenguaje:'Español',
    price:'15000',
    Format:'EBOOK',
    ISBN:'9789587787610',
    description:'La sociedad actual forma parte de Internet de la misma manera que Internet forma parte de ella. Las personas han sido un agente fundamental en la transformación digital.',
    location:'España-Madrid',
    publication_date:'marzo 2022',
    editorial:'Paraninfo',
    pages:'231',
    dimensions:'10x20',
    weigth:'40g',
    },

    {title:'Psychology: Modules for Active Learning',
    author:'Coon, Dennis',
    genre:'Psicologia',
    lenguaje:'Ingles',
    price:'25',
    Format:'EBOOK',
    ISBN:'9780357371596',
    description:'This book contain a lot of metods for understand the mind of the human(Este libro ontiene una cantidad de metodos para entender la mente humana)',
    location:'California-EEUU',
    publication_date:'Abril 2022',
    editorial:'Alphaeditorial ESIC',
    pages:'834',
    dimensions:'30x20',
    weigth:'70g',
    },

    {title:'El jardin de los cerezos',
    author:'Antón Pávlovich Chéjov ',
    genre:'Arte,suspenso',
    lenguaje:'Español',
    price:'65000',
    Format:'EBOOK',
    ISBN:'9788413373935',
    description:'Textos dramaticos de autores hispanoamericanos y españoles ,así como estudios sobre el teatro como genero',
    location:'Alemania',
    publication_date:'Enero 2020',
    editorial:'Alphaeditorial ESIC',
    pages:'117',
    dimensions:'10x8',
    weigth:'20G',
    },

    {title:'Tragedias',
    author:'Esquilo ',
    genre:'Historia,violencia',
    lenguaje:'Español',
    price:'165000',
    Format:'EBOOK',
    ISBN:'9788413373584',
    description:'De los persas que han marchado hacia la tierra de la helade,estos son llamados fieles,guardianes de un palacio opulento lleno de oro',
    location:'Grecia',
    publication_date:'Enero 2020',
    editorial:'Alphaeditorial ESIC',
    pages:'257',
    dimensions:'12x18',
    weigth:'50G',
    },

    {title:'Inteligencia emocional',
    author:'Acosta, J',
    genre:'Psicologico',
    lenguaje:'Español',
    price:'75000',
    Format:'EBOOK',
    ISBN:'9789587785067',
    description:'De los persas que han marchado hacia la tierra de la helade,estos son llamados fieles,guardianes de un palacio opulento lleno de oro',
    location:'Grecia',
    publication_date:'Enero 2020',
    editorial:'Alphaeditorial ESIC',
    pages:'200',
    dimensions:'25x18',
    weigth:'30G',
    },

    {title:'Metodos de investigacion',
    author:'Sambruno, J',
    genre:'Academico',
    lenguaje:'Español',
    price:'175000',
    Format:'EBOOK',
    ISBN:'9789587786552',
    description:'De los persas que han marchado hacia la tierra de la helade,estos son llamados fieles,guardianes de un palacio opulento lleno de oro',
    location:'Dubai',
    publication_date:'Enero 2020',
    editorial:'Alphaeditorial ESIC',
    pages:'189',
    dimensions:'32x28',
    weigth:'60G',
    },


    {title:'Metodos de investigacion',
    author:'Sambruno, J',
    genre:'Academico',
    lenguaje:'Español',
    price:'175000',
    Format:'EBOOK',
    ISBN:'9789587786552',
    description:'De los persas que han marchado hacia la tierra de la helade,estos son llamados fieles,guardianes de un palacio opulento lleno de oro',
    location:'Dubai',
    publication_date:'Enero 2020',
    editorial:'Alphaeditorial ESIC',
    pages:'189',
    dimensions:'32x28',
    weigth:'60G',
    }, 

    {title:'El reto',
    author:'Adan, P',
    genre:'Academico',
    lenguaje:'Español',
    price:'275000',
    Format:'EBOOK',
    ISBN:'9789587783216',
    description:'Si te estás planteando leer este libro es que algo te inquieta. Tienes expectativas, buscas un nuevo trabajo o te aburres en él, y necesitas claves para ponerte en marcha, salir de tu situación, cambiar.',
    location:'Dubai',
    publication_date:'Marzo 2017',
    editorial:'Alfaomega',
    pages:'189',
    dimensions:'32x28',
    weigth:'60G',
    },
    
    {title:'El ejecutivo espartano',
    author:'Galindo, R y Aguilar, A',
    genre:'Academico',
    lenguaje:'Español',
    price:'215000',
    Format:'EBOOK',
    ISBN:'9789587781908',
    description:'En el mundo actual vemos que los negocios y las nuevas generaciones han cambiado el mercado laboral, dando pie a empleados mercenarios',
    location:'Texas-EEUU',
    publication_date:'Febrero 2016',
    editorial:'Alfaomega',
    pages:'135',
    dimensions:'25x18',
    weigth:'30G',
    },

    {title:'El ejecutivo espartano',
    author:'Galindo, R y Aguilar, A',
    genre:'Academico',
    lenguaje:'Español',
    price:'215000',
    Format:'EBOOK',
    ISBN:'9789587781908',
    description:'En el mundo actual vemos que los negocios y las nuevas generaciones han cambiado el mercado laboral, dando pie a empleados mercenarios',
    location:'Texas-EEUU',
    publication_date:'Febrero 2016',
    editorial:'Alfaomega',
    pages:'135',
    dimensions:'25x18',
    weigth:'30G',
    },

    {title:'Emprende y gana',
    author:'Meana, M',
    genre:'Academico',
    lenguaje:'Español',
    price:'160000',
    Format:'EBOOK',
    ISBN:'9789587783896',
    description:'Este libro lo he escrito yo, un chaval que trabaja para una multinacional del sector financiero en Londres.',
    location:'Europa-Londres',
    publication_date:'Julio 2016',
    editorial:'Alfaomega',
    pages:'106',
    dimensions:'28x18',
    weigth:'35G',
    },

    {title:'Planificación y Control de proyectos',
    author:'Serpell, A',
    genre:'Academico',
    lenguaje:'Español',
    price:'65000',
    Format:'EBOOK',
    ISBN:'9789587784862',
    description:'El uso del enfoque de proyectos está cada día más difundido en las empresas y organizaciones tanto públicas como privadas, debido a los continuos desafíos que ellas deben enfrentar.',
    location:'Europa-Reino Unido',
    publication_date:'Febrero 2019',
    editorial:'Alfaomega',
    pages:'250',
    dimensions:'25x15',
    weigth:'25G',
    },

    {title:'Radicalmente',
    author:'Ralero, F',
    genre:'Psicologia',
    lenguaje:'Español',
    price:'95000',
    Format:'EBOOK',
    ISBN:'9789587784510',
    description:'La mente. Ella es la culpable de tus triunfos y también de tus fracasos, por tanto lo mejor que puedes hacer es conocerla y entrenarla.',
    location:'Europa-Reino Unido',
    publication_date:'Octubre 2018',
    editorial:'Ediciones UC',
    pages:'183',
    dimensions:'26x14',
    weigth:'20G',
    },

    {title:'El liderazgo Inspirador ',
    author:'Alas Alas, Raúl Mauricio',
    genre:'Educativo',
    lenguaje:'Español',
    price:'195000',
    Format:'EBOOK',
    ISBN:'9788431346454',
    description:'La mente. Ella es la culpable de tus triunfos y también de tus fracasos, por tanto lo mejor que puedes hacer es conocerla y entrenarla.',
    location:'Europa-Reino Unido',
    publication_date:'Mayo 2022',
    editorial:'Ediciones UC',
    pages:'130',
    dimensions:'28x18',
    weigth:'29G',
    },

    {title:'El contenedor',
    author:'Marí, R, martín, J y De Larrucea, J',
    genre:'Educativo',
    lenguaje:'Español',
    price:'145000',
    Format:'EBOOK',
    ISBN:'9788419109446',
    description:'Este libro reúne todos los conocimientos necesarios para el uso, el transporte y la manipulación del contenedor, la unidad de carga por excelencia en el transporte intermodal y el comercio internacional.',
    location:'Europa-Italia',
    publication_date:'Marzo 2023',
    editorial:'Ediciones UC',
    pages:'300',
    dimensions:'38x18',
    weigth:'29G',
    },

 
    {title:'El contenedor',
    author:'Marí, R, martín, J y De Larrucea, J',
    genre:'Educativo',
    lenguaje:'Español',
    price:'145000',
    Format:'EBOOK',
    ISBN:'9788419109446',
    description:'Este libro reúne todos los conocimientos necesarios para el uso, el transporte y la manipulación del contenedor, la unidad de carga por excelencia en el transporte intermodal y el comercio internacional.',
    location:'Europa-Italia',
    publication_date:'Marzo 2023',
    editorial:'Ediciones UC',
    pages:'300',
    dimensions:'38x18',
    weigth:'29G',
    },

    {title:'Macabros',
    author:'Biernay,C',
    genre:'Violencia',
    lenguaje:'Español',
    price:'165000',
    Format:'EPUB',
    ISBN:'9789563247862',
    description:'Macabros. Historias de asesinos despiadados que intentaron el crimen perfecto, de César Biernay Arriagada, reúne siete crímenes que en distintas fechas estremecieron a la sociedad chilena, debido a lo espeluznantes y a las dificultades que, en cada caso, se presentaron al esclarecerlos.',
    location:'Peru-Latam',
    publication_date:'Mayo 2020',
    editorial:'Ediciones UC',
    pages:'300',
    dimensions:'50x30',
    weigth:'30G',
    },
]
