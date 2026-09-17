# Loja da Mangueira — sistema visual atual

## Direção

Showroom técnico editorial: a página combina fotografias reais/editoriais de mangueiras, conexões e loja com tipografia de alto contraste, espaços generosos e blocos de cor industrial. A composição foi criada para comunicar confiança e ajudar a pessoa a chegar ao contato comercial com uma necessidade mais clara.

A referência ORYZO/Stanzza é usada somente como direção de ritmo, contraste, assimetria e composição. Não há uso de logo, nome, copy ou imagens da referência.

## Paleta

- Papel: `#f3f0e7`
- Papel profundo: `#e8e4d7`
- Tinta: `#1d1c1a`
- Texto suave: `#4c4a44`
- Texto muted: `#716d63`
- Linha: `rgba(29, 28, 26, 0.18)`
- Linha forte: `rgba(29, 28, 26, 0.38)`
- Oxide: `#bd654a`
- Oxide escuro: `#82422f`
- Slate: `#7e899d`
- Sage: `#b8c0af`
- Escuro: `#211f1c`

## Tipografia

- Display: pilha `ui-serif`, `Georgia`, `Times New Roman`, serif; títulos grandes, leves e com tracking negativo.
- Corpo: `Manrope`, carregada do Google Fonts, com fallback para system-ui.
- Labels e metadados: `DM Mono`, com fallback monoespaçado, em caixa alta.

## Estrutura visual

- Cabeçalho fixo com logo da Loja da Mangueira, localização `SP / BR` e menu.
- Hero em tela cheia com quatro fotos locais da fachada, alternadas a cada 5 segundos.
- Lente radial translúcida somente atrás do conteúdo textual do hero para reforçar a leitura sem esconder o fundo.
- Diferenciais com grade editorial, linha técnica e benefícios comerciais.
- Portfólio em mosaico de cinco fotos, com cards grande, vertical, detalhe, largo e quadrado.
- Destaques técnicos em dois cards assimétricos, com cantos amplos, cores oxide/slate e textos centralizados.
- Aplicações organizadas em lista por ambientes profissionais.
- Seção institucional escura com nova foto interna da loja e indicadores `SP`, `B2B` e `1:1`.
- Contato final em oxide com CTA para WhatsApp e dados provisórios identificados.

## Assets em uso

- `logo-loja-da-mangueira.png`: marca usada no cabeçalho e no rodapé.
- `storefront-01.png` a `storefront-04.png`: slideshow do hero.
- `portfolio-hydraulic-blue.png`: card principal de hidráulica.
- `portfolio-hydraulic-detail.png`: detalhe técnico de mangueira hidráulica.
- `portfolio-industrial-multipurpose.png`: mangueira multipropósito.
- `portfolio-industrial-rolls.png`: rolos de mangueiras industriais.
- `portfolio-industrial-markings.jpeg`: detalhe com marcações de aplicação.
- `feature-hydraulic.png` e `feature-industrial.png`: destaques técnicos.
- `about-store-interior.png`: seção institucional.

## Movimento e interação

- Slideshow do hero com intervalo de 5 segundos; pausa quando a seção sai da viewport ou a aba fica oculta.
- Revelações de conteúdo com `IntersectionObserver`.
- Menu mobile com abertura em overlay e fechamento por link, Escape ou redimensionamento.
- Indicador de seção ativa na navegação.
- Hover com deslocamento sutil em botões e zoom mínimo nas fotos do mosaico.
- `prefers-reduced-motion` remove autoplay, deslocamentos e transições espaciais.
- Não há vídeo ativo na versão atual.

## Acessibilidade e responsividade

- Skip link para o conteúdo principal.
- Foco visível em links e botões.
- Imagens com textos alternativos descritivos quando são informativas; imagens decorativas do hero usam `alt` vazio.
- Layout validado em desktop e mobile, sem rolagem horizontal.
- Navegação funciona sem WordPress, backend ou dependência de build.

## Restrições

- HTML/CSS/JS estático.
- Contatos, endereço e horários permanecem provisórios até confirmação.
- Não adicionar certificações, números, clientes, depoimentos ou garantias sem fonte aprovada.
