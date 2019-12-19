function get(q){
  if(q.slice(0, 1) == "#"){
    return document.getElementById(q.slice(1, q.length));
  }
  if(q.slice(0, 1) == "."){
    return document.getElementsByClassName(q.slice(1, q.length));
  }
  if(q.slice(0, 1) !== "#" && q.slice(0, 1) !== "."){
    return document.getElementsByTagName(q);
  }
}
