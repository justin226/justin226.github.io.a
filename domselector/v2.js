function get(q) {
  if (q.slice(0, 1) == "#") {
    return document.getElementById(q.slice(1, q.length));
  }
  if (q.slice(0, 1) == ".") {
    return document.getElementsByClassName(q.slice(1, q.length));
  }
  if (q.slice(0, 1) !== "#" && q.slice(0, 1) !== ".") {
    return document.getElementsByTagName(q);
  }
}
var opGet = {
  remove: function(query) {
    try {
      document.body.removeChild(get(q))
    } catch (err) {
      try {
        document.head.removeChild(get(q));
      } catch (err) {
        document.removeChild(get(q));
      }
    }
  },
  hide: function(query) {
    document.getElementById(query).style.display = "none";
  },
  showBlock: function(query) {
    document.getElementById(query).style.display = "block";
  },
  showInline: function(query) {
    document.getElementById(query).style.display = "inline";
  },
  showInlineBlock: function(query) {
    document.getElementById(query).style.display = "inline-block";
  },
  val: function(query, val) {
    document.getElementById(query).value = val;
  },
  html: function(query, inner) {
    document.getElementById(query).innerHTML = inner;
  }
}
var mousedown = false;
document.addEventListener("mousedown", function() {
  mousedown = true;
});
document.addEventListener("mouseup", function() {
  mousedown = false;
});
