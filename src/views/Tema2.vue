<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Enfoque de sistemas
    figure(data-aos="fade-right").mb-5
      img(src='@/assets/curso/img3.png', style="width: 1200px")
    p.mb-5 Un puntal básico unido a los respectivos análisis (simulación, teoría de comportamientos, teoría de colas, teoría de juegos) que se pueden aplicar para la resolución de problemas usando el método científico es el enfoque de sistemas:
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-8.col-lg-5.bg-color4
        img(src='@/assets/curso/img3.svg', style="width: 50px; position: relative; top: -40px; left: 20px;")
        p Se trata de comprender el funcionamiento de una organización u objeto de estudio desde una perspectiva holística e integradora, en donde lo importante son las relaciones entre los componentes. Se llama holismo al punto de vista que se interesa más por el todo que por la suma de las partes. El enfoque sistémico no concibe la posibilidad de explicar un elemento si no es precisamente en su relación con el todo. Metodológicamente, por tanto, el enfoque sistémico es lo opuesto al individualismo metodológico, aunque esto no implique necesariamente que estén en contradicción.
        p.text-center #[span (Centro Tic Junta de Andalucía, 2021).]
      .col-7.col-lg-5.bg-color5
        .titulo-sexto.color-acento-contenido
          p.mb-0 Interrelación con el todo
        figure
          img(src='@/assets/curso/img2.svg', style="width: 350px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
