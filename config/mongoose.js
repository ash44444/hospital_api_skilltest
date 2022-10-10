const mongoose = require('mongoose')

//connect to DB
mongoose.connect(
  'mongodb+srv://ashish:LEo7rxsiC6NyxSeD@cluster0.n2ztjwi.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error connecting to db'))

db.once('open', function () {
  console.log('Successfully connected to db')
})
