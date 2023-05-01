<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso de dispensación

    .col-xl-7.offset-2.d-flex.flex-wrap
      img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/img-1.svg' style="max-width: 130px;")
      p.col-md.ps-md-4 El proceso general de recepción de medicamentos y dispositivos médicos a nivel normativo, está reglamentado por la resolución 1403 del 2007 en el capítulo II - PROCEDIMIENTOS PARA LOS PROCESOS GENERALES – numeral 5 y es definido como la entrega de uno o más medicamentos a un paciente y la información sobre su uso adecuado.
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Instalaciones locativas
    
    p.mb-5 <b>La resolución 3100 del 2009</b> define los procedimientos y condiciones de habilitación de los servicios en salud, normativa a la que debe acogerse todo servicio farmacéutico para poder ser habilitado. En ese orden de ideas, el artículo 3 de la misma resolución determina los requisitos que deben cumplir los prestadores de servicios de salud para el ingreso y la permanencia en el Sistema Único de Habilitación del Sistema Obligatorio de Garantía de Calidad de la Atención en Salud (SOGCS) Estos requisitos son:

    ul.mb-5
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Capacidad técnico-administrativa.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Suficiencia patrimonial y financiera.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Capacidad tecnológica y científica.
    
    .tarjeta.p-3.col-xl-10.mx-auto.mb-5(style="background: linear-gradient(0deg, rgba(129,209,250,1) 0%, rgba(126,94,227,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/icono-pdf.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco(data-aos="fade")
              p Es importante saber que todo servicio o establecimiento farmacéutico debe acogerse a los requisitos determinados por la resolución 1403 del 2007 - Capítulo II - título I - numeral 1.1 - condiciones locativas.
                br
                br
                |La información específica en relación a dichas condiciones puede consultarla en el siguiente PDF.
            .col-sm-auto(data-aos="fade-left")
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo1_Resolucion_1403_2007.pdf')" target="_blank")
                span(style="color: black !important") Descargar
                i.fas.fa-file-download(style="color: black !important")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 Áreas técnicas
    
    p.mb-5 Para los establecimientos farmacéuticos como los Depósitos de Drogas y las Agencias de Especialidades Farmacéuticas, establecimientos farmacéuticos minoristas como las Farmacias-Droguerías y las Droguerías, y servicios farmacéuticos hospitalarios de alta, mediana y baja complejidad, las áreas están determinadas por la resolución 1403 del 2007.
      br
      br
      |A continuación se describen dichas áreas:
    
    .tarjeta.p-4.p-lg-5.mb-5(style="background-color: #F2EEFC")
      SlyderA.slyder-a-edit(tipo="b")
        .row
          .col-md-5
            p.mb-5.fw-bold Depósitos de drogas
            p En la imagen se muestran sus áreas.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-2.png' style="max-width: 660px")
        
        .row
          .col-md-5
            p.mb-5.fw-bold Agencias de especialidades farmacéuticas
            p Para estas se aplican las mismas disposiciones mencionadas a los depósitos de drogas, con excepción del reenvase de materias primas, pues no lo tienen autorizado.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-3.png' style="max-width: 660px")
        
        .row
          .col-md-5
            p.mb-5.fw-bold Farmacias - droguerías
            p En la imagen se muestran las áreas que la conforman. Adicionalmente se debe tener en cuenta:
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Para las preparaciones magistrales se debe contar con un área para el almacenamiento de las materias primas.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 El área de cuarentena se divide en I naranja y II negra para el almacenamiento adecuado de los productos y evitar confusiones.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 El área de almacenamiento debe estar segregada por clase de productos, es decir, no se pueden mezclar medica-mentos con dispositivos y/o con fitoterapéuticos, etc.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 El área que aparece en la imagen como “material reciclable” está mal nombrada, su nombre correcto es área de manejo y disposición de residuos; allí deben ir los residuos bien segregados y separados por container de acuerdo con la normatividad vigente.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-4.png' style="max-width: 660px")
        
        .row
          .col-md-5
            p.mb-5.fw-bold Droguerías
            p Las áreas son las mismas mencionadas para farmacias-droguerías, excepto la de preparaciones magistrales ya que las droguerías no están autorizadas para tenerla
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-4.png' style="max-width: 660px")

        .row
          .col-md-5
            p.mb-5.fw-bold Servicios farmacéuticos hospitalarios de baja complejidad
            p Este servicio debe contar las áreas mostradas en la imagen.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-5.png' style="max-width: 660px")

        .row
          .col-md-5
            p.mb-5.fw-bold Servicios farmacéuticos hospitalarios de mediana y alta complejidad
            p Además de las áreas mencionadas para el servicio farmacéutico hospitalario de baja complejidad, el servicio farmacéutico hospitalario de mediana y alta complejidad, debe tener las siguientes áreas adicionales:
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-6.png' style="max-width: 660px")
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Talento humano
    
    .d-flex.flex-wrap.col-lg-10.mx-auto.mb-5
      img.col-lg-8(src='@/assets/curso/temas/tema2/img-7.jpg' style="max-width: 714px")
      .col-lg-4.d-flex.align-items-center
        .conatiner-offset-2.p-3
          p.mb-3.w-100(data-aos="fade-left") A nivel formativo, todo establecimiento o servicio farmacéutico debe contar con el recurso humano idóneo, con los conocimientos, habilidades y competencias propias para la realización de las actividades o procesos que se realicen.
            br
            br
            |Directamente, en el proceso de dispensación, la información al paciente acerca del uso adecuado de los medicamentos o dispositivos médicos está a cargo del Químico Farmacéutico o el Tecnólogo en Regencia de Farmacia.

    p.mb-5 En caso tal que la dispensación la realice un Técnico en Servicios Farmacéuticos, este se deberá limitar solo a ofrecer información sobre:

    ul.ps-lg-5
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0  Condiciones de almacenamiento.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Forma adecuada de reconstituir medicamentos que lo requieran.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Medición de la dosis.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Como se debe administrar el medicamento y cuidados que se deben tener, y la importancia a la adherencia del tratamiento .

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4 Uso racional de los medicamentos
    
    p.mb-5 En caso tal que la dispensación la realice un Técnico en Servicios Farmacéuticos, este se deberá limitar solo a ofrecer información sobre:

    .cajon.cajon-edit.color-acento-contenido.col-md-8.col-lg-7.mx-auto.p-4.mb-5(style="background-color: #BFEEF4")
      p(data-aos="fade-right") La Organización Mundial de la Salud (OMS), en 1985 define que hay Uso Racional de los Medicamentos (URM) cuando:
        br
        br
        |“Los pacientes reciben la medicación adecuada a sus necesidades clínicas, en las dosis correspondientes a sus requisitos individuales, durante un período de tiempo adecuado y al menor costo posible para ellos y para la comunidad”.
    p.mb-5 Tengamos en cuenta que el uso racional de los medicamentos es un acto que abarca:

    ol.lista-ol.lista-ol--separador.col-lg-10.mx-auto
      li
        span.text-bold 1.
        | La prescripción correcta de los medicamentos por parte del médico.
      li
        span.text-bold 2.
        | La entrega oportuna de medicamentos eficaces, seguros y de calidad, almacenados, dispensados y administrados adecuadamente y con la mejor relación costo-beneficio.
    
    p.mb-5 El uso racional de los medicamentos fomenta que el cuidado de la salud sea con calidad. A continuación se presentan las buenas prácticas que el paciente debe aplicar para el uso racional de los medicamentos.
    
    .container-edit-1(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.svg')})`}")
      .col-lg-10.mx-auto.mb-5
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          p.mb-0.text-small Buenas prácticas del paciente para el USO RACIONAL DE MEDICAMENTOS
        p.text-center En <span style="font-weight: bold; color: #00BCD4">2010</span>, la OMS calculó que <span style="font-weight: bold; color: #00BCD4">más de la mitad de los medicamentos</span> se prescriben, dispensan o venden de forma inapropiada, y que la mitad de los pacientes <span style="font-weight: bold; color: #00BCD4">no los toman correctamente.</span>
      .col-lg-4.col-xl-3
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 1
          p.mb-0.ps-3 Evita adquirir medicamentos sin receta.
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 2
          p.mb-0.ps-3 Informar al médico todos los tratamientos que se estén tomando antes de iniciar el nuevo; ya sean homeopáticos, vitamínicos o remedios herbolarios.
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 3
          p.mb-0.ps-3 No modificar la dosis indicada por el médico tratante.
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 4
          p.mb-0.ps-3  Si está embarazada o amamantando, consultar al médico antes de tomar medicamentos.
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 5
          p.mb-0.ps-3 NO recomiende a otros consumir medicamentos que haya utilizado.
      img.col-lg-4.d-none.d-lg-flex.px-lg-4(src="@/assets/curso/temas/tema2/img-8.svg")
      .col-lg-4.col-xl-3
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 6
          p.mb-0.ps-3 Terminar el tratamiento como lo indica el médico en la receta.
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 7
          p.mb-0.ps-3 No automedicarse, agregar o remplazar medicamentos al tratamiento ya establecido por el médico.
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 8
          p.mb-0.ps-3 Mencionar al médico cualquier malestar o síntoma que aparezca después de tomar los medicamentos.
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 9
          p.mb-0.ps-3 Almacenar los medicamentos lejos de una fuente de calor, humedad o luz intensa.
        .d-flex.align-items-center.mb-4
          .container-pill
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
            span 10
          p.mb-0.ps-3 Revisar la caducidad del medicamento en el envase antes de utilizarla.
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_5 2.5 Recepción de la prescripción médica
    
    p.mb-5 Es el proceso de verificación y control que se le realiza al documento (receta o fórmula), entregada por el paciente. A continuación, se describen sus elementos:
    
</template>

<script>
export default {
  name: 'Tema2',
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
.container-edit-1
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin-left: -3rem
  margin-right: -3rem
  padding-right: 3rem
  padding-left: 3rem
  background-position: bottom
  background-repeat: no-repeat
  padding-top: 3rem
  padding-bottom: 3rem
  .container-pill
    position: relative
    min-width: 19px
    img
      max-width: 19px !important
      width: 100%
    span
      position: absolute
      top: 4px
      left: 5px
      font-weight: bold
</style>
