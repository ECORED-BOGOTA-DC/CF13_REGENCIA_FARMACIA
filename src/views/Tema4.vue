<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estilos de vida saludables
    .offset-xl-1.col-xl-9.d-flex.flex-wrap.mb-5(data-aos="fade-left")
      img.col-lg-7.m-auto(src="@/assets/curso/temas/tema4/img-1.jpg" style="max-width: 524px" alt="Imagen decorativa")
      p.col.lg-5.p-4.mb-0.text-white(style="background-color: #7E5EE3") Son una serie de hábitos que dan como resultado a lo que la Organización Mundial de la Salud (OMS) define como: <b>“estado completo de bienestar físico, mental y social”</b>.
        br
        br
        |Ante esto, se podría decir que un individuo con salud, es alguien que no solo tiene ausencia de enfermedad, sino que es una persona feliz, con equilibrio emocional y mental, contribuye a la sana convivencia y minimiza el grado de los factores de riesgo en su vida.
        br
        br
        |A continuación, se proponen algunos hábitos de vida saludable:
    .container-edit-2(data-aos="fade-right")(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-1.svg')})`}")
      .col-lg-10.col-xl-8.mx-auto.py-5
        .titulo-sexto.color-acento-botones
          h5 Figura 4.
          span Hábitos de vida saludable
        img(src="@/assets/curso/temas/tema4/img-2.svg" alt="Muestra imagen con 10 hábitos de vida saludable que se describen parte inferior.")
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.container-edit-2
  margin-right: -3rem
  margin-left: -3rem
  padding-right: 3rem
  padding-left: 3rem
</style>
