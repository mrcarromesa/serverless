# Serverless Node.js Express ES6

- Exemplo simples para craição do serverless com ES6
- Esse projeto foi baseado nos seguintes artigos:
  - [Serverless Framework ⚡️ — Criando (ou migrando) uma REST API com Express.js e AWS Lambda.](https://medium.com/@fidelissauro/serverless-framework-%EF%B8%8F-criando-ou-migrando-uma-rest-api-com-express-js-e-aws-lambda-51834740dcdb)
  - [Adding ES6 support to Serverless Framework](https://medium.com/develop-and-go/scorpion-encounters-adding-es6-support-to-serverless-framework-b1038b20f92c)

---

## Instalando o serverless

```bash
sudo yarn global add serverless
```

---

## Criar um projeto com o template aws-nodejs

```bash
serverless create --template aws-nodejs
```

- [Templates](https://www.serverless.com/framework/docs/providers/aws/cli-reference/create#available-templates)

- Para ver a lista de templates execute o comando:

```bash
serverless create --help
```

---

## Dependências para projeto para utilizar o express

```bash
yarn add serverless-http express cors source-map-support
```

## Dependências para utilizar o ES6+

- Instale as dependencias:

```bash
yarn add @babel/core @babel/preset-env babel-loader babel-plugin-source-map-support serverless-offline serverless-webpack webpack webpack-node-externals -D
```

- Crie o arquivo `.babelrc`:

```js
{
  "plugins": ["source-map-support"],
  "presets": [
      [
          "@babel/preset-env",
          {
              "targets": {
                  "node": "8.10"
              }
          }
      ]
  ]
}
```

- Crie o arquivo `webpack.config.js`

```js
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: slsw.lib.entries,
    target: "node",
    // Generate sourcemaps for proper error messages
    devtool: 'source-map',
    // Since 'aws-sdk' is not compatible with webpack,
    // we exclude all node dependencies
    externals: [nodeExternals()],
    mode: slsw.lib.webpack.isLocal ? "development" : "production",
    optimization: {
        // We do not want to minimize our code.
        minimize: false
    },
    performance: {
        // Turn off size warnings for entry points
        hints: false
    },
    // Run babel on all .js files and skip those in node_modules
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    }
};
```

---

- No arquivo `serverless.yml` precisa ter essas configurações:

```yml
plugins:
  - serverless-webpack

# Configuração do serverless-webpack
# Habilitar o auto-packing de módulos externos
custom:
  webpack:
    webpackConfig: ./webpack.config.js
    includeModules: true
```

---

### Utilizar o serverless offline

- Instalar a dependencia:

```bash
yarn add serverless-offline -D
```

- Por fim em `serverless.yml` adicionar nos `plugins`:

```yml
plugins:
  - serverless-webpack
  - serverless-offline
```

- Na sua conta da aws no menu superior SEU NOME > My Security Credentials

- Em `Your Security Credentials` no item `Access keys (access key ID and secret access key)` crie as credenciais.

- Será necessário instalar o aws cli: [Instalar a AWS CLI versão 2](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/install-cliv2.html)


- [Managing Access Keys for IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
- Nas credenciais da aws na pasta home da sua máquina ex.: `~/.aws/credentials` adicionar:

```txt
[default]
aws_access_key_id = AWS_ACCESS_AQUI
aws_secret_access_key = AWS_SECRET_AQUI


[dev]
aws_access_key_id = AWS_ACCESS_AQUI
aws_secret_access_key = AWS_SECRET_AQUI

[local]
aws_access_key_id = AWS_ACCESS_AQUI
aws_secret_access_key = AWS_SECRET_AQUI
```

---

## Estrutura do projeto

- O projeto contem toda sua estrutura dentro da pasta `src`

- A porta de entrada por assim dizer está em `./handler.js`

- E ele será o primeiro arquivo a ser chamado conforme configurado em `serverless.yml`:

```yml
functions:
  hello:
    handler: handler.run
    events:
      - http:
          path: /
          method: ANY
          cors: true
      - http:
          path: /{proxy+}
          method: ANY
          cors: true
```

---

## Utilizar o dynamoDB

- Baseado no tutorial: [AWS Lambda Functions and DynamoDB + Serverless Framework](https://medium.com/@iamNoah_/aws-lambda-functions-and-dynamodb-28ab1089061c)

**Para utilizar o DynamoDB "localmente" é necessário ter instalado o Java Runtime**

- Inicialmente instale a dependencia: 

```bash
yarn add serverless-dynamodb-local -D
```

- Adicione nos plugins do `serverless.yml`:

```yml
plugins:
  - serverless-webpack
  - serverless-offline 
  - serverless-dynamodb-local
```

- Instale a dependencia do `uuid`:

```bash
yarn add uuid
```