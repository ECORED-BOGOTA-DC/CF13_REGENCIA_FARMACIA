<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 <b>¿Sabía que la dispensación y distribución de medicamentos y dispositivos médicos son dos de los seis procesos generales del servicio farmacéutico?</b>
          br
          br
          |Se encuentran reglamentados por la resolución 1403 del 2007 y aunque ambos funcionan de manera diferente, tienen una particularidad y es que parten de una prescripción médica otorgada por un médico a un paciente. La entrega de los productos farmacéuticos prescritos se realiza directamente al paciente por medio del proceso de dispensación y a la enfermera responsable de su administración por medio del proceso de distribución. Así mismo cabe mencionar que la efectividad en la terapia medicamentosa de un paciente también está ligada a la correcta administración de los medicamentos.

    p.mb-5(data-aos="fade-right") A continuación, se abordarán diferentes temas relacionados con ambos procesos que permitirán al lector ahondar en las particularidades de cada uno de ellos y comprender que tanto la dispensación como la distribución son actos profesionales propios de los farmacéuticos y son el origen del uso racional de los medicamentos. También se abordarán algunos puntos importantes de la administración de medicamentos que van unidos a toda la información anteriormente estudiada.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oI5R6D2EPnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.text-center.fw-bold ¡Muchos éxitos en este proceso de aprendizaje!
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
