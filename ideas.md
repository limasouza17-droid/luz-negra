# Luz Negra — Direção de design

## Abordagens consideradas

### Tema: Arquivo de Campo UV
Uma experiência editorial científica, escura e tátil, com contrastes entre papel, tinta violeta e diagramas de laboratório. A intenção é fazer o visitante sentir que abriu um caderno de investigação.
**Probability:** 0.07

### Tema: Prismas em Movimento
Uma narrativa mais luminosa, baseada em faixas espectrais, refrações e transições cromáticas. A intenção é traduzir visualmente a passagem da radiação invisível para a luz visível.
**Probability:** 0.03

### Tema: Laboratório Pós-Industrial
Uma interface experimental com painéis técnicos, tipografia monoespaçada e sinais de instrumentação. A intenção é criar uma atmosfera de estação de pesquisa contemporânea.
**Probability:** 0.09

## Abordagem escolhida: Arquivo de Campo UV

### Design Movement
Neo-editorial científico: uma fusão entre cadernos de campo, pôsteres de museu de ciência e interfaces de instrumentação analógica.

### Core Principles
1. O conteúdo aparece como uma investigação guiada, nunca como uma parede de texto.
2. O preto é material, com granulação, sombras e halos UV; não é apenas uma cor de fundo.
3. O violeta deve indicar descoberta e transição, enquanto o âmbar marca evidências e ações.
4. Cada interação deve explicar algo: arrastar, ativar, explorar e responder são partes da narrativa.

### Color Philosophy
O preto profundo cria a sensação de ambiente antes da descoberta. Violeta ultravioleta (#8B5CF6) representa a radiação invisível que atravessa a experiência; magenta-luz (#E879F9) representa a fluorescência percebida; âmbar fósforo (#F4C95D) funciona como marca de anotação e orientação. A paleta evita gradientes roxos genéricos e usa cor como código científico.

### Layout Paradigm
A página é uma sequência vertical de estações, com títulos deslocados, trilhas laterais de progresso e módulos que alternam entre texto, diagramas e interação. Em vez de centralizar tudo, cada seção tem uma âncora visual lateral e um eixo de leitura próprio.

### Signature Elements
- Corda de interruptor e lâmpada desenhadas em CSS no primeiro quadro.
- Etiquetas de evidência com numeração, microtipografia e linha de medição.
- Halos fluorescentes que surgem somente quando uma interação justifica a luz.

### Interaction Philosophy
Interações devem parecer instrumentos: o usuário puxa, alterna, investiga e confirma. Estados ativos recebem feedback visual imediato e uma explicação curta, sem depender apenas de cor.

### Animation
A entrada inicial usa uma transição física de puxar e uma mudança em três tempos: luz comum, apagão e UV. Os módulos revelam-se em deslocamentos curtos e opacidades suaves. Partículas fluorescentes se movem lentamente, com baixa frequência e respeito a `prefers-reduced-motion`. Nenhuma animação essencial depende de hover.

### Typography System
Display: Space Grotesk, em pesos 500–700, para títulos compactos e contemporâneos. Corpo: IBM Plex Sans, 400–500, para leitura científica. Microtexto: IBM Plex Mono, 500, em caixa alta e tracking amplo para coordenadas, rótulos e evidências.

### Brand Essence
Uma investigação visual interativa para estudantes que querem entender por que a luz negra revela o invisível, conectando ciência, experimentação e curiosidade. Personalidade: observadora, intrigante, precisa.

### Brand Voice
Headlines são curtas, curiosas e afirmativas. CTAs soam como ações de investigação, não como marketing. Microcopy é direta e generosa.

Exemplo de headline: “O que a luz comum não entrega?”

Exemplo de CTA: “Abrir a próxima evidência →”

### Wordmark & Logo
O símbolo é uma pequena lâmpada pendurada atravessando um círculo incompleto, como um eclipse interrompido. O wordmark “LUZ NEGRA” usa Space Grotesk com o “Z” desenhado como um feixe angular; o símbolo deve aparecer no cabeçalho e no favicon.

### Signature Brand Color
**Violeta ultravioleta — #8B5CF6**, usado como sinal proprietário de descoberta, nunca como preenchimento dominante.

## Escopo inicial implementado
Uma single-page narrative com 13 estações compactas: abertura com corda arrastável, espectro interativo, faixa visível com slider, cartões UVA/UVB/UVC, diagrama de fluorescência, modelo conceitual de matéria, laboratório virtual com luz branca/UV, experimento real com placeholders claramente identificados, tabela de resultados editável em conteúdo, aplicações, mito ou verdade e quiz final. Os resultados experimentais serão apresentados como campos a substituir pelos dados reais da turma.
