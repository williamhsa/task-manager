// CRUD create read update delete

const mongodb = require('mongodb') // importando o mongodb, é um drive nativo da empresa MongoDB, permitindo que nos conectamos a banco de dados MongoDB a partir do nodeJS
const MongoClient = mongodb.MongoClient //MongoClient vai nos dar acesso a funcao necessaria para conectar ao banco de dados, para que possamos executar nossas quatro operacoes do CRUD

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  console.log('Connected correctly!')
  const db = client.db(databaseName)

  db.collection('users').insertOne({
    name: 'William',
    age: 28,
  })

})