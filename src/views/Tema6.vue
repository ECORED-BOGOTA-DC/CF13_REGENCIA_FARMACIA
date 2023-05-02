<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Administración de medicamentos
    
    p.mb-0 En la administración de medicamentos entran dos puntos importantes que son: la forma farmacéutica del medicamento y la vía de administración de este medicamentos, las cuales estudiaremos a continuación.
    Separador 
    .titulo-segundo.color-acento-contenido
      h2#t_6_1 6.1 Tipos de carga
    
    p.mb-4 Se entiende por forma farmacéutica a la unión del principio activo + excipientes + vehículo que da como resultado la forma final del medicamento.
      br
      br
      |Los objetivos de estas formas son:
    
    .d-flex.flex-wrap.mb-4
      .col-12.col-lg-7.tarjeta.my-auto.p-4.order-2.order-lg-1(style="background-color: #F7F6FE")
        ul
          li.d-flex.align-items-start.mb-4
            img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
            p.mb-0 Facilitar su administración.
          li.d-flex.align-items-start.mb-4
            img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
            p.mb-0 Favorecer su acceso.
          li.d-flex.align-items-start.mb-4
            img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
            p.mb-0 Dosificar con exactitude.
          li.d-flex.align-items-start.mb-4
            img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
            p.mb-0 Proteger los medicamentos.
          li.d-flex.align-items-start.mb-4
            img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
            p.mb-0 Garantizar limpieza y esterilidad.
          li.d-flex.align-items-start.mb-4
            img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
            p.mb-0 Hacer agradable la administración.
          li.d-flex.align-items-start.mb-4
            img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
            p.mb-0 Favorecer la absorción  del medicamento.
      img.col-lg-5.ps-lg-4.order-1.order-lg-2.mx-auto(src="@/assets/curso/temas/tema6/img-1.png" style="max-width: 508px")
    
    p.mb-4 Las formas farmacéuticas se clasifican en:
    h4 Sólidas

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Tabletas")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son compactas, normalmente son redondas o alargadas y no siempre tiene camuflaje de sabor y olor.
              br
              br
              |Se clasifican en <em>tabletas orales</em> su desintegración se hace en el estómago para iniciar la absorción del principio activo, <em>tabletas masticables</em> su desintegración se hace en la boca y <em>tabletas vaginales</em> donde su desintegración es dentro de la vagina.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-2.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Cápsulas")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p En estas el principio activo y los excipientes se encuentran cubiertos por una capa de gelatina con el propósito de camuflar y evitar olores y sabores desagradables. Además de ayudar a la tolerancia gástrica.
              br
              br
              |Se clasifican en: <em>cápsulas de gelatina dura</em> donde su principio activo en polvo se encuentra dentro de la cubierta que por lo general es de dos colores y en cápsulas de <em>gelatina blanda</em> o <em>perlas</em> en las que el principio activo es líquido.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-3.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Grageas")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Su forma es biconvexa, por lo general son de colores vistosos, y al igual que las cápsulas su objetivo es camuflar olores y sabores desagradables.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-4.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Polvos")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Su principio activo y excipientes están pulcramente molidos brindando una forma homogénea.
              br
              br
              |Su administración puede ser externa como los medicamentos dermatológicos o interna como los polvos de reconstitución.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-5.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Granulados")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Su principio activo y excipientes están pulcramente molidos brindando una forma homogénea.
              br
              br
              |Su administración puede ser externa como los medicamentos dermatológicos o interna como los polvos de reconstitución.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-6.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Supositorios")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Su principio activo y excipientes están pulcramente molidos brindando una forma homogénea.
              br
              br
              |Su administración puede ser externa como los medicamentos dermatológicos o interna como los polvos de reconstitución.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-7.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Óvulos")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son de forma ovoide y al igual que los supositorios están elaborados a base de glicerina o manteca de cacao. Son de uso vaginal.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-8.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Liberación especial retardada")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Su forma es en tableta o gragea, pero su liberación es lenta dentro del organismo, son elaborados con el fin de sostener una concentración eficaz y constante de 8 a 12 horas en sangre y tejidos y también así disminuir las dosis al día del paciente.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-9.jpg' style="max-width: 575px")

    h4 Semisólidas

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Cremas")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son de uso tópico, contienen entre el 60 y el 80% de agua formado un líquido espeso y homogéneo.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-10.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Pastas")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son preparaciones de uso tópico en las que su mayor contenido son polvos que no se disuelven y al aplicarlas quedan rígidas.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-11.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Geles o Jaleas")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son una preparación con una base permanente sólida y una dispersa líquida.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-12.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Pomadas")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son formadas por un alto porcentaje de grasa y poco de agua, lo que las hace emolientes y lubricantes.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-13.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Ungüento")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son formadas por un alto porcentaje de grasa y poco de agua, lo que las hace emolientes y lubricantes.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-14.jpg' style="max-width: 575px")


    .tarjeta.p-4.mb-5(style="background-color: #FAFAFA")
      LineaTiempoC.color-secundario(text-small)
        .d-flex.flex-wrap(titulo="Elixir")
          img(src='@/assets/curso/temas/tema6/img-16.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Elixir
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .d-flex.flex-wrap(titulo="Solución")
          img(src='@/assets/curso/temas/tema6/img-17.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Solución
            p Es el resultado de la unión de dos o más principios activos de características similares en un vehículo acuoso. Pueden ser de uso oral, tópico, oftálmico, entre otros.
        .d-flex.flex-wrap(titulo="Tintura")
          img(src='@/assets/curso/temas/tema6/img-18.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Tintura
            p Son el resultado de la disolución de los principios activos en un vehículo alcohólico o hidroalcohólico. 
        .d-flex.flex-wrap(titulo="Loción")
          img(src='@/assets/curso/temas/tema6/img-19.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Loción
            p Son el resultado de la disolución de los principios activos en un vehículo alcohólico o acuoso.
        .d-flex.flex-wrap(titulo="Colirio")
          img(src='@/assets/curso/temas/tema6/img-20.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Colirio
            p Son preparaciones estériles con fines oftalmológicos.
        .d-flex.flex-wrap(titulo="Enema")
          img(src='@/assets/curso/temas/tema6/img-21.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Enema
            p Son preparaciones elaboradas con el fin de ayudar a evacuar todo el alimento desde el estómago y pueden ser orales o rectales.
        .d-flex.flex-wrap(titulo="Inyectable")
          img(src='@/assets/curso/temas/tema6/img-22.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Inyectable
            p Son preparados líquidos en solución, suspensión o raramente emulsión, con principios activos disueltos en vehículos acuosos o aceitosos, su preparación es estéril durante su fabricación y su envase es para administración parenteral.
        .d-flex.flex-wrap(titulo="Linimento")
          img(src='@/assets/curso/temas/tema6/img-23.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Linimento
            p Su constitución es en solución o emulsión y emplea un vehículo acuoso, oleoso o alcohólico.
        .d-flex.flex-wrap(titulo="Jarabe")
          img(src='@/assets/curso/temas/tema6/img-24.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Jarabe
            p Son preparaciones cuyo vehículo es una solución azucarada.
        .d-flex.flex-wrap(titulo="Suspensión")
          img(src='@/assets/curso/temas/tema6/img-25.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Suspensión
            p Son preparados líquidos en solución, suspensión o raramente emulsión, con principios activos disueltos en vehículos acuosos o aceitosos, su preparación es estéril durante su fabricación y su envase es para administración parenteral.
        .d-flex.flex-wrap(titulo="Emulsion")
          img(src='@/assets/curso/temas/tema6/img-26.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            h3.mb-4 Emulsion
            p Sus principios activos se encuentran disueltos en dos vehículos uno acuoso y el otro aceitoso por lo cual su aspecto es lechoso.
        
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Inhaladores o aerosoles")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son medicamentos envasados de tal forma que al paciente usarlos salen en forma gaseosa y sean tomados por medio inhalatorio.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-27.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Gases medicinales")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son medicamentos envasados de tal forma que al paciente usarlos salen en forma gaseosa y sean tomados por medio inhalatorio.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-28.jpg' style="max-width: 575px")
      .py-3.py-md-4(titulo="Nebulizadores")
        .row
          .col-md-5.mx-auto.mb-4.mb-md-0
            p Son medicamentos líquidos que al usarse con un dispositivo médico llamado nebulizador se convierte en un gas permitiendo que el medicamento llegue más profundamente a las vías aéreas del paciente.
        
          .col-md-6
            img(src='@/assets/curso/temas/tema6/img-29.jpg' style="max-width: 575px")   
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_6_2 6.2	Vías de administración de medicamentos
    
    p.mb-5 Es la forma como el medicamento ingresa al organismo, por lo cual existen diferentes vías para cada una de las formas farmacéuticas estudiadas anteriormente, las cuales se describen a continuación:

    .tarjeta.p-4.mb-5(style="background-color: #FAFAFA")
      LineaTiempoC.color-secundario(text-small)
        .d-flex.flex-wrap(titulo="Oral")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-30.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son las tabletas, cápsulas, grageas, granulados, suspensiones, enema oral, jarabes e inhaladores bucales. Es una vía segura que en caso de exceso de dosis o intoxicación permite contrarrestar el daño con lavado gástrico. La desventaja que tiene es que la absorción de los medicamentos es muy lenta y variable. En muchos pacientes ocasiona irritación gástrica.
              br
              br
              |Su administración en el caso de las tabletas, cápsulas y grageas debe ser siempre con agua; en todos los casos las manos deben estar limpias y se deben seguir las indicaciones médicas de dosificación. En el caso de los inhaladores bucales estos son de uso personal y antes de cada uso se debe asear la boquilla del inhalador.
        .d-flex.flex-wrap(titulo="Sublingual")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-31.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son las tabletas y grageas sublinguales y consiste en poner el medicamento debajo de la lengua sin masticar hasta que este se disuelva por completo. Esta es la segunda vía más rápida del organismo.
              br
              br
              |Su administración no requiere agua, pero si se debe tener una asepsia de las manos para evitar contaminación.
        .d-flex.flex-wrap(titulo="Tópica")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-32.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son soluciones, tinturas, lociones, alimentos, suspensiones, emulsiones, cremas, pastas y geles o jaleas. Esta vía se utiliza cuando se requiere que la acción del medicamento sea local.
              br
              br
              |Para su administración se requiere que la zona afectada este limpia y seca al igual que las manos de la persona que va a administrar el medicamento. En el caso de los productos que sean en tubo no se debe acercar la punta de este a la zona afectada e inmediatamente se saque la dosis requerida el envase debe ser bien tapado ya que todo esto podría ocasionar contaminación a todo el resto de medicamento.
        .d-flex.flex-wrap(titulo="Oftálmica")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-33.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son los colirios, ungüentos, cremas y soluciones. Todos los medicamentos de esta vía buscan efectividad precisa en los ojos y esta permite que se den elevadas concentraciones de principio activo.
              br
              br
              |Para su administración el paciente debe estar en una posición sentado con la cabeza hacia atrás o acostado, la persona encargada de la administración del medicamento debe tener las manos limpias, la boquilla del envase no debe tocar el ojo en ningún momento, el paciente debe esperar unos minutos antes de cambiar de posición para evitar pérdidas del medicamento, no se debe tocar o rascar el ojo(s) después de la administración del medicamento.
        .d-flex.flex-wrap(titulo="Ótica")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-34.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son las soluciones y suspensiones. Todos los medicamentos de esta vía buscan efectividad precisa en los oídos. Los efectos adversos de esta vía son mínimos.
              br
              br
              |Para su administración el paciente debe estar en una posición sentado con la cabeza hacia el lado contrario de la aplicación y la oreja debe estar limpia y seca, la persona encargada de la administración del medicamento debe tener las manos limpias y el paciente debe esperar unos minutos antes de cambiar de posición para evitar pérdida del medicamento.
        .d-flex.flex-wrap(titulo="Inhalatoria")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-35.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son las soluciones y suspensiones. Todos los medicamentos de esta vía buscan efectividad precisa en los oídos. Los efectos adversos de esta vía son mínimos.
              br
              br
              |Para su administración el paciente debe estar en una posición sentado con la cabeza hacia el lado contrario de la aplicación y la oreja debe estar limpia y seca, la persona encargada de la administración del medicamento debe tener las manos limpias y el paciente debe esperar unos minutos antes de cambiar de posición para evitar pérdida del medicamento.
        .d-flex.flex-wrap(titulo="Rectal")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-36.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son las gaseosas. Es una vía fácil de utilizar ya que los medicamentos vienen en presentaciones que ayudan a esto.
              br
              br
              |Para su administración en el caso de los inhaladores se deben agitar antes de usar y son de uno personal; en el caso de utilizar nebulizadores o mascarillas se debe asegurar que estas estén bien puestas para evitar escapes de medicamento.
        .d-flex.flex-wrap(titulo="Vaginal")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-37.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son los óvulos, tabletas vaginales y cremas. Los medicamentos aplicados por esta vía tienen acción local y se absorben a través de la membrana lipoidea.
              br
              br
              |Para la administración la persona encargada de ello debe tener las manos limpias. En el caso de los óvulos y las tabletas vaginales la paciente puede ponerse en cuclillas, acostarse y levantar las piernas abiertas, estar de pie y levantar una pierna o estar sentada en el baño. En el caso de las cremas por lo general estas traen aplicador para cada dosis lo que permite su fácil aplicación. En todos los casos se debe leer el prospecto antes de administrar el medicamento.
        .d-flex.flex-wrap(titulo="Parental")
          img.mb-auto(src='@/assets/curso/temas/tema6/img-38.jpg' style="max-width: 295px")
          .col-md.ps-md-4
            p Las formas farmacéuticas que hacen parte de esta vía son los inyectables que pueden administrarse vía intravenosa, intramuscular, intratecal y subcutánea.
              br
              br
              |Vía intravenosa (I.V): es la vía más rápida de absorción, por lo que en caso de reacción adversa al medicamento no es fácil revertir la acción. El medicamento se inyecta directamente en vena ya sea superficial o cutánea. Es una vía que permite la administración de grandes volúmenes de líquidos. Esta vía no está autorizada a nivel farmacéutico.
              br
              br
              |Vía intramuscular (I.M): es la vía por medio de la cual el medicamento se inyecta en un musculo, normalmente en el de la cadera, seguido del antebrazo y la pierna. Su absorción es lenta pro su efecto es a largo plazo y solo permite administrar máximo 5ml de medicamento. Está autorizada a nivel farmacéutico.
              br
              br
              |Vía intratecal: es la vía por medio de la cual se inyectan medicamentos alrededor de la médula espinal. Es de uso cien por ciento médico.
              br
              br
              |Vía subcutánea (SC): El medicamento se aplica debajo de la piel justo en el tejido adiposo. Su absorción es lenta y solo permite pequeñas cantidades de medicamento. Está autorizada a nivel farmacéutico.

    .titulo-segundo.color-acento-contenido
      h2#t_6_3 6.3	Manejo de residuos y políticas posconsumo
    
    p.mb-5 Los medicamentos utilizados por los pacientes por diferentes causas como cambios de tratamiento, vencimiento o sobrantes, se convierten en residuos, los cuales deben ser manejados de forma diferente a los residuos que se originan en casa.
      br
      br
      |Por tal motivo el Ministerio de Ambiente y Desarrollo Sostenible viene trabajando una estrategia con el propósito de fomentar la gestión ambiental adecuada de los residuos posconsumo con el objetivo que estos sean sujetos a sistemas de gestión diferencial y eludir que la disposición final se realice conjuntamente con los residuos hogareños. 
      br
      |Uno de los siete programas posconsumo es el de los medicamentos vencidos, que solo incluye los siguientes residuos:

    .col-12.col-lg-10.mx-auto.tarjeta.my-auto.p-4(style="background-color: #F7F6FE")
      ul
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Envases, empaques, cajas, frascos y ampolletas.
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Medicamentos cuya fecha de vencimiento ya expiró.
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Medicamentos parcialmente consumidos.
    
    p.mb-5 Para el descarte de estos residuos se cuenta con unos contenedores seguros denominados “punto azul”, instalados en farmacias, Farmacias – Droguerías, servicios farmacéuticos e IPS, en los cuales cualquier persona de la comunidad puede ir y depositar los residuos posconsumo que cumplan con los requisitos anteriormente mencionados.
      br
      br
      |En la siguiente imagen se ilustran los tipos de contenedores que pueden utilizarse para depositar los residuos.

    .col-lg-10.col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
        p.mb-0.text-small Figura 4
        span.text-small Contenedores para depositar residuos
      img(src="@/assets/curso/temas/tema6/img-39.jpg")

    p.mb-5 La entrega de los residuos se debe realiza bajo los siguientes parámetros:

    .col-12.col-lg-10.mx-auto.tarjeta.my-auto.p-4(style="background-color: #F7F6FE")
      ul
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Reunir todos los residuos en una bolsa con buena resistencia.
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Verificar que todos los frascos y envases estén bien cerrados.
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Destruir de forma parcial las etiquetas y marcas para evitar su falsificación.
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Revisar que en la bolsa solo se encuentren los residuos posconsumo autorizados, es decir, que no haya productos que no pueden ser entregados en los puntos de recolección.
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Dirigirse al punto de recolección autorizado.
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Depositar los residuos en el contenedor, verificando que pasen por el sistema de protección para evitar que sean extraídos y posteriormente falsificados.
        li.d-flex.align-items-start.mb-4
          img.me-2(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 15px; margin-top: 5px")
          p.mb-0 Si la bolsa en la que transportó los residuos tiene líquidos o sólidos relacionados con los medicamentos, depositar también la bolsa, en caso contrario se puede depositarla en otro contenedor diferente al punto azul.
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
