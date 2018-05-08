function countLetters(param) {
  param = param.replace(/ /g, "");
	var output = {};
  for (var i = 0; i < param.length; i++) {
    if (param[i] in output) {
      output[param[i]] += 1;
    } else {
      output[param[i]] = 1;
    }
  } return output;
}





console.log(countLetters("lighthouse in the house"));