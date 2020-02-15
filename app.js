const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

const db = mongoose.connection;// Получение подключения по умолчанию
db.on('error', console.error.bind(console, 'MongoDB connection error:')); // Привязать подключение к событию ошибки  (получать сообщения об ошибках подключения)

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

//////////////////////////////
////////////// aboutvit
app.get('/aboutvit', function(req, res) {
  db.collection('aboutvit').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})


app.get('/vitmain', function(req, res) {
  db.collection('vitmain').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

// app.get('/aboutvit', function(req, res) {
  // db.collection('aboutvit').find(function (err, docs) {   //передать данные не как массив, а как обьект
  // if(err) {
  // console.log(err);
  // return res.sendStatus(500);
  // }
  // res.send(docs);
  // })
// })

/////////// afisha
app.get('/events', function(req, res) {
  db.collection('events').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/afisha', function(req, res) {
  db.collection('afisha').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

///////////////news

app.get('/newskorotko', function(req, res) {
  db.collection('newskorotko').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/newsvitandobl', function(req, res) {
  db.collection('newsvitandobl').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/one', function(req, res) {
  db.collection('one').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/two', function(req, res) {
  db.collection('two').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/three', function(req, res) {
  db.collection('three').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/threenews', function(req, res) {
  db.collection('threenews').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/news', function(req, res) {
  db.collection('news').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

/////////// oneofsix
app.get('/aboutvit6', function(req, res) {
  db.collection('aboutvit6').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/afisha6', function(req, res) {
  db.collection('afisha6').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/job6', function(req, res) {
  db.collection('job6').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/news6', function(req, res) {
  db.collection('news6').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/sport6', function(req, res) {
  db.collection('sport6').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/transport6', function(req, res) {
  db.collection('transport6').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/podr', function(req, res) {
  db.collection('podr').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

///////////////// places

app.get('/vit', function(req, res) {
  db.collection('vit').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

//////////////// sport6

app.get('/rez', function(req, res) {
  db.collection('rez').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/sport', function(req, res) {
  db.collection('sport').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

///////////////////////


app.get('/aboutus', function(req, res) {
  db.collection('aboutus').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/center', function(req, res) {
  db.collection('center').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})


app.get('/contacts', function(req, res) {
  db.collection('contacts').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/footer', function(req, res) {
  db.collection('footer').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})
  
app.get('/job', function(req, res) {
  db.collection('job').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

//////////////////////

app.get('/imgpl', function(req, res) {
  db.collection('imgpl').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

app.get('/vit', function(req, res) {
  db.collection('vit').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

//////////////

app.get('/menu', function(req, res) {
  db.collection('menu').find().toArray(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})

/////////////////////

// app.get('/souvenirs', function(req, res) {
//   db.collection('souvenirs').find().toArray(function (err, docs) {
//   if(err) {
//   console.log(err);
//   return res.sendStatus(500);
//   }
//   res.send(docs);
//   })
// })

app.get('/souvenirs', function(req, res) {
  db.collection('souvenirs').find(function (err, docs) {
  if(err) {
  console.log(err);
  return res.sendStatus(500);
  }
  res.send(docs);
  })
})









