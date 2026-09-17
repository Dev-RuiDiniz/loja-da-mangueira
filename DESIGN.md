# Loja da Mangueira — sistema visual

## Direção

Catálogo de campo editorial: imagens de conexões, terminais e ambientes industriais funcionam como prova visual enquanto a rolagem organiza a narrativa. A referência Stanzza inspira ritmo, espaço negativo, composição por contato sheet e cards de cena; não há uso de marca, copy ou ativos da referência.

## Paleta

- Papel: `#f3f0e7`
- Papel profundo: `#e8e4d7`
- Tinta: `#1d1c1a`
- Texto secundário: `#4c4a44`
- Linha: `rgba(29, 28, 26, 0.18)`
- Oxide: `#bd654a`
- Slate: `#7e899d`
- Sage: `#b8c0af`
- Escuro: `#211f1c`

## Tipografia

- Display: pilha `ui-serif`, `Georgia`, serif; títulos grandes, leves, com tracking óptico moderado.
- Corpo: `Manrope` com fallback para system-ui.
- Labels: `DM Mono` com fallback monoespaçado, somente para índices, metadados e navegação técnica.

## Composição

- Grade vertical e linha central muito sutis sobre superfícies de papel.
- Hero com contact sheet industrial e título central como primeiro ponto de leitura.
- Diferenciais em palco sticky para transformar rolagem em composição.
- Portfólio em linhas técnicas, sem cards repetitivos; imagem aparece como resposta ao foco/hover.
- Destaques em dois cards assimétricos com cantos curvos, cores muted e mídia em destaque.
- Contato em oxide para criar um fechamento claro e acionável.

## Movimento

- Momento autoral: montagem escalonada do contact sheet e do título do hero.
- Continuidade: parallax vertical limitado no collage e palco sticky de diferenciais.
- Revelação: linhas do catálogo entram por clip-path; cards de destaque chegam com escala mínima.
- Feedback: botão do vídeo comunica reproduzir/pausar e o vídeo pausa fora do viewport.
- Redução: `prefers-reduced-motion` remove deslocamento, autoplay e entradas espaciais sem esconder conteúdo.

## Restrições

- HTML/CSS/JS estático, sem backend ou dependência de WordPress.
- Contatos e localização permanecem provisórios até confirmação.
- Não inventar certificações, depoimentos, números ou especificações além da copy aprovada.
