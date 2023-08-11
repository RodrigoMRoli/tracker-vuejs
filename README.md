# Formação em VueJS + Typescript

Aqui vou resumir algumas anotações sobre a formação.
Geralmente coisas novas e conceitos que não conheço.
Partes técnicas vou resumir em comentários na documentação dos códigos em específico que quero saber.
Então sempre passar o mouse nos métodos e propriedades que precisar dar uma relembrada.

### Components

O padrão que eu entendi sobre como desenvolver um componente (não utilizando a tag setup no script):
    1. Crie o template html do molde do componente que queira utilizar 
    2. Crie o script
    3. Importe o defineComponent do vue
    4. exporte o defineComponent na seguinte forma: 
        {
            name: nome do componente,
            components: os componentes que estará utilizando dentro desse componente,
            methods: os métodos que estará utilizando dentro desse componente,
            props: as propriedades que você estará esperando vir de fora quando esse componente for utilizado,
            data () return {variáveis}: armazenamento de variáveis locais no componente
            computed: quando você começa a perder mão to tamanho do script que esta dentro do template exportando a lógica
            para o computed é uma boa pro template continuar coeso. ref: https://stackoverflow.com/questions/44350862/methods-vs-computed-in-vue

        }

###### slot

    <slot></slot>

Você você cria um componente e você que ele seja uma div box por exemplo com html, outros components dentro dele e você utiliza ele em outro componente. 
Você precisa especificar que dentro dentro dele você permite a entrada de novos componentes

### v-functions

###### v-for

bem autoexplicativo
###### v-model

o v-model serve para linkar um valor de um elemento para a dados do script

### Bibliotecas

#### Vue Router

Autoexplicativo.

###### Instalação:

```
npm i vue-router@4
```

    na versão 4 que é a versão para o Vue3

```
npm i vuex@next
```

    na versão next que é a versão para o Vue3

### Arquitetura

Arquitetura MVC básica do VueJS

```bash
├── src
│   ├── assets
│   │   └── assets do software
│   ├── components
│   ├── interfaces
│   ├── router
│   │   └── aqui encontram-se as rotas da aplicação
│   ├── store
│   │   └── tratamento de estados comumente usado pelo vuex
│   └── view
├── App.vue
├── main.ts
├── style.css
└── vite-env.d.ts
```