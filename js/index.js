
var calcScreen = $('#screen')
var screenValue = ''

$('#1').click(function(){
  screenValue += 1
  calcScreen.text(screenValue)
})
$('#2').click(function(){
  screenValue += 2
  calcScreen.text(screenValue)
})
$('#3').click(function(){
  screenValue += 3
  calcScreen.text(screenValue)
})
$('#4').click(function(){
  screenValue += 4
  calcScreen.text(screenValue)
})
$('#5').click(function(){
  screenValue += 5
  calcScreen.text(screenValue)
})
$('#6').click(function(){
  screenValue += 6
  calcScreen.text(screenValue)
})
$('#7').click(function(){
  screenValue += 7
  calcScreen.text(screenValue)
})
$('#8').click(function(){
  screenValue += 8
calcScreen.text(screenValue)
})
$('#9').click(function(){
  screenValue += 9
calcScreen.text(screenValue)
})
$('#0').click(function(){
  screenValue += 0
  calcScreen.text(screenValue)
})
$('#clear').click(function(){
  screenValue = ''
  calcScreen.text(screenValue)
})
$('#divide').click(function(){
  screenValue += '/'
  calcScreen.text(screenValue)
})
$('#multiply').click(function(){
  screenValue += '*'
  calcScreen.text(screenValue)
})
$('#sub').click(function(){
  screenValue += '-'
  calcScreen.text(screenValue)
})
$('#addit').click(function(){
  screenValue += '+'
  calcScreen.text(screenValue)
})
$('#equals').click(function(){
  if (screenValue.includes('/0')) {
    screenValue = 'Error'
    calcScreen.text(screenValue)
    screenValue=''
  } else {
  var result = eval(screenValue);
  screenValue = ''
  calcScreen.text(result)
  }
})
