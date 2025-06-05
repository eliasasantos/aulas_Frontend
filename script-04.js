function maior(){
    var a = parseFloat(document.getElementById('valor01').value);
    var b = parseFloat(document.getElementById('valor02').value);
    var c = parseFloat(document.getElementById('valor03').value);
  
    if(a>b && a>c){
      document.getElementById('demo').innerHTML = " A = "+ a.toString() + "";
   
    } else if(b>a && b>c) {
    document.getElementById('demo').innerHTML = " B = "+ b.toString() + "";
    } else if(c>a && c>b) {
        document.getElementById('demo').innerHTML = " C = "+ c.toString() + "";
    }
}