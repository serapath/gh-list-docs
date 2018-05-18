var suites = [
  require('./test1')
]

runSuite()

function runSuite (err) {
  if (err) return
  runTests(Object.entries(suites.pop() || {}), runSuite)
}

function runTests (suite, next) {
  run()
  function run (err) {
    if (err) return (fail(name, err), next(err))
    var [name, test] = suite.pop()
    if (name) return test(function done (err, msg) {
      if (err) return next(err)
      success(name, msg)
      run()
    })
    next()
  }
}

function fail (name, err) {
  var msg = document.createElement('div')
  msg.innerHTML = `<h1 style="color: red;"> ${name} : ${err} </h1>`
  document.body.appendChild(msg)
  console.error(name, err)
}

function success (name, success) {
  var msg = document.createElement('div')
  msg.innerHTML = `<h1 style="color: green;"> ${name} : ${success} </h1>`
  document.body.appendChild(msg)
  console.log(name, success)
}
