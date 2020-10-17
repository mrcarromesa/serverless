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

- Baseado nos tutoriais: 
  - [AWS Lambda Functions and DynamoDB + Serverless Framework](https://medium.com/@iamNoah_/aws-lambda-functions-and-dynamodb-28ab1089061c)
  - [Serverless CRUD](https://github.com/pmuens/serverless-crud/blob/master/serverless.yml)
  - [Criando uma API RESTful em NodeJS com DynamoDB](https://medium.com/@lucassoarestech/criando-uma-api-restful-em-nodejs-com-dynamodb-6801c8f2a936)

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

- Instale o `dynamoose` para utilizar funções como dynamodb:

```bash
yarn add dynamoose 
```

- No arquivo serverless.yml vamos adicionar em `provider`:

```yml
# DynamoDB
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:DescribeTable
        - dynamodb:CreateTable
        - dynamodb:Query
        - dynamodb:Scan
        - dynamodb:GetItem
        - dynamodb:PutItem
        - dynamodb:UpdateItem
        - dynamodb:DeleteItem
      Resource: "arn:aws:dynamodb:us-east-1:*:table/*"
    # - Effect: Allow
    #   Action:
    #     - dynamodb:DescribeTable
    #     - dynamodb:CreateTable
    #     - dynamodb:Query
    #     - dynamodb:Scan
    #     - dynamodb:GetItem
    #     - dynamodb:PutItem
    #     - dynamodb:UpdateItem
    #     - dynamodb:DeleteItem
    #   Resource: "arn:aws:dynamodb:us-east-1:*:table/Users"
  # /DynamoDB
```

- Por fim criamos o `src/app/models/` e adicionamos a estrutura da tabela

```js
import dynamoose from 'dynamoose';
import { v4 } from 'uuid';

const Userschema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: v4(),
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

// -> Users será o nome da tabela
export default dynamoose.model('Users', Userschema);

```

- Para realizar operações na tabela utilizamos o controller em `src/app/controllers/`:

```js
import User from '../models/User';

class UsersController {
  async index(req, res) {
    const user = await User.scan().exec();
    return res.json(user);
  }

  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }

  async update(req, res) {
    
    const user = await User.update({id: req.params.id}, req.body);
    return res.json(user);
    
  }

  async delete(req, res) {
    await User.delete({id: req.params.id});
    return res.json({msg: 'Deleted'});
  }
}

export default new UsersController();
```

- Também adicionamos as chamadas na rota em `src/routes.js`:

```js
routes.post('/user', UsersController.store);
routes.put('/user/:id', UsersController.update);
routes.delete('/user/:id', UsersController.delete);
routes.get('/user', UsersController.index);
```

- Opcionalmente podemos ajustar as rotas do serverless.yml:

```yml
functions:
  run:
    handler: handler.run
    events:
      - http:
        path: /user
        method: POST
        cors: true
        private: true
      - http:
        path: /user
        method: GET
        cors: true
        private: true
      - http:
        path: /user/{id}
        method: PUT
        cors: true
        private: true
      - http:
        path: /user/{id}
        method: DELETE
        cors: true
        private: true
```

- Dessa forma concluímos um CRUD utilizando serverless e dynamoDB

---

## Upload arquivo para S3

- Referências:
  - [NodeJS: Uploading file to S3](https://medium.com/@masnun/nodejs-uploading-file-to-s3-cbf74c2ec984)

- Inicialmente instale o `AWS-SDK`:

```bash
yarn add aws-sdk
```

- Adicionar a lib do multer:

```bash
yarn add multer
```

- Adicionar a lib do multer-s3:

```bash
yarn add multer-s3
```

- Adicionar o plugin do serverless:

```bash
yarn add serverless-apigw-binary
```

```bash
yarn add serverless-plugin-custom-binary
```

- Nas configurações do serverless adicionar:

**Ajustar `NOME_DO_BUCKET_AQUI` conforme necessidade**

```yml
plugins:
  # upload
  - serverless-apigw-binary

custom:
  apigwBinary:
    types:           #list of mime-types
      - 'image/png'
      - 'text/html'

provider:
  # upload - ok?
  apiGateway:
    binaryMediaTypes:
      - '*/*'

resources:
  Resources:
    UploadBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: NOME_DO_BUCKET_AQUI
        AccessControl: PublicRead
        CorsConfiguration:
          CorsRules:
          - AllowedMethods:
            - GET
            - PUT
            - POST
            - HEAD
            AllowedOrigins:
            - "*"
            AllowedHeaders:
            - "*"
```

- [AccessControl](https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html)

- No arquivo `src/routes.js` adicionamos:

```js
// ...
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

// ...

// ===AJUSTAR CONFORME SEUS DADOS===
AWS.config.update({
  accessKeyId: ACCESS_KEY_ID, // ===AJUSTAR CONFORME SEUS DADOS===
  secretAccessKey: SECRET_ACCESS_KEY, // ===AJUSTAR CONFORME SEUS DADOS===
  region: REGION, // ===AJUSTAR CONFORME SEUS DADOS===
});
// /===AJUSTAR CONFORME SEUS DADOS===


const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
      s3: s3,
      bucket: 'NOME_DO_BUCKET_AQUI',
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function (req, file, cb) {
          console.log(file);
          cb(null, file.originalname); //use Date.now() for unique file keys
      }
  })
});

routes.post('/upload', upload.single('file'), function (req, res, next) {
  res.send("Uploaded!");
});
```

- Caso apague algum recurso manualmente que foi gerado via serverless, pode dá algum problema
para resolver esse problema uma solução é remover tudo e criar novamente:

```bash
serverless remove --stage STAGE_NAME
```

## Dominio

- Para criar uma url personalizada para acessar o lambda pode encontrar mais informações em:

- https://seed.run/blog/how-to-set-up-a-custom-domain-name-for-api-gateway-in-your-serverless-app.html


