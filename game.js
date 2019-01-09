$(document).ready(function() {


  function randomInt(x=false) {
    if (x === false) {x = colors.length}
    return Math.floor(Math.random()*x);
  }

  function scrambleList(listToScramble) {
    // does not modify an existing list, but returns a scrambled list. So in order
    // to use function call ala "colors = scrambleList(colors)", rather than
    // "scrambleList(colors)"
    let copy = [...listToScramble]                            // make a copy
    let scrambledList = []                                    // return variable
    for (let i in listToScramble) {
      let listElement = copy.splice(randomInt(copy.length),1) // get random list element & remove from copy of master list
      listElement.toString()                                  // it comes off as an array of size 1, so must make it explicitly a string
      scrambledList.push(listElement)                         // push formatted list element to returned list
    }
    return scrambledList
  }

  function drawColorWords(words,wordColors,location) {
    // words IS an array, and we have to use a loop
    if (words.length !== wordColors.length) {return}          // arrays are different lengths. Something is wrong
    for (let i = 0; i < words.length; i++) {
      let newWord = $('<ul>')
      newWord.text(words[i])
      newWord.css('color',wordColors[i])
      newWord.attr('color',words[i])
      newWord.appendTo($(location))
      newWord.on('click',testClick)
    }
  }

  function testClick() {
    console.log($(this).attr('color'))
    if ($(this).attr('color') == $('#target').attr('color')) {
      alert('You won!')
    } else {
      alert('You lose!')
    }
    $('#color-picker').empty()
    $('.card-title').empty()
    main()
  }

  function main() {
    // create variables & lists
    var colors = ["brown","blue","magenta","teal","coral","black"]
    let targetColorWord = colors[randomInt(colors.length)]
    let colorOfTargetColorWord = colors[randomInt(colors.length)]
    let colorWords = scrambleList(colors)
    let colorOfColorWords = scrambleList(colors)
    // draw target words
    let target = $('<div>').text(targetColorWord).css('color',colorOfTargetColorWord)
    target.attr('color',colorOfTargetColorWord).appendTo('.card-title')
    target.attr('id','target')
    // draw color word list
    drawColorWords(colorWords,colorOfColorWords,'#color-picker')
  }

    main()
  // onclick

})
