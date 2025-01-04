# Documentação B.O.B Recode

## Stacks Utilizadas

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [SASS](https://sass-lang.com/)
- [Liquid](https://shopify.github.io/liquid/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JQuery](https://api.jquery.com/)
- [Slick](https://kenwheeler.github.io/slick/)
- [Metodologia BEM](https://en.bem.info/methodology/quick-start/)

## Download e instalação

### - Download do Tema

Navegue até o diretório onde ficará armazenada a pasta com os arquivos do tema e então clone o repositório com o comando:  
 `git clone git@bitbucket.org:robsonss/b.o.b-infinity-api.git`

### - Instalação do ThemeKit

#### Windows

Instale o Theme Kit com [Chocolatey](https://chocolatey.org/) executando o seguinte comando: <br>
`choco install themekit`

#### Linux

Use o seguinte script de instalação para baixar e instalar automaticamente a versão mais recente do Theme Kit: <br>
`curl -s https://shopify.dev/themekit.py | sudo python3`

#### MacOs

Use o [Homebrew](https://brew.sh/) para instalar o Theme Kit executando os seguintes comandos: <br>
`brew tap shopify/shopify` <br>
`brew install themekit`

## Ambiente de desenvolvimento

Para iniciar o ambiente de desenvolvimento altere no arquivo *config.yml* o `theme_id` com o id do tema que deseja customizar e rode o comando: <br>
`theme watch` para temas não publicados ou `theme watch --allow-live` para customizar o tema em produção. [Comandos ThemeKit](https://shopify.dev/docs/themes/tools/theme-kit/command-reference)
