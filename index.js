function takeANumber(line, newName){
  line.push(newName);
  return `Welcome, ${newName}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0){
    return `Currently serving ${line.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine()
