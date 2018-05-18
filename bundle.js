(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function xhr2 (params, callback) {
  var url = typeof params === 'string' ? params : params.url
  var method = params.method || (params.data ? 'POST' : 'GET')
  var body = params.data
  var H = params.headers ? params.headers : params.body ? {
    'X-Requested-With' :'XMLHttpRequest',
    'Content-Type'     :'application/x-www-form-urlencoded'
  } : {}
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  for (var key in H) xhr.setRequestHeader(key, H[key])
  xhr.onload = xhr.onerror = function (response) {
    var Hjson = {}, h = xhr.getAllResponseHeaders()
    ;(h.match(/([^\n\r:]+):([^\n\r]+)/g)||[]).forEach(function(item){
      var tmp = item.split(': ')
      Hjson[tmp[0]] = tmp[1]
    })
    if (callback) callback(this.response, response, xhr, Hjson)
  }
  xhr.send(body||null)
}

},{}],2:[function(require,module,exports){
var helper = require('helper')

module.exports = fetchDocs

function fetchDocs (opts) {
  return helper()
}

},{"helper":3}],3:[function(require,module,exports){
var minixhr = require('minixhr')

module.exports = helper

function helper () {
  return '' + minixhr
}

},{"minixhr":1}],4:[function(require,module,exports){
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

},{"./test1":5}],5:[function(require,module,exports){
var ghlistdocs = require('../')

module.exports = {
  'should generate array': function (done) {
    if (typeof ghlistdocs === 'function') done(null, 'success')
    else done('fail')
  }
}

/*
GENERATE SOMETHING LIKE THIS:
-----------------------------

const content = [
  { 'skillTree': "https://github.com/wizardamigos/app/blob/master/skillTree.md" },
  { "Transformation": [
    { "Colors": [
      {"Transparency": [
        { "": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson000/description.en.md" },
        { "Curriculum": [
          { "": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson000/description.en.md" },
          { "Lesson 0": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson000/description.en.md" },
          { "Lesson 1": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson001/description.en.md" },
          { "Lesson 2": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson002/description.en.md" },
          { "Lesson 3": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson003/description.en.md" },
          { "Lesson 4": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson004/description.en.md" },
          { "Lesson 5": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson005/description.en.md" },
          { "Lesson 6": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson006/description.en.md" },
          { "Lesson 7": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson007/description.en.md" },
          { "Lesson 8": "https://github.com/ethereum/solidity/tree/develop/docs" },
          { "Lesson 9": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson009/description.en.md" },
          { "Lesson 10": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson010/description.en.md" },
        ]},
        { "Exercises": [
          { "Lesson 0": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson000/description.en.md" },
          { "Lesson 1": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson001/description.en.md" },
          { "Lesson 2": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson002/description.en.md" },
          { "Lesson 3": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson003/description.en.md" },
          { "Lesson 4": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson004/description.en.md" },
          { "Lesson 5": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson005/description.en.md" },
          { "Lesson 6": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson006/description.en.md" },
          { "Lesson 7": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson007/description.en.md" },
          { "Lesson 8": "https://github.com/ethereum/solidity/tree/develop/docs" },
          { "Lesson 9": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson009/description.en.md" },
          { "Lesson 10": "https://github.com/wizardamigos/app/blob/master/curriculum/lesson010/description.en.md" },
        ]}
      ]}
      { "Gradients": [

      ]}
    ]}
  ]}

]

tutorify({ content }, function callback (err, el) {
  if (err) return document.body.innerHTML = `<h1>${err}</h1>`
  document.body.appendChild(el)
})

const content = [
  "https://github.com/wizardamigos/app/blob/master/README.md",
  "https://github.com/wizardamigos/app/blob/master/skillTree.md", [
    "https://github.com/wizardamigos/app/blob/master/curriculum/lesson000/README.en.md",
    "https://github.com/wizardamigos/app/blob/master/curriculum/lesson001/README.en.md",
    "https://github.com/wizardamigos/app/blob/master/curriculum/lesson002/README.en.md",
    "https://github.com/wizardamigos/app/blob/master/curriculum/lesson003/README.en.md",
    "https://github.com/wizardamigos/app/blob/master/curriculum/lesson004/README.en.md",
    "https://github.com/wizardamigos/app/blob/master/curriculum/lesson005/README.en.md",
    "https://github.com/wizardamigos/app/blob/master/curriculum/lesson006/README.en.md",
    "https://github.com/wizardamigos/app/blob/master/curriculum/lesson007/README.en.md",
    { 'lesson008': "https://github.com/ethereum/solidity/tree/develop/docs.md" },
    { '': "https://github.com/wizardamigos/app/blob/master/curriculum/lesson009/description.en.md" },
    { '': "https://github.com/wizardamigos/app/blob/master/curriculum/lesson010/description.en.md" },
  ]
]

const result = {
  // ....blabla
  skillTree: {
    // ....blabla
    curricullum: {
      Lesson0: `
        # foo
        * bar
        * baz

        hello **world**
      `,
      Lesson0: '... blabla',
      Lesson0: '... blabla',
      Lesson0: '... blabla',
      Lesson0: '... blabla',
      Lesson0: '... blabla',
      Lesson0: '... blabla',
      Lesson9: '... blabla',
    }
  }
}

*/

},{"../":2}]},{},[4]);
