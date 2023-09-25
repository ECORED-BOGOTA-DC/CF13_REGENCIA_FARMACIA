<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Manual de procesos y procedimientos
    .bloque-texto-g.col-lg-9.p-3.p-sm-4.p-md-5.mb-5.offset-lg-1(style="background-color: #8CBCFA")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La resolución 1403 del 2007 en el artículo 9, en cuanto a las buenas prácticas del servicio farmacéutico, normatiza que: 
          br
          br
          |“Las instituciones prestadoras de servicios de salud, establecimientos farmacéuticos y personas autorizadas que realizan actividades y/o procesos del servicio farmacéutico contarán con un conjunto de normas, procesos, procedimientos, recursos, mecanismos de control y documentación, de carácter técnico y/o administrativo, que aseguren el cumplimiento Obligatorio del objeto de la actividad o el proceso respectivo”.  
    p.mb-5(data-aos="fade-right") Dando cumplimiento a ello y a los estándares de calidad exigidos por el Sistema Único de Habilitación del Sistema de Garantía de Calidad de la Atención en Salud (SOGCS), todo establecimiento o servicio farmacéutico tiene la responsabilidad de implementar o ajustar el manual de procesos y procedimientos de dispensación que permita su perfecto desempeño sin que se vea afectado por la rotación del recurso humano.

    p.mb-5(data-aos="fade-right") <b>Contenido del Manual de procesos y procedimientos </b>
      br
      br
      |El manual debe contar como mínimo con la siguiente información:

    ul
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Objetivos: general y específicos.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Alcance y responsables.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Términos y definiciones.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Desarrollo.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Anexos.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Referencias bibliográficas de ser necesario.
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

<style lang="sass"></style>
