<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Procesos generales y especiales del servicio farmacéutico
    p.mb-5(data-aos="fade-right") Dentro del servicio farmacéutico, los procesos se clasifican en:
    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="Generales" :icono="require('@/assets/curso/temas/tema1/t-1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Selección de medicamentos y dispositivos médicos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Adquisición de medicamentos y dispositivos médicos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Recepción de medicamentos y dispositivos médicos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Almacenamiento de medicamentos y dispositivos médicos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Dispensación de medicamentos y dispositivos médicos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Distribución de medicamentos y dispositivos médicos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Participación en grupos interdisciplinarios (comités).
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Información y educación al paciente y la comunidad sobre el uso adecuado de los medicamentos y dispositivos médicos.
              li.d-flex
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px")
                p.mb-0 Destrucción o desnaturalización de medicamentos y dispositivos médicos.
        
          .col-md-6(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema1/img-1.jpg' style="max-width: 610px" alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Especiales" :icono="require('@/assets/curso/temas/tema1/t-2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Atención farmacéutica.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Farmacovigilancia.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Preparaciones: magistrales, extemporáneas, estériles.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Nutriciones parenterales.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Mezcla de medicamentos oncológicos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Adecuación y ajuste de concentraciones para cumplir con las dosis prescritas.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Reempaque.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Reenvase.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Participación en programas relacionados con medicamentos y dispositivos médicos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Realización o participación en estudios sobre el uso de medicamentos y dispositivos médicos, demanda insatisfecha, farmacoepidemiología, farmacoeconomía, uso de antibióticos, farmacia clínica y cualquier tema relacionado de interés para el paciente, el servicio farmacéutico, las autoridades y la comunidad.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Monitorización de medicamentos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Preparaciones extemporáneas, control, dispensación y distribución de radio-fármacos.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Investigación clínica.
              li.d-flex.align-items-start
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Preparación de guías para la dación o aceptación de donaciones de medicamentos y dispositivos médicos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-2.jpg' style="max-width: 610px" alt="Imagen decorativa")

    .tarjeta.p-3.col-xl-10.mx-auto.mb-5(style="background: linear-gradient(0deg, rgba(129,209,250,1) 0%, rgba(126,94,227,1) 100%);")(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/icono-pdf.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              p Con el propósito de tener claro qué son, cómo funcionan y demás información de cada uno de los procesos generales y especiales del servicio farmacéutico, se propone ingresar a Resolución 1403 de 2007 allí en el capítulo II - hoja 44 encontrará los procedimientos para los procesos generales y en el capítulo III - hoja 57 los procedimiento para los procesos especiales: 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo1_Resolucion_1403_2007.pdf')" target="_blank")
                span(style="color: black !important") Descargar
                i.fas.fa-file-download(style="color: black !important")
    p.mb-0(data-aos="fade-right") Luego de la lectura de los capítulos y teniendo claros los temas, analice y reflexione sobre cuáles procesos aplican para cada uno de los establecimientos y servicios farmacéuticos.
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

<style lang="sass"></style>
