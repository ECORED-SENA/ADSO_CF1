<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Definición de los sistemas
    .row.bg-color6.px-5
      .col-12.my-5
        .row
          .col-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img4.png', style="width: 450px").m-auto
          .col-7
            .row
              .col-12.bg-color7
                p Para Ludwig Von Bertalanffy:
                p.mb-0 “Sistema es un conjunto organizado de elementos que interactúan entre sí con estructura lógica o que son interdependientes, formando un todo complejo, identificable y distinto. Por los elementos de un sistema se entiende no solo su conformación física sino las funciones que estos desempeñan. Algún conjunto de elementos de un sistema puede ser considerado un subsistema si mantienen una relación entre sí que los hace también un conjunto identificable y distinto” (1968).
              .tarjeta.color-primario.p-3.mb-5.bg-color8(data-aos="fade-left")
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/img4.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Teoría General de Sistemas “Ludwig Von Bertalanffy”
                        p.text-small Para conocer un poco más sobre el padre de la Teoría general de sistemas, consulte el siguiente video
                      .col-sm-auto
                        a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=lCm24yPH4Eo" target="_blank")
                          span Ver
                          i.fas.fa-link
        .row.align-items-center.mt-4
          .col-lg-6.mb-4.mb-lg-0
            p.mb-0 Tales sistemas se caracterizan por su capacidad de recepción de elementos los cuales son denominados como entradas, a su vez se pueden tipificar como tipos de energía, información a manera de mensajes, datos y señales también recursos físicos. Estas entradas se someten a un conjunto de actividades que alimentan una serie de acciones que las transforman y como consecuencia se generan unos resultados o salidas; una situación muy interesante se presenta cuando una salida o parte de ella se convierte nuevamente en entrada cuando esto sucede se dice que existe retroalimentación. La retroalimentación ayuda a elevar el grado de perfeccionamiento en las respuestas y en el propio comportamiento del sistema logrando de manera inmediata altos niveles de control, principio básico de la automatización de estos.
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 La retroalimentación
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img5.svg', style="width: 550px").m-auto
    .row.my-5.align-items-center
      .col-lg-6
        p.mb-0 Así mismo, cuando de un subsistema se conocen solo las entradas y las salidas pero no las actividades internas se dice que es una caja negra en ese caso se aconseja utilizar la observación y guiarse por el sentido común para proponer las actividades desde cero que resuelven el mismo problema.
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 Ejemplo de los elementos del sistema
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img6.svg', style="width: 550px").m-auto
    #t_3_1
    .titulo-segundo
      h2 3.1  Clasificación de sistemas
    p.mb-5 Bertalanffy y otros autores posteriores han definido distintas formas de clasificar a los sistemas en función de su conformación estructural y sus funcionalidades. Estas son las clasificaciones más importantes:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 Definiciones de sistemas
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img7.svg', style="width: 950px").m-auto
    p.mb-5 A continuación, se presentan algunos tipos de sistemas:
    .tarjeta.tarjeta--azul.p-4
      SlyderA
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            h3 Sistema, supersistema y subsistemas
            p Los sistemas se pueden agrupar teniendo en cuenta su grado de complejidad, se componen a su vez de distintos niveles de jerarquía en que pueden dividirse y que interactúan entre ellos intercambiando algún tipo de información, de modo que estos al final no son autónomos unos de otros.
            p.mb-0 Si se entiende por sistema un conjunto de partes, podemos hablar de subsistemas para referirse a tales elementos; un ejemplo de ello es: la conformación de una familia como un sistema y cada miembro en ella es un subsistema. El supersistema es el contexto externo que rodea al sistema y en el que éste se encuentra inmerso; en los grupos o comunidades de humanos es identificable con la sociedad.
          .col-lg-5
            figure
              img(src='@/assets/curso/img9.svg', style="width: 450px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            h3 Reales físicos, ideales y abstracciones
            p.mb-0 De acuerdo a su esencia los sistemas se pueden clasificar en reales físicos, como producto del pensamiento ideales y modelos. Los sistemas reales son aquellos que existen físicamente y que pueden ser objeto de observación y por tanto objetos de medición, mientras que los sistemas ideales son las representaciones simbólicas extraídas de la abstracción que produce el pensamiento y el lenguaje que se traducen en diseños y modelos. Las abstracciones y sus correlaciones pretenden representar características reales e ideales aquí es importante tener en cuenta el conjunto de requerimientos, solicitudes, la definición de límites con las cuales se pretende llegar  a los objetivos finales.
          .col-lg-5
            figure
              img(src='@/assets/curso/img10.svg', style="width: 450px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            h3 De la naturaleza, artificiales y mixtos
            p Cuando un sistema está inmerso o corresponde únicamente al funcionamiento de la naturaleza, como lo es un lago, un río, la selva, el cuerpo humano, los planetas  o las galaxias, entonces hay que referirse a ellos como sistemas naturales. Por el contrario, los sistemas artificiales son aquellos que emergen de la creación del hombre es decir como productos de la acción humana; dentro de este tipo de sistema podemos encontrar los construidos por el hombre aviones, trenes, maquinarias  de transformación de las energías incluso de transformación de la información tangibles e intangibles. .
            p.mb-0 Los sistemas mixtos se dan por la combinación de elementos naturales y artificiales. Cualquier entorno de orden físico que sufre alteraciones dadas por el ser humano, como lo son los pueblos, las ciudades, los ríos en donde se construyen represas, es considerado un sistema mixto; el grado de participación de elementos naturales y artificiales varía en cada caso concreto en proporciones diferentes.
          .col-lg-5
            figure
              img(src='@/assets/curso/img11.svg', style="width: 450px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            h3 Cerrados y abiertos
            p.mb-0 Torres (2021) argumenta: “El criterio principal que define a un sistema es el grado de interacción con el supersistema y otros sistemas. Los sistemas abiertos intercambian materia, energía y/o información con el entorno que los rodea, adaptándose a éstos e influyendo en él. En cambio, los sistemas cerrados se encuentran teóricamente alejados de las influencias ambientales; en la práctica se habla de sistemas cerrados cuando están altamente estructurados y la retroalimentación es mínima, puesto que ningún sistema es completamente independiente de su suprasistema”.
          .col-lg-5
            figure
              img(src='@/assets/curso/img12.svg', style="width: 450px").m-auto
    separador
    #t_3_2
    .titulo-segundo
      h2 3.2 Sistemas de Información
    p.mb-5 A continuación, se presenta un breve significado de sistemas de información:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5
      .col-auto.bg-color9
        p.mb-0 Datos e Información
    p.mb-5 Estos términos datos e información tienden a confundirse, pero a la luz de los sistemas que estamos tratando en este apartado vale la pena definirlos:
    .row
      .col-lg-6(data-aos="fade-right")
        .row
          .col-12.bg-color10
            img(src='@/assets/curso/img3.svg', style="width: 50px; position: relative; top: -40px; left: 20px;")
            p.text-center #[span La definición de dato]
            p Un dato no es otra cosa que una representación simbólica de alguna situación o suceso, sin ningún sentido semántico, describiendo un hecho concreto. O lo que es lo mismo, sin transmitir mensaje ninguno, un ejemplo de dato podría ser una letra o un hecho.
            p.mb-5 #[span Según Deusto (2019)]
        img(src='@/assets/curso/img13.svg').img-style
      .col-lg-6(data-aos="fade-left")
        .row
          .col-12.bg-color10
            img(src='@/assets/curso/img3.svg', style="width: 50px; position: relative; top: -40px; left: 20px;")
            p.text-center #[span La definición de Información]
            p La información se define como un conjunto de datos los cuales son adecuadamente procesados, para que de esta manera, puedan proveer un mensaje que contribuya a la toma de decisiones a la hora de resolver un problema o afrontar una situación cualquiera en la que se requiera de la toma de decisiones de cualquier tipo.
            p.mb-4 #[span Según Deusto (2019)]
        img(src='@/assets/curso/img14.svg').img-style

</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
