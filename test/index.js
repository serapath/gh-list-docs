var suites = [
  require('./test1')
]

var test, suite, name, next = true
console.log('before')
while (next && (suite = suites.pop())) {
  while (next && (test = suite.pop())) test(function done (err, success) {
    console.log('after')
    if (err) {
      next = false
      console.error(name, err)
    } else {
      console.log(name, success)
    }
  })
}
