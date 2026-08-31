export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Cuánto cobra un abogado por una sucesión en Argentina? (Guía Definitiva de Honorarios, Gastos y Leyes)",
    "description": "Descubrí con exactitud cuánto cobra un abogado por una sucesión en Argentina (CABA y PBA). Conocé las leyes, evitá regulaciones abusivas y ahorrá miles de dólares.",
    "inLanguage": "es-AR",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.sucesionescaba.ar/"
    },
    "author": {
      "@type": "Person",
      "name": "Ezequiel Villagra",
      "jobTitle": "Abogado y Contador Público Nacional",
      "url": "https://www.sucesionescaba.ar/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Estudio Jurídico Sucesiones CABA",
      "url": "https://www.sucesionescaba.ar/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#fcfcfd] text-[#1e293b] font-sans antialiased selection:bg-[#dbeafe] selection:text-[#1e3a8a]">
        <header className="border-b border-[#e2e8f0] bg-white py-4 px-6 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <nav aria-label="breadcrumb">
              <ol className="flex items-center space-x-2 text-xs font-semibold text-[#64748b]">
                <li><a href="https://www.sucesionescaba.ar/" className="hover:text-[#0284c7]">Inicio</a></li>
                <li><span>/</span></li>
                <li><a href="https://www.sucesionescaba.ar/" className="hover:text-[#0284c7]">Guías Legales</a></li>
                <li><span>/</span></li>
                <li className="text-[#0f172a]" aria-current="page">Honorarios y Costos de Sucesión</li>
              </ol>
            </nav>
            <span className="text-xs font-medium bg-[#f1f5f9] text-[#475569] px-2.5 py-1 rounded">
              Actualizado 2026 • CABA & PBA
            </span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-10 md:py-16">
          <article className="prose prose-slate max-w-none text-[#334155] leading-relaxed">
            <header className="mb-10 not-prose border-b border-[#e2e8f0] pb-8">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wide uppercase bg-[#e0f2fe] text-[#0369a1] rounded-full">
                Derecho Sucesorio y Planificación Patrimonial
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
                ¿Cuánto cobra un abogado por una sucesión en Argentina? (Guía Definitiva de Honorarios, Gastos y Leyes)
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748b]">
                <span>Por <strong>Ezequiel Villagra</strong> (Abogado & Contador Público Nacional)</span>
                <span>•</span>
                <span>Lectura: 8 minutos</span>
                <span>•</span>
                <span>Especialidad: Derecho Civil y Tributario</span>
              </div>
            </header>

            <section id="introduccion" className="space-y-4 text-lg">
              <p>
                El obstáculo más grande y paralizante para regularizar un patrimonio familiar no suele ser la burocracia de los tribunales. El verdadero problema es el <strong>terror absoluto a los costos del proceso</strong>.
              </p>
              <p>
                Existe un mito profundamente arraigado en la sociedad civil argentina que dicta que <em>&quot;los abogados y el Estado se quedan con la mitad de la herencia&quot;</em>. Y la realidad es que, si no te informás correctamente y buscás oportuno <a href="https://abogadosucesiones.com/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">asesoramiento legal en sucesiones</a> con <a href="https://abogadosucesiones.com/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">abogados expertos en herencias</a>, esto puede volverse una amarga verdad.
              </p>
              <p>
                Iniciar un expediente a ciegas, sin saber con <strong>precisión quirúrgica cuánto cobra un abogado por una sucesión</strong>, es el error financiero más destructivo que podés cometer. Al llegar al final del juicio, miles de familias se topan con regulaciones de honorarios judiciales confiscatorias.
              </p>
              <p>
                Estas regulaciones imprevistas obligan a las familias a endeudarse o a malvender las propiedades de sus padres simplemente para poder pagarle al profesional interviniente.
              </p>
              <p>
                El <strong>acervo hereditario</strong> es el resultado del esfuerzo de toda una vida familiar y no podés dejar que se evapore. A continuación, desarticulamos el esquema de honorarios en <strong>CABA y la Provincia de Buenos Aires</strong>, citamos la ley vigente y te mostramos cómo blindar tu bolsillo.
              </p>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="marco-legal">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                El marco legal ineludible: ¿Qué leyes fijan los honorarios?
              </h2>
              <p>
                Si no pactás el precio de antemano con tu abogado mediante un <strong>contrato privado</strong>, el costo de tu trámite quedará a la libre interpretación del juez.
              </p>
              <p>
                Los honorarios de los letrados no se fijan por capricho. Dependiendo de dónde se encuentren radicados los bienes y el último domicilio del causante, aplicarán distintas leyes de orden público.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mt-6 mb-3">
                Honorarios en Capital Federal (CABA - Ley 27.423)
              </h3>
              <p>
                En el ámbito de la <strong>Justicia Nacional en lo Civil (CABA)</strong>, los honorarios están estrictamente regulados por la <a href="https://www.cpacf.org.ar/noticia/1312/ley-de-honorarios-profesionales" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">ley de honorarios profesionales</a> (Ley N° 27.423). El <strong>artículo 35</strong> dictamina que el juez fijará los honorarios en una escala que oscila entre el <strong>6% y el 16,5%</strong> del valor del patrimonio según las pautas de <a href="https://www.cpacf.org.ar/noticia/1312/ley-de-honorarios-profesionales" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">regulación de honorarios en capital</a>.
              </p>
              <p>
                Si en la sucesión intervienen varios abogados a lo largo del tiempo, ese porcentaje global se dividirá entre ellos. A simple vista, un 8% o 10% podría parecer un número razonable para la familia, pero <strong>la trampa está en la base de cálculo</strong>.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mt-6 mb-3">
                Honorarios en la Provincia de Buenos Aires (Ley 14.967)
              </h3>
              <p>
                Si el juicio tramita cruzando la General Paz, las reglas cambian drásticamente. En el ámbito de la Provincia de Buenos Aires, los honorarios se encuentran estrictamente regulados por la <strong>Ley de Honorarios de Abogados y Procuradores (Ley 14.967)</strong>, conforme a las <a href="https://normas.gba.gob.ar/documentos/BOa6XTk0.html" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">normativas de la Provincia de Buenos Aires</a> y la <a href="https://normas.gba.gob.ar/documentos/BOa6XTk0.html" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">legislación bonaerense aplicable</a>.
              </p>
              <p>
                Cuando un único abogado patrocina o representa a la totalidad de los herederos o interesados en un proceso sucesorio, sus honorarios deben ser regulados por el juez aplicando una escala que oscila entre el <strong>6% y el 20%</strong> del valor total del acervo hereditario transmitido (<strong>Art. 35, Ley 14.967</strong>).
              </p>
              <p>
                Pero atención a la <strong>pluralidad de letrados</strong>: en el caso de que intervengan varios abogados representando a distintos herederos, el juez deberá clasificar los trabajos realizados. Determinará qué porción corresponde al carácter de beneficio <em>&quot;común&quot;</em> (a cargo de la masa hereditaria) y qué porción al carácter <em>&quot;particular&quot;</em> (a cargo del interesado directo) (<strong>Art. 35, Ley 14.967</strong>).
              </p>
              <p>
                Por último, si en el marco del proceso se designan <strong>abogados partidores</strong> para dividir los bienes, sus honorarios se fijarán de manera independiente. A estos partidores se les aplica una escala del <strong>tres (3%) al cinco (5%) por ciento</strong> sobre el valor total del haber a dividirse (<strong>Art. 35, Ley 14.967</strong>).
              </p>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="base-imponible">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                La trampa mortal de la Base Imponible: Valor Fiscal vs. Valor Real
              </h2>
              <p>
                Acá es donde el abogado litigante tradicional descapitaliza a tu familia. Saber cuánto cobra un abogado por una sucesión depende directamente de la <strong>&quot;Base Regulatoria&quot;</strong>: ¿sobre qué valor de la casa va a calcular el juez ese porcentaje?
              </p>
              <p>
                En CABA (<strong>Art. 23 de la Ley 27.423</strong>), la ley le otorga al abogado el derecho irrenunciable de exigir que la base regulatoria sea el <strong>valor real de mercado</strong> de la propiedad. Un departamento que fiscalmente vale USD 30.000, comercialmente puede valer USD 200.000. Si el juez toma el valor real, tus honorarios se multiplican de forma catastrófica.
              </p>
              <p>
                En la Provincia de Buenos Aires, la determinación del valor de los bienes que componen la herencia es el paso fundamental y la ley establece reglas precisas para evitar abusos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Regla General (Valuación Fiscal):</strong> Para los inmuebles, el valor base se tomará sobre la <strong>valuación fiscal</strong> fijada por el Código Fiscal de la Provincia de Buenos Aires para la liquidación del impuesto al acto, vigente al momento exacto de la regulación de los honorarios (<strong>Art. 35 inc. b, Ley 14.967</strong>).
                </li>
                <li>
                  <strong>Valor Real o Tasación:</strong> Si durante la tramitación del expediente consta un valor de tasación debidamente aprobada o un valor de venta que resulte superior a la valuación fiscal, el juez deberá tomar obligatoriamente dicho <strong>valor real</strong> como base para la regulación (<strong>Art. 35 inc. b, Ley 14.967</strong>).
                </li>
                <li>
                  <strong>Estimación del Profesional:</strong> En caso de que el abogado considere que la valuación fiscal es notoriamente inadecuada respecto al valor real de mercado del inmueble, tiene el derecho de estimar su valor (<strong>Art. 27 inc. a, Ley 14.967</strong>). No obstante, si se utiliza este mecanismo, el porcentaje máximo de honorarios a regular sobre ese bien específico <strong>no podrá superar el 12%</strong> del valor que finalmente determine el juez (<strong>Art. 35 inc. b, Ley 14.967</strong>).
                </li>
              </ul>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="vivienda-unica">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                Protección Especial: La Vivienda Única Familiar en Provincia de Buenos Aires
              </h2>
              <p>
                Afortunadamente, el legislador bonaerense ha previsto una barrera de contención vital para no dejar en la calle a las familias tras la pérdida de su principal sostén económico.
              </p>
              <p>
                La legislación bonaerense protege especialmente el hogar. Si el acervo hereditario está compuesto por un <strong>único inmueble que constituyó el hogar conyugal</strong> y conserva su destino de <strong>vivienda familiar</strong> en beneficio del cónyuge, conviviente, ascendientes o descendientes declarados herederos, aplica un salvavidas legal.
              </p>
              <p>
                En estos casos excepcionales, los honorarios se fijarán <strong>inexcusablemente sobre la valuación fiscal</strong> y en el <strong>mínimo de la escala legal (6%)</strong> (<strong>Art. 35 inc. b, Ley 14.967</strong>).
              </p>
              <p>
                Para evitar extorsiones profesionales, la ley fulmina con <strong>nulidad cualquier convenio de honorarios</strong> que exceda este límite protectorio (<strong>Art. 35 inc. b, Ley 14.967</strong>). Esta es una herramienta que todo heredero debe conocer para defender su techo.
              </p>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="etapas-proceso">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                Las 3 etapas del juicio sucesorio: ¿Cuándo y cómo se devengan los honorarios?
              </h2>
              <p>
                Para entender a fondo la dinámica de los costos, tenés que comprender cómo la justicia divide el trabajo. El cobro de los honorarios no se exige íntegramente al inicio, sino que se encuentra intrínsecamente ligado al avance procesal del expediente.
              </p>
              <p>
                En la Provincia de Buenos Aires, el proceso sucesorio se divide en <strong>tres etapas claramente delimitadas</strong> (<strong>Art. 28 inc. c, Ley 14.967</strong>), y los honorarios se devengan de la siguiente manera:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Primera Etapa (Iniciación):</strong> Consiste en la redacción y presentación de la demanda de apertura del juicio sucesorio ante el juez competente, que por regla general es el del último domicilio del causante (<strong>Art. 2336 CCCN</strong>). Por esta actuación completa de iniciación, corresponde abonar <strong>un cuarto (1/4)</strong> del total de los honorarios (<strong>Art. 35 inc. a, Ley 14.967</strong>).
                </li>
                <li>
                  <strong>Segunda Etapa (Hasta la Declaratoria de Herederos):</strong> Abarca todas las diligencias necesarias para probar el vínculo. Esto incluye la publicación de edictos por tres (3) días en el Boletín Oficial y en un diario local para citar a herederos y acreedores (<strong>Art. 734 CPCCBA</strong>). También incluye la remisión de oficios al Instituto de Previsión Social (IPS), al Registro de Juicios Universales y al Registro de Testamentos. Esta etapa devenga <strong>otro cuarto (1/4)</strong> de los honorarios (<strong>Art. 35 inc. a, Ley 14.967</strong>).
                </li>
                <li>
                  <strong>Tercera Etapa (Trámites Patrimoniales y de Inscripción):</strong> Es la fase final, que incluye la denuncia de bienes, el pago de tasas e impuestos, y las diligencias hasta que el juez emite la orden judicial de inscripción de la declaratoria de herederos o del testamento. Representa <strong>la mitad (1/2) restante</strong> del total de los honorarios (<strong>Art. 35 inc. a, Ley 14.967</strong>).
                </li>
              </ol>
              <p>
                En CABA, el sistema es idéntico conceptualmente, pero la división de las etapas se realiza en <strong>tercios (1/3) por cada fase</strong>, según la Ley 27.423 Nacional. Conocer estos cortes es vital por si en algún momento decidís revocarle el poder a tu abogado.
              </p>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="convenio-honorarios">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                La solución definitiva: El Convenio de Honorarios Privado
              </h2>
              <p>
                Como profesionales de las ciencias económicas y jurídicas, rechazamos someter el patrimonio de nuestros clientes a la lotería de la regulación judicial. La forma más inteligente y segura de blindar tu capital es hacer uso del <strong>principio de libre contratación</strong>.
              </p>
              <p>
                Tanto en CABA (Art. 2) como en PBA, la ley consagra expresamente que los abogados y sus clientes tienen el derecho absoluto de pactar los honorarios de mutuo acuerdo mediante un <strong>contrato privado</strong>.
              </p>
              <p>
                En nuestro estudio, la metodología exige suscribir un <strong>Convenio de Honorarios</strong> antes de ingresar la demanda. En este contrato fijamos un monto predecible y exacto, basado en el <strong>valor fiscal de los bienes</strong> y en la complejidad real de la ingeniería tributaria requerida, garantizando un <strong>ahorro masivo</strong> frente a las regulaciones de mercado.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mt-6 mb-3">
                Modalidades de pago flexibles
              </h3>
              <p>
                Un estudio jurídico moderno debe ofrecerte esquemas financieros que no te ahoguen operativamente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Esquema de cuotas fijas:</strong> Se acuerda el honorario total y se divide en cuotas mensuales mientras dura el expediente.
                </li>
                <li>
                  <strong>Pago al momento de la venta:</strong> Se realiza todo el esfuerzo judicial y el honorario se abona íntegramente el día que se vende la propiedad en la escribanía mediante un Tracto Abreviado.
                </li>
                <li>
                  <strong>Esquema mixto:</strong> Un pago inicial accesible para cubrir el trabajo operativo de la primera etapa, y el saldo restante se cancela únicamente con la orden de inscripción.
                </li>
              </ul>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="gastos-ocultos">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                La anatomía de los &quot;Gastos Ocultos&quot;: Diferenciando honorarios de aranceles estatales
              </h2>
              <p>
                Un error conceptual gravísimo es confundir los honorarios del abogado (su sueldo) con las <strong>cargas fiscales y los gastos procesales obligatorios</strong> que exige el Estado para que el expediente avance.
              </p>
              <p>
                Un presupuesto serio y transparente siempre debe detallar estas erogaciones para que la familia sepa cuánto dinero de bolsillo deberá destinar a las arcas públicas.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-[#1e293b] mt-4 mb-2">
                1. Gastos de inicio y notificaciones
              </h3>
              <p>
                En CABA, afrontarás el Bono de Derecho Fijo (obligación de los <a href="https://www.cpacf.org.ar/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">abogados matriculados en CABA</a> ante el <a href="https://www.cpacf.org.ar/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">Colegio Público de Abogados de la Capital Federal</a>), el Formulario 3003/56 y los oficios de estilo.
              </p>
              <p>
                En Provincia de Buenos Aires, al presentarse por primera vez en el expediente, el abogado debe acreditar el pago del Bono Ley 8480 y el Anticipo Jus Previsional, requeridos para el ejercicio profesional y la <a href="https://colproba.org.ar/l/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">matriculación provincial</a> ante el <a href="https://colproba.org.ar/l/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">Colegio de Abogados de la Provincia de Buenos Aires</a> y sostenimiento de la Caja de la Abogacía (Ley 6716).
              </p>

              <h3 className="text-lg md:text-xl font-bold text-[#1e293b] mt-4 mb-2">
                2. La Tasa de Justicia (El gasto de mayor impacto)
              </h3>
              <p>
                La <strong>Tasa de Justicia</strong> es el tributo que cobra el poder judicial, y su liquidación separa a los abogados convencionales de los verdaderos expertos contables.
              </p>
              <p>
                En CABA, el gravamen será del <strong>1.5%</strong> sobre la Valuación Fiscal Homogénea (VFH) más el 5% de bienes muebles.
              </p>
              <p>
                En la Provincia de Buenos Aires, al momento de denunciar los bienes para su inscripción, se debe abonar la Tasa de Justicia. La misma está fijada en el <strong>veintidós por mil (22 o/oo)</strong>, lo que equivale al <strong>2,2%</strong> sobre la valuación fiscal del inmueble ajustada por el coeficiente corrector (<strong>Art. 67, Ley Impositiva y Art. 67 CPCA</strong>).
              </p>

              <h3 className="text-lg md:text-xl font-bold text-[#1e293b] mt-4 mb-2">
                3. Sobretasa y Bienes Muebles (PBA)
              </h3>
              <p>
                A diferencia de Capital Federal, la jurisdicción bonaerense tiene recargos adicionales. Conjuntamente con la tasa, corresponde tributar una <strong>Sobretasa de Justicia equivalente al 10%</strong> del monto determinado para la Tasa de Justicia.
              </p>
              <p>
                Además, al valuar inmuebles en PBA, la práctica procesal exige adicionar un <strong>10% al valor del mismo</strong> en concepto de bienes muebles presuntos.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-[#1e293b] mt-4 mb-2">
                4. Impuestos Provinciales (ITGB)
              </h3>
              <p>
                Dependiendo de la fecha de fallecimiento del causante y de las exenciones vigentes, podría corresponder la liquidación y pago del <strong>Impuesto a la Transmisión Gratuita de Bienes (ITGB)</strong>, un impuesto provincial administrado por ARBA.
              </p>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="tracto-abreviado">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                Alternativa de ahorro extremo: Venta por Tracto Abreviado
              </h2>
              <p>
                Si tu intención y la de tus hermanos no es quedarse a vivir en la casa heredada, inscribirla a nombre de ustedes es un desperdicio total de dinero en tasas y honorarios de gestoría registral.
              </p>
              <p>
                Para aquellos herederos que no desean conservar el inmueble sino venderlo inmediatamente, la legislación registral ofrece una herramienta que reduce costos y tiempos procesales. Conforme lo establece la <strong>Ley 17.801 (Art. 16)</strong>, es posible realizar la <strong>venta por Tracto Abreviado</strong>. Para profundizar en este procedimiento, podés consultar la <a href="https://telegra.ph/Sucesiones-en-CABA-Gu%C3%ADa-Definitiva-Costos-Reales-y-Estrategias-para-Vender-por-Tracto-Abreviado-08-30" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">guía definitiva sobre costos reales de sucesiones</a> con <a href="https://telegra.ph/Sucesiones-en-CABA-Gu%C3%ADa-Definitiva-Costos-Reales-y-Estrategias-para-Vender-por-Tracto-Abreviado-08-30" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">estrategias para el tracto abreviado</a> y acceder a la <a href="https://substack.com/home/post/p-212186267" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">Guía Definitiva 2026: ¿Cómo vender una propiedad heredada en CABA sin inscribirla? El Tracto Abreviado Explicado</a>.
              </p>
              <p>
                Esta figura de vanguardia permite que el escribano autorizante inscriba la transferencia directamente desde el nombre del causante hacia el tercero comprador. El notario se basará en la orden judicial de inscripción contenida en el expediente (verificado mediante el archivo &quot;RN944-2003-dr-dodda_merged.pdf&quot;).
              </p>
              <p>
                Esto evita tener que inscribir primero el inmueble a nombre de los herederos y luego a nombre del comprador, ahorrando el pago de dobles aranceles registrales. Maximizás la ganancia de la <strong>sucesión ab intestato</strong> al instante.
              </p>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="red-flags">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                3 Red Flags para detectar presupuestos legales abusivos
              </h2>
              <p>
                El mercado legal está lleno de trampas para clientes desinformados. Antes de entregarle la documentación de tu familia a cualquier profesional, prestá atención a estas tres señales de alerta roja:
              </p>
              <div className="space-y-4 my-6">
                <div className="p-4 bg-[#fef2f2] border-l-4 border-[#ef4444] rounded-r">
                  <p className="font-bold text-[#991b1b] mb-1">
                    1. &quot;Te cobro poco para iniciar y después arreglamos&quot;
                  </p>
                  <p className="text-[#7f1d1d] text-sm leading-relaxed">
                    Es la estafa más antigua. Como no firmaste un convenio con un valor cerrado, una vez que sale la declaratoria de herederos, el profesional te presentará tasaciones inmobiliarias de mercado (amparándose en la ley) y pedirá regulaciones del 15%. Quedarás rehén.
                  </p>
                </div>
                <div className="p-4 bg-[#fef2f2] border-l-4 border-[#ef4444] rounded-r">
                  <p className="font-bold text-[#991b1b] mb-1">
                    2. Se niega a firmar un Convenio de Honorarios
                  </p>
                  <p className="text-[#7f1d1d] text-sm leading-relaxed">
                    Si el abogado rechaza poner los honorarios por escrito y detallar las formas de pago, tu patrimonio está en riesgo inminente. Un profesional ético siempre brinda previsibilidad escrita.
                  </p>
                </div>
                <div className="p-4 bg-[#fef2f2] border-l-4 border-[#ef4444] rounded-r">
                  <p className="font-bold text-[#991b1b] mb-1">
                    3. Desconoce la ingeniería contable
                  </p>
                  <p className="text-[#7f1d1d] text-sm leading-relaxed">
                    Si el abogado no sabe explicarte la diferencia entre el ITI y el Impuesto Cedular a las Ganancias ante la AFIP, o no sabe auditar el ITGB de ARBA, terminarás pagando fortunas en retenciones al momento de la escrituración.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-10 border-[#e2e8f0]" />

            <section id="conclusion">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-8 mb-4">
                Conclusión y el primer paso estratégico
              </h2>
              <p>
                En conclusión, el <strong>costo total de un proceso sucesorio</strong> en la Provincia de Buenos Aires es una suma de los honorarios profesionales (del 6% al 20%) y las cargas fiscales (Tasa de Justicia, Sobretasa, aportes y edictos), calculados en base a la valuación fiscal o valor real de los bienes. En CABA, rigen principios similares bajo la Ley 27.423.
              </p>
              <p>
                El siguiente paso procesal lógico para los interesados es reunir la <strong>documentación vital</strong> (partidas de defunción, títulos de propiedad y actas de matrimonio/nacimiento que acrediten el vínculo).
              </p>
              <p>
                Luego, deben consultar a un letrado matriculado para que confeccione un presupuesto formal y proceda con el sorteo de la demanda de apertura (<strong>Art. 724 CPCCBA</strong>).
              </p>
              <p>
                No pongas en riesgo el patrimonio de tu familia. Si querés iniciar tu proceso sucesorio con transparencia financiera absoluta, te invitamos a consultar a nuestro <a href="https://www.sucesionescaba.ar/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">estudio jurídico especialista en sucesiones</a> en <a href="https://www.sucesionescaba.ar/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">sucesionescaba.ar</a>. Hacé clic en nuestro botón de WhatsApp. Analizaremos hoy mismo la valuación fiscal de tus inmuebles para darte un presupuesto cerrado, exacto y sin sorpresas, ya sea en Capital Federal o en Provincia.
              </p>
            </section>

            {/* Author Box - Semantic Aside */}
            <aside className="my-12 p-6 md:p-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#0369a1] text-white flex items-center justify-center font-bold text-xl shrink-0">
                  EV
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">
                    Sobre el Autor
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Este artículo fue redactado por Ezequiel Villagra, Abogado y Contador Público Nacional. Para iniciar trámites o consultas, visite nuestro <a href="https://www.sucesionescaba.ar/" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] font-semibold underline decoration-[#38bdf8] underline-offset-2 hover:text-[#0369a1]">estudio jurídico especialista en sucesiones en CABA</a>.
                  </p>
                </div>
              </div>
            </aside>
          </article>
        </main>

        <footer className="border-t border-[#e2e8f0] bg-white py-8 px-6 text-center text-xs text-[#64748b]">
          <div className="max-w-4xl mx-auto space-y-2">
            <p>
              © 2026 Sucesiones CABA & PBA • Guía Especializada de Honorarios y Derecho Sucesorio en Argentina.
            </p>
            <p>
              Información legal y fiscal de carácter orientativo sujeta a las leyes 27.423 (Nacional / CABA) y 14.967 (PBA).
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
