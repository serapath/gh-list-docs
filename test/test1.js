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
