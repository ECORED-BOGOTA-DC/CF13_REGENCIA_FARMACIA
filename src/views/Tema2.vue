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
      h2#t_2_2 2.2 Áreas técnicas
    
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
    
    TabsB.color-acento-contenido(style="border: none")
      .py-4.py-md-5(titulo="Requisitos")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-5 Están regulados por el decreto 780 del 2016 de la siguiente manera:
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Debe hacerse por escrito, previa evaluación del paciente y registro de sus condiciones y diagnóstico en la historia clínica, utilizando para ello la Denominación Común Internacional (nombre genérico).
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Solo podrá hacerse por personal de salud debidamente autorizado de acuerdo con su competencia.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Debe ser en letra clara y legible, con las indicaciones necesarias para su administración.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 En idioma español, en forma escrita ya sea por copia mecanográfica, medio electromagnético y/o computarizado.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 No podrá contener enmendaduras o tachaduras, siglas, claves, signos secretos, abreviaturas o símbolos químicos, con la excepción de las abreviaturas aprobadas por el Comité de Farmacia y Terapéutica de la Institución.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Debe permitir la confrontación entre el medicamento prescrito y el medicamento dispensado (en el caso ambulatorio) y administrado (en el caso hospitalario) por parte del profesional a cargo del servicio farmacéutico y del Departamento de Enfermería o la dependencia que haga sus veces.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Debe permitir la correlación de los medicamentos prescritos con el diagnóstico.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 La dosis de cada medicamento debe expresarse en el sistema métrico decimal y en casos especiales en unidades internacionales cuando se requiera.
              li.d-flex
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px")
                p.mb-0 Cuando se trate de preparaciones magistrales, adicionalmente, se debe especificar claramente cada uno de los componentes.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-9.jpg' style="max-width: 610px")

      .py-4.py-md-5(titulo="Prescripción común")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-5 Están regulados por el decreto 780 del 2016 de la siguiente manera:
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 La entrega el médico tratante después de las consultas.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Son elaboradas a mano o digital y tienen un mes de caducidad para ser validadas en el servicio farmacéutico.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-10.jpg' style="max-width: 610px")
              
      .py-4.py-md-5(titulo="Prescripción especial")
        .row
          .col-md-6.mb-4.mb-md-0
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Se utiliza un formato especial prestablecido por el fondo nacional de estupefacientes.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Están impresas en un papel de autocopiado.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Solo pueden diligenciarse a mano y con lapicero negro.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Solo tienen validez por 15 días hábiles a partir de su elaboración.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-10.jpg' style="max-width: 610px")

      .py-4.py-md-5(titulo="Interpretación")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-5 Inicia con la revisión de los datos mostrados a continuación y estipulados en el decreto 780 del 2016. El farmacéutico, posterior a su revisión:
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Está en toda la capacidad de comprender cada uno de los productos farmacéuticos que están allí prescritos y de evidenciar cualquier error que se presente. En caso tal de que esto último suceda, de ser posible debe comunicarse con el médico tratante y/o no dispensar la receta.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Por ningún motivo debe adivinar cualquiera de los productos allí prescritos o alguna de sus características, es decir, como concentración, forma farmacéutica, dosis, etc.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Solo puede dispensar prescripciones médicas escritas, por ningún motivo debe aceptar recetas orales, puesto que debe existir un documento de respaldo, excepto para productos OTC.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-12.jpg' style="max-width: 610px")
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_6 2.6 Alistamiento de productos farmacéuticos

    .col-lg-10.mx-auto.tarjeta.p-4.d-flex.flex-wrap.align-items-center(style="background-color: #F1FBFC")
      img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img-13.svg' style="max-width: 210px")
      p.col-lg.ps-lg-4 Posterior a la recepción de la prescripción, se procede al alistamiento (separación) de los productos farmacéuticos en las cantidades completas recetadas.
        br
        br
        |Por el tema de adherencia al tratamiento y el uso racional de los medicamentos, estos se deben entregar completos.

    p.mb-5 Al realizar la entrega de los productos al usuario o paciente, se le debe proporcionar toda la información necesaria como:

    ul.mb-5
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Riesgos al suspender el tratamiento.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Modo de uso de los dispositivos médicos.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Forma y vía de administración, enfatizando en los que son más complejos de administrar: polvos para reconstituir, comprimidos sublinguales, gotas ópticas y oftalmológicas, óvulos, inhaladores, entre otros; posología, almacenamiento en casa, etc.
    
    .cajon.cajon-edit.color-acento-contenido.col-md-8.col-lg-7.mx-auto.p-4.mb-5(style="background-color: #BFEEF4")
      p(data-aos="fade-right") Debemos tener presente que los medicamentos que no requieren prescripción médica por ser de venta libre, no se pueden recomendar, es decir, cuando el usuario se acerca preguntando por un medicamento para el dolor de cabeza el farmacéutico no puede recomendarle ninguno, muy diferente si llega solicitando uno en específico y pregunta cómo se debe administrar. Siempre se debe hablar al usuario sobre los <b>riesgos de la automedicación. </b>

    p.mb-5 Tengamos en cuenta que el uso racional de los medicamentos es un acto que abarca:

    .d-flex.flex-wrap
      .col-lg-5.d-flex.align-items-center
        .conatiner-offset-3.p-3
          p.mb-3.w-100(data-aos="fade-left") Los productos antes de ser empacados, deben ser enseñados al usuario, confirmado nombre del producto y cantidad entregada, advirtiendo que antes de retirarse del establecimiento debe estar seguro de lo que se le dispensó, porque después de salir de allí no se aceptan devoluciones. En caso de ser a domicilio, el usuario debe realizar la revisión de lo recibido antes que el domiciliario se retire.
            br
            br
            |Por último, se procede al registro y/o facturación de los productos entregados o vendidos en las fuentes implementadas para ello ya sea software, Excel o manual.
      img.col-lg-6(src='@/assets/curso/temas/tema2/img-14.jpg' style="max-width: 714px")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_7 2.7 Fuentes de información
    
    p.mb-5 Toda área de dispensación debe contar con referentes bibliográficos de medicamentos ya sea físicos o digitales que provean al farmacéutico de toda la información necesaria para dar una asesoría al paciente eficaz, completa y veraz, como: 

    ul
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Formulario Terapéutico nacional.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Vademécum de especialidades farmacéuticas.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Información completa de los medicamentos creada por la institución.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
        p.mb-0 Textos farmacológicos.

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
