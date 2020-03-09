module.exports = function check(str, bracketsConfig) {
  let list = []; 
  let flag = false; 
  for(let i = 0; i < str.length; i++) {
    flag = false; 
    for(let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][1]) {
        if (list[list.length - 1] == bracketsConfig[j][0]) {
          flag = true;
          list.pop();   
        }
        break;
      }
    } 
    if (!flag) {
      for(let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] == bracketsConfig[j][0]) {
          list.push(str[i]); 
          flag = true; 
          break; 
        }
      } 
    }
    if (!flag) return false; 
  }
  if (list.length == 0) return true;
  else return false; 
}