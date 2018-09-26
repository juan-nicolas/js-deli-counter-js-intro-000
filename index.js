function takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine){
  if (currentLine.length > 0){
    return currentLine.shift();
  } else {
    return `There is nobody waiting to be served!`
  }
}
