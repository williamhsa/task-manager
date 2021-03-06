// CRUD create read update delete

// const mongodb = require('mongodb') // importando o mongodb, é um drive nativo da empresa MongoDB, permitindo que nos conectamos a banco de dados MongoDB a partir do nodeJS
// const MongoClient = mongodb.MongoClient //MongoClient vai nos dar acesso a funcao necessaria para conectar ao banco de dados, para que possamos executar nossas quatro operacoes do CRUD
// const ObjectID = mongo.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

/*const id = new ObjectID()
console.log(id)
console.log(id.id) //buffer com binarios
console.log(id.getTimestamp())
console.log(id.id.length) // tamanha original
console.log(id.toHexString().length)*/

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  console.log('Connected correctly!')
  const db = client.db(databaseName)

  // db.collection('users').findOne({ name: 'Isa', age: 1}, (error, user) => {
  //   /*
  //   * se no collection possui dados iguais, este metodo vai me retornar o primeiro.
  //   * */
  //   if (error) return console.log('Unable to fetch', error)
  //   console.log(user)
  //
  // })

  db.collection('users').findOne({ _id: new ObjectID('5fe9cfa0cb0fa44a94672c1d')}, (error, user) => {
    /*
    *  {_id: '5fe9cfa0cb0fa44a94672c1d'} procurar _id deste modo é errado
    * */
    if (error) return console.log('Unable to fetch', error)
    console.log('findOne -> ', user)

  })

  // find return a Curso, que possui diferentes metodos.
  db.collection('users').find({ age: 28}).toArray((error, users) => {
    console.log(users); // me retona um array com todos os resultados encontrados dessa collection
  })

  db.collection('users').find({ age: 28}).count((error, count) => {
    console.log(count);
  })


  // challenge time
  db.collection('tasks').findOne({ _id: new ObjectID('5fea7b97469efc29792765ac')}, (error, task) => {
    if (error) return console.log('Unable to fetch', error)
    console.log('challenge 1 -> ', task)

  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    console.log(tasks);
  })

})


/*
  INSERT DATA (COLLECTONS) ON MONGODB

  db.collection('users').insertOne({
    _id: id,
    name: 'William',
    age: 28,
  }, (error, result) => { // esse calback d0 collection sera chamado assim que essa operacao for concluida. result.ops é basicamente a unica propriedades que vamos usar que contem todos os documentos que foram inseridos.

    if (error) return console.log('Unable to insert user!')

    console.log(result.ops);
  })*/

/*db.collection('users').insertMany([
  {
    name: 'Isa',
    age: 26
  },
  {
    name: 'Tupa',
    age: 2
  }
], (error, result) => {
  if (error) return console.log('Unable to insert documents!')
  console.log(result.ops)
})*/

/*db.collection('tasks').insertMany([
  {
    description: 'task one',
    completed: true
  },
  {
    description: 'task two',
    completed: false
  },
  {
    description: 'task three',
    completed: true
  }
], (err, result) => {
  if (err) return console.log('Unable to insert tasks!')
  console.log(result.ops)
})*/