<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Proceso de distribución de medicamentos y dispositivos médicos
    p(data-aos="fade-right") En general, es la entrega de los medicamentos y dispositivos médicos a los pacientes y/o usuarios de los establecimientos o servicios farmacéuticos.
      br
      |El proceso debe ser seguro, eficaz, rápido y controlado y se divide en distribución externa y distribución interna. A continuación, conoceremos cada uno de ellos.
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Distribución externa
    p.mb-5(data-aos="fade-right") Esta distribución tiene dos instancias:

    .col-xl-10.mx-auto.mb-5.tarjeta.p-4(style="background-color: #F7F6FE")
      ul
        li.d-flex.align-items-start.mb-3
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
          p.mb-0(data-aos="fade-left") La primera es la entrega de los productos farmacéuticos a los pacientes y usuarios desde los establecimientos farmacéuticos o el traslado.
        li.d-flex.align-items-start.mb-3
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
          p.mb-0(data-aos="fade-left") La segunda es el traslado y entrega de los productos farmacéuticos desde los distribuidores mayoristas a los distribuidores minoristas, por ejemplo, cuando un depósito de drogas entrega el pedido a una farmacia o farmacia-droguería. En ambos casos puede haber una venta y por ende intercambio de dinero.

    p.mb-5 Teniendo presente que en todo momento se debe garantizar la conservación de los productos farmacéuticos, desde que son elaborados hasta que son administrados a los pacientes, desde el proceso de distribución, además de <b>determinar si canal de distribución será propio o externo</b>, se deben tener en cuenta aspectos como:


    .col-lg-10.col-xl-8.mx-auto.mb-5
      img.d-none.d-md-flex(src="@/assets/curso/temas/tema5/img-2.svg" data-aos="fade-left" alt="Imagen decorativa")
      img.d-flex.d-md-none(src="@/assets/curso/temas/tema5/img-2-1.svg" data-aos="fade-left" alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") En la siguiente imagen se ilustra el canal de distribución externo de productos farmacéuticos.

    .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
      h5 Figura 5.
      span Canal de distribución externa
    img.col-lg-10.mx-auto(src="@/assets/curso/temas/tema5/img-1.svg" data-aos="fade-left" alt="muestra canal de distribución externa, donde: laboratorio fabricante vende a distribuidores mayoristas, minoristas y servicios farmacéuticos intrahospitalarios y estos lo distribuyen a farmacias que venden a los pacientes.")
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Distribución interna
    
    .cajon.cajon-edit.color-secundario.col-md-8.col-lg-7.mx-auto.p-4.mb-5(style="background-color: #EAE5FB")
      p(data-aos="fade-right") La resolución 1403 del 2007 la define como:
        br
        br
        |“El proceso que comprende la prescripción de un medicamento a un paciente en una Institución Prestadora de Servicios de Salud por parte del profesional legalmente autorizado, la dispensación por parte del servicio farmacéutico, la administración correcta en la dosis y vía prescrita y en el momento oportuno por el profesional de la salud legalmente autorizado para tal fin y el registro de los medicamentos administrados y/o la devolución debidamente sustentada de los no administrados con el fin de contribuir al éxito de la farmacoterapia. El servicio farmacéutico deberá determinar el sistema o los sistemas de distribución intrahospitalaria de medicamentos y dispositivos médicos que deban implementarse en la Institución Prestadora de Servicios de Salud, para garantizar la oportunidad, seguridad, eficiencia y calidad de los medicamentos y dispositivos médicos que deban suministrarse a los pacientes” (p.51). 

    h3(data-aos="fade-right") Clases de distribución interna
    p.mb-5(data-aos="fade-right") Los siguientes son los sistemas de distribución interna:

    TabsB.color-acento-contenido(style="border: none")
      .py-4.py-md-5(titulo="<em>Stock</em>")
        .row.col-xl-10.mx-auto
          .col-lg-6.mb-4.mb-lg-0.me-auto(data-aos="fade-right")
            p Este consiste en poner en cada servicio asistencial como urgencias, cirugía, etc, a través de farmacias satélites o carros de reanimación un <em>Stock</em> (aprobado por el Comité de Farmacia y Terapéutica) de todos los medicamentos y dispositivos médicos con cantidades fijas; el cual quedará a cargo de la enfermera jefe de cada servicio (debe tener claro si el consumo es para la prestación del servicio o debe ser cargado al paciente) y deberá tener reposición cada 24 horas por parte del servicio farmacéutico.
              br
              |Es responsabilidad del director técnico del servicio farmacéutico capacitar a los jefes de enfermería en el manejo y conservación de los productos, además de realizar auditorías periódicas al <em>Stock</em>.
              br
              br
              |<b>Ventajas:</b> tanto las enfermeras como los médicos tienen disponibilidad inmediata de los medicamentos y dispositivos médicos y se disminuyen las devoluciones.
              br
              br
              |<b>Desventajas:</b> puede haber pérdidas y despilfarros de los productos por falta de control y mayor desgaste del personal farmacéutico.
          .col-lg-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema5/img-3.jpg' style="max-width: 410px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Prescripción individual")
        .row.col-xl-10.mx-auto
          .col-lg-6.mb-4.mb-lg-0.me-auto
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 El servicio farmacéutico recibe de forma directa desde el personal de enfermería la prescripción médica, la transcripción de la prescripción y/o los pedidos de los dispositivos médicos para la prestación del servicio.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Los despachos se realizan para 24 horas.
              p.mb-0 <b>Ventajas:</b> permite un mayor control por parte del personal de farmacia al poder revisar cada una de las órdenes médicas y mayor control de inventario.
                br
                br
                |<b>Desventajas:</b> se dan por los problemas en las transcripciones que implican mayor tiempo laboral del personal de enfermería y la falta de evidencias en posibles errores de medicación, ya que los farmacéuticos no tienen como revisar las dosis de los medicamentos aplicados a los pacientes.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/img-4.jpg' style="max-width: 410px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Combinado o mixto")
        .row.col-xl-10.mx-auto
          .col-lg-6.mb-4.mb-lg-0.me-auto
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Combina los dos primeros (<em>Stock</em> e individual).
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Consiste en la distribución de los medicamentos y dispositivos médicos más usados por medio de un <em>Stock</em> a través de las farmacias satélites o carro de reanimación y la otra parte se realiza por medio de la formulación individual.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Es normalmente usado por instituciones que no tienen capacidad para implementar el Sistema de Distribución de Medicamentos en Dosis Unitaria - SDMDU.
            p.mb-0 Sus ventajas y desventajas no son diferentes a las mencionadas anteriormente para <em>Stock</em> e individual.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/img-5.jpg' style="max-width: 410px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Dosis unitarias")
        .row.col-xl-10.mx-auto
          .col-lg-6.mb-4.mb-lg-0.me-auto
            ul
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0.text-small El más nuevo en Colombia y está reglamentado por el decreto 780 del 2016 – capitulo 10 (hoja 292) y por la resolución 1403 del 2007 (hoja 52 a hoja 54) el cual debe ser implementado por los servicios farmacéuticos de las Instituciones Prestadoras de Servicios de Salud de segundo y tercer nivel de complejidad.
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0.text-small Consiste en suministrar para cada paciente de forma individual las dosis exactas prescritas y en las formas farmacéuticas adecuadas, para 24 horas al personal de enfermería para que este las administre.
            p.fw-bold Ventajas:
            ul
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0.text-small No hay manipulación de los medicamentos por mucho tiempo por el personal de enfermería.
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0.text-small Minimiza los inventarios de los medicamentos en los <em>stocks</em> de los servicios asistenciales.
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0.text-small Permite el seguimiento y control del tratamiento farmacoterapéutico de los pacientes por parte del Químico Farmacéutico, evitando así interacciones entre medicamentos y posibles reacciones adversas.
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0.text-small Optimiza los cobros a los pacientes permitiendo facturaciones más exactas de los gastos.
                  br
                  |Permite mayor adaptabilidad a todos los procedimientos realizados por medios magnéticos.
            p.fw-bold Desventajas:
            p.ps-4.text-small Para la reestructuración requiere de una alta inversión financiera y un desgaste significativo por parte del personal del servicio farmacéutico y la organización de las formas dosificadas, ya que pocas veces se puede contar con zonas de reempaque y reenvase propias, lo que implica negociaciones con entidades externas.

          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/img-6.jpg' style="max-width: 310px" alt="Imagen decorativa").m-auto
    h3(data-aos="fade-right") Infraestructura
    p.mb-5(data-aos="fade-right") Para la implementación del SDMDU, el servicio farmacéutico debe cumplir con las siguientes características:
    TabsB.color-acento-contenido(style="border: none")
      .py-4.py-md-5(titulo="Área")
        .row.col-xl-10.mx-auto
          .col-lg-6.mb-4.mb-lg-0.me-auto(data-aos="fade-right")
            p Debe contar con un área que permita realizar los procesos generales y especiales que le apliquen según la normatividad legal vigente y cada una de las actividades propias del sistema como:
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Recepción, transcripción y validación de las prescripciones médicas.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 El perfil farmacoterapéutico.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Preparación de las dosis unitarias en los cajetines.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Aparcamiento de los carros de unidosis.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Espacio para reempaque y reenvase de medicamentos.
          .col-lg-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema5/img-7.jpg' style="max-width: 410px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Materiales")
        .row.col-xl-10.mx-auto
          .col-lg-7.mb-4.mb-lg-0.pe-md-4
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 <b>Estanterías o paneles:</b> deben permitir el almacenamiento en orden alfabético de los medicamentos que ya fueron reempacados en unidosis.
              li.mb-3
                .d-flex.align-items-start.mb-4
                  img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                  p.mb-0 <b>Carros de unidosis:</b>
                ul.ps-4
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 13px; margin-top: 5px")
                    p.mb-0 La cantidad depende de las dependencias hospitalarias que requieran cubrimiento con unidosis.
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 13px; margin-top: 5px")
                    p.mb-0 La capacidad de los carros depende de la capacidad de dichas áreas.
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 13px; margin-top: 5px")
                    p.mb-0 Los carros están divididos por cajones que a su vez tienen una serie de cajetines en los cuales se ubican los medicamentos y están respectivamente marcados con número de historia cínica o nombre, número de piso y número de cama del paciente. 
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 13px; margin-top: 5px")
                    p.mb-0 Se utiliza un cajetín por paciente y solo se entrega medicación para 24 horas, además de cada cajetín debe haber dos unidades, una que se llena y otra que permanece vacía en farmacia con el fin de poder realizar el intercambio vacío/lleno en cada entrega.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/img-8.jpg' style="max-width: 310px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Recurso humano")
        .row.col-xl-10.mx-auto
          .col-lg-6.mb-4.mb-lg-0.me-auto
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Se debe contar con personal calificado que tenga la capacidad de realizar cada una de las actividades que requiere el proceso de distribución por dosis unitaria.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 A nivel normativo, el director técnico responsable del servicio solo puede estar a cargo de un químico farmacéutico.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Es indispensable que el recurso humano sea profesional en farmacia como regentes y químicos farmacéuticos, que estén capacitados en distribución por dosis unitaria, estén entrenados en farmacoterapia y conocedores de la composición química, fotosensibilidad, termolabilidad, sensibilidad a la humedad (higroscópico), entre otros de los medicamentos.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/img-9.jpg' style="max-width: 310px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Información")
        .row.col-xl-10.mx-auto
          .col-lg-6.mb-4.mb-lg-0.me-auto
            p.mb-4 El SDMDU debe contar con fuentes de información como:
            ul
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Historias clínicas.
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Perfiles farmacoterapéuticos.
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Actas de reuniones o comités institucionales.
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Formatos de devoluciones y referentes bibliográficos que permitan aclarar cualquier protocolo de estabilidad de los medicamentos y mantenerse actualizados sobre nuevas moléculas.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/img-10.jpg' style="max-width: 310px" alt="Imagen decorativa").m-auto
    h3(data-aos="fade-right") Reempaque de medicamentos
    p.mb-5(data-aos="fade-right") En Colombia, la mayor parte de medicamentos vienen en presentaciones multidosis, que se ajustan perfectamente a las necesidades de pacientes ambulatorios, pero no se acoplan muy bien a la distribución intrahospitalaria, por lo cual es necesario reempacarlos en dosis únicas que facilitan su distribución a cada unidad de servicio.
      br
      |El ajuste de los medicamentos en presentación unidosis proporciona muchas ventajas sobre los otros sistemas, entre esas están: 
    ul.mb-5.col-lg-10.mx-auto
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Ofrece seguridad en las dosis.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Permite realizar el seguimiento adecuado a las terapias con medicamentos a cada paciente.
      li.d-flex.align-items-start.mb-3
        img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px" data-aos="fade-right")
        p.mb-0(data-aos="fade-left") Ofrece un manejo más controlado.
    p.mb-5(data-aos="fade-right") Este proceso está a cargo del servicio farmacéutico y debe garantizar seguridad (paciente correcto, dosis correcta y vía y frecuencia correcta), eficacia (prescripción + distribución + administración = atención correcta) y control (evitar errores antes de la  al paciente).
      br
      br
      | A continuación, analizaremos la información relacionada con el proceso de reempaque:
    TabsB.color-acento-contenido(style="border: none")
      .py-4.py-md-5(titulo="Multidosis a unidosis")
        .row.col-xl-10.mx-auto
          .col-lg-6.mb-4.mb-lg-0.me-auto(data-aos="fade-right")
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Solo se podrán empacar las formas farmacéuticas sólidas como tabletas, tabletas recubiertas, grageas, cápsulas que su presentación sea individual en el empaque primario como en el caso del blíster.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Cuando la presentación del medicamento sea por ejemplo frasco 100 tabletas, estas se empacaron en el momento que sean solicitadas.
          .col-lg-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema5/img-11.jpg' style="max-width: 310px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Empaque y rótulo")
        .row.col-xl-10.mx-auto
          .col-lg-7.mb-4.mb-lg-0.pe-md-4
            p El empaque debe ser en material de bolsa transparente, igual en tamaño y selladas.
              br
              | En cuanto al título, este debe llevar la siguiente información determinada por la resolución 1403 del 2007:
            ul
              li.d-flex.align-items-start.mb-0
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Nombre del medicamento en la Denominación Común Internacional o genérico
              li.d-flex.align-items-start.mb-0
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Forma farmacéutica y vía de administración.
              li.d-flex.align-items-start.mb-0
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Concentración del contenido final (gramos (gr), miligramos (mg), Unidades internacionales (U.I))
              li.d-flex.align-items-start.mb-0
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Indicaciones especiales de almacenamiento, preparación y administración, en aquellos casos que físicamente sea posible.
              li.d-flex.align-items-start.mb-0
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Fecha de vencimiento.
              li.d-flex.align-items-start.mb-0
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Número de lote (el impreso en el empaque primario).
              li.d-flex.align-items-start.mb-0
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Registro sanitario.
            p.mb-o En los envases o empaques pequeños la información se incluirá en una separata.
              br
              | A la información anteriormente mencionada se le debe agregar el número de lote otorgado durante el reempaque y el nombre del responsable del reempaque.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/img-12.jpg' style="max-width: 310px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Protocolo reempaque")
        .row.col-xl-10.mx-auto
          .col-lg-7.mb-4.mb-lg-0.me-auto.pe-lg-4
            p 1. Lavado de manos bajo protocolo y utilización de elementos de protección personal como bata, gorro, guantes quirúrgicos y tapabocas.
              br
              |2. Solo se reemplaza un medicamento a la vez y por ende solo se tendrán los rótulos correspondientes a ese medicamento. No debe haber ningún otro producto sobre el mesón, ya que en todo momento se debe evitar contaminar el medicamento. Además, se debe realizar manejo adecuado y control de desechos bajo protocolo.
              br
              |3. Se realizará verificación del proceso mediante auditorías internas y externas, acorde a listas de verificación, teniendo presente la normatividad legal vigente.
              br
              |4. El personal calificado y entrenado responsable del empaque, debe cumplir con unos requisitos que son:
            ul
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Elaborar la hoja de control o registro del medicamento a empacar. 
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Seleccionar el o los medicamentos y la cantidad de unidades a empacar. 
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Elaborar los rótulos o etiquetas. 
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Empacar las dosis diarias en las bolsas. 
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Sellar las bolsas. 
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Identificar el producto con el rótulo respectivo. 
              li.d-flex.align-items-start.mb-2
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Llenar el registro de la producción realizada. Este registro o control de empaque contendrá la siguiente información: supervisión por parte del químico farmacéutico del lote reempacado, ubicación de las unidades reempacadas en el estante y fila correspondiente y entrega de las unidades empacadas al servicio de hospitalización.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/img-13.jpg' style="max-width: 310px" alt="Imagen decorativa").m-auto
      .py-4.py-md-5(titulo="Formato reempaque")
        .row.col-xl-10.mx-auto
          p.mb-4 El SDMDU debe contar con fuentes de información como historias clínicas, perfiles farmacoterapéuticos, actas de reuniones o comités institucionales, formatos de devoluciones y referentes bibliográficos que permitan aclarar cualquier protocolo de estabilidad de los medicamentos y mantenerse actualizados sobre nuevas moléculas.
          img(src='@/assets/curso/temas/tema5/img-14.svg' alt="Muestra formato de empaque en tabla de excel donde describe las siguientes columnas: Empaque No. Fecha – dd/mm/aa Hora Nombre comercial medicamento Nombre genérico Lote del medicamento Fecha de vencimiento Cantidad de unidades a reempacar Unidades por reempaque Cantidad D.D. reempacada Firma persona que hace el empaque Firma del supervisor")
    h3(data-aos="fade-right") Reenvase de medicamentos
    p.mb-5(data-aos="fade-right") Este proceso consiste en la preparación de mezclas intravenosas como nutriciones parenterales, medicamentos oncológicos, entre otros, que requieren protocolos de áreas estériles y especiales que solo son competencia de los Químicos Farmacéuticos.
    h3(data-aos="fade-right") Etapas del SDMDU
    p.mb-5(data-aos="fade-right") Las siguientes son las etapas relacionadas con el SDMDU:
    .tarjeta.p-4.p-lg-5.mb-5(style="background-color: #EEF5FF")
      SlyderA(tipo="b")
        .row
          .col-lg-5(data-aos="fade-right")
            p.mb-4.fw-bold Prescripción médica
            p El médico tratante determina el diagnóstico del paciente y posterior a ello realiza la prescripción médica manual (usar papel calcante) o sistematizada con todos los datos legalmente requeridos y se la entrega a la enfermera jefe encargada el servicio.
          .col-lg-7(data-aos="fade-left")
            figure
              img.tarjeta.mx-auto(src='@/assets/curso/temas/tema5/img-15.jpg' style="max-width: 360px" alt="Imagen decorativa")
        .row
          .col-lg-5
            p.mb-4.fw-bold Entrega de prescripción 
            p Posterior a la revisión, la enfermera procede a enviar vía electrónica o entregar la copia de la prescripción médica al Químico Farmacéutico encargado del servicio farmacéutico.
          .col-lg-7
            figure
              img.tarjeta.mx-auto(src='@/assets/curso/temas/tema5/img-16.jpg' style="max-width: 360px" alt="Imagen decorativa")
        .row
          .col-lg-5
            p.mb-4.fw-bold Alistamiento de carros de unidosis 
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Este procedimiento normalmente lo realiza el Regente de Farmacia y consiste en poner dentro de cada cajetín debidamente marcados con el nombre, piso y cama del paciente, los medicamentos inscritos en el perfil farmacoterapéutico correspondientes a cada paciente para 24 horas.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Antes de ser entregados los carros a las enfermeras, debe realizarse una última inspección para corroborar que cada cajetín contenga los medicamentos prescritos para ese paciente.
          .col-lg-7
            figure
              img.tarjeta.mx-auto(src='@/assets/curso/temas/tema5/img-18.jpg' style="max-width: 360px" alt="Imagen decorativa")
        .row
          .col-lg-5
            p.mb-4.fw-bold Intercambio de cajetines
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 El intercambio de cajetines vacíos por parte de la enfermera y cajetines llenos por parte del servicio farmacéutico se realiza en unos horarios establecidos.
                  br
                  |Este procedimiento se realiza a la luz del perfil farmacoterapéutico y debe quedar firmado por quien entrega el carro como por quien lo recibe.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 También se reciben las devoluciones de medicamentos no administrados a los pacientes por parte de enfermería, para ello se debe tener un formato de devoluciones que justifique el porqué de la no administración de los medicamentos.
                  br
                  br
                  |Antes de reubicar los medicamentos devueltos, deben ser revisados por el Químico Farmacéutico encargado del servicio y será quien determine si se reubican o se descartan bajo protocolos.
          .col-lg-7
            figure
              img.tarjeta.mx-auto(src='@/assets/curso/temas/tema5/img-19.svg' style="max-width: 560px" alt="Imagen decorativa")
        .row
          .col-lg-5
            p.mb-4.fw-bold Revisión y elaboración del perfil farmacoterapéutico
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 El Químico Farmacéutico interpreta la prescripción médica con el fin de evidenciar posibles errores de medicación, interacciones medicamentosas, entre otros errores.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Si encuentra un error debe comunicarse con el médico tratante y será este quien realice los cambios pertinentes.
              li.mb-3
                .d-flex.align-items-start
                  img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                  p.mb-0 Si todo está correcto el Químico Farmacéutico o a quien este delegue (Regente de Farmacia) procede a elaborar el perfil farmacoterapéutico, el cual es un formato donde se registran todos los datos del paciente como:
                ul.ps-4
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 15px; margin-top: 5px")
                    p.mb-0 Nombre
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 15px; margin-top: 5px")
                    p.mb-0 # de historia clínica
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 15px; margin-top: 5px")
                    p.mb-0 Diagnóstico
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 15px; margin-top: 5px")
                    p.mb-0 # de piso y cama
                  li.d-flex.align-items-start.mb-3
                    img.me-2(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 15px; margin-top: 5px")
                    p.mb-0 Cada uno de los medicamentos prescritos con concentración, esquema de dosis y días de tratamiento.
                  li
                    p.mb-0 Una vez este diligenciado el perfil, deberá ser revisado y validado por el Químico Farmacéutico que esté a cargo del servicio de distribución de medicamentos por dosis unitaria.
          .col-lg-7
            figure
              img.tarjeta.mx-auto(src='@/assets/curso/temas/tema5/img-17.svg' style="max-width: 360px" alt="Imagen decorativa")
        .row
          .col-lg-5
            p.mb-4.fw-bold Trasporte de carros de unidosis
            ul
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 La encargada de este procedimiento es la enfermera que recibe el carro en el servicio farmacéutico.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Consiste en transportar el carro de unidosis a las unidades correspondientes, por ejemplo hospitalización.
              li.d-flex.align-items-start.mb-3
                img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
                p.mb-0 Hay carros que permiten el transporte de los dispositivos médicos requeridos.
          .col-lg-7
            figure
              img.tarjeta.mx-auto(src='@/assets/curso/temas/tema5/img-20.png' style="max-width: 360px" alt="Imagen decorativa").m-auto
    h3(data-aos="fade-right") Control del sistema de distribución de dosis unitaria
    p.mb-5(data-aos="fade-right") El control del SDMDU se realiza a través de los indicadores de gestión de la calidad para este proceso. La fórmula que se aplica es:
    .row.justify-content-center
      .col-auto.tarjeta.p-4(style="background-color: #E5DFFA")
        img(src='@/assets/curso/temas/tema5/img-21.svg' style="max-width: 790px" data-aos="fade-left" alt="Imagen decorativa")

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
