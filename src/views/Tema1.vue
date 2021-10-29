<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Teoría general de sistemas
    .row.mb-5
      .col-12.bg-color1
        .row.mb-0.mb-lg-5
          .col-lg-6.px-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img1.png', style="width: 650px")
          .col-lg-6
            .row
              .col-12.bg-color2
                  p Es un campo de la ciencia que pretende examinar las propiedades que definen a los sistemas; es decir, categorías formadas por partes interrelacionadas que llevan al cumplimiento de una acción u objetivo.
                  p.mb-0 Desde el punto de vista histórico las primeras contribuciones a este campo y su definición vienen de la teoría general de sistemas de Ludwig von Bertalanffy. Este modelo ha perdurado como herramienta para la aplicación del método científico y sigue siendo utilizado como apoyo fundamental en el análisis de sistemas, organizaciones incluso para grupos humanos entre otros usos.
            p.bg-color3 Desde la biología Karl Ludwig von Bertalanffy (1968) #[span “propone la teoría general de sistemas como un instrumento amplio que se aplica y es común su uso para la resolución de problemas hoy en día y en todas las áreas del saber”].
        .row.align-items-center.pt-0.pt-lg-5.pb-4
          .col-lg-6.mb-4.mb-lg-0
            p.mb-0 Esta teoría se constituyó como un nuevo aporte dentro del conjunto de paradigmas científicos para el abordaje de problemas que se basan en la correspondencia entre los elementos que conforman los sistemas. Antes de esta propuesta se pensaba que los sistemas desde el punto de vista de su conformación global se asemejaban a la sumatoria de sus elementos integrantes y que podían ser entendidos disgregándolos para realizar un estudio individual de cada componente; el pensamiento de Bertalanffy presenta objeciones a tales creencias.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img1.svg', style="width: 650px")
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img2.png', style="width: 650px")
      .col-lg-6
        p.mb-0 Desde sus inicios, la teoría general de sistemas se ha utilizado en diferentes áreas de la ciencia, la ingeniería, las matemáticas, la biología, la política, las ciencias sociales, las ciencias de la computación, la economía y otras ciencias exactas y sociales, primordialmente en el marco del análisis de las correlaciones que se presentan en sus componentes y su interoperabilidad.
  
</template>

<script>
export default {
  name: 'Tema1',
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
