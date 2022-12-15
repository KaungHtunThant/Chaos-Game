i=0;

function start() {
  remove();

  const screenw = 1000;
  const screenh = 700;
  document.getElementById('container').setAttribute("style","width:"+screenw+"px;height:"+screenh+"px");
  document.getElementById('screenw').value=screenw;
  document.getElementById('screenh').value=screenh;

  const At = Math.floor(Math.random() * screenh+1);
  const Al = Math.floor(Math.random() * screenw+1);
  document.getElementById('At').value=At;
  document.getElementById('Al').value=Al;

  const Bt = Math.floor(Math.random() * screenh+1);
  const Bl = Math.floor(Math.random() * screenw+1);
  document.getElementById('Bt').value=Bt;
  document.getElementById('Bl').value=Bl;

  const Ct = Math.floor(Math.random() * screenh+1);
  const Cl = Math.floor(Math.random() * screenw+1);
  document.getElementById('Ct').value=Ct;
  document.getElementById('Cl').value=Cl;

  create_point('dot', At, Al);
  create_point('dot', Bt, Bl);
  create_point('dot', Ct, Cl);

  let centert = (At+Bt+Ct)/3;
  let centerl = (Al+Bl+Cl)/3;

  let t = centert+(centert/2) - Math.floor(Math.random() * (centert/2));
  let l = centerl+(centerl/2) - Math.floor(Math.random() * (centerl/2));
  create_point('dots', t, l);
  
  magic(t, l, At, Al, Bt, Bl, Ct, Cl);
}

function change() {
  remove();

  const screenw = document.getElementById('screenw').value;
  const screenh = document.getElementById('screenh').value;
  document.getElementById('container').setAttribute("style","width:"+screenw+"px;height:"+screenh+"px");

  const At = document.getElementById('At').value;
  const Al = document.getElementById('Al').value;

  const Bt = document.getElementById('Bt').value;
  const Bl = document.getElementById('Bl').value;

  const Ct = document.getElementById('Ct').value;
  const Cl = document.getElementById('Cl').value;

  create_point('dot', At, Al);
  create_point('dot', Bt, Bl);
  create_point('dot', Ct, Cl);

  let centert = (At+Bt+Ct)/3;
  let centerl = (Al+Bl+Cl)/3;

  let t = centert+(centert/2) - Math.floor(Math.random() * (centert/2));
  let l = centerl+(centerl/2) - Math.floor(Math.random() * (centerl/2));
  create_point('dots', t, l);
  
  magic(t, l, At, Al, Bt, Bl, Ct, Cl);
}

function create_point(id, t, l){
  const elem = document.createElement("div");
  // const Class = document.createAttribute("class");
  const ID = document.createAttribute("id");
  ID.value = id;

  elem.setAttributeNode(ID);
  elem.style.top = t+'px';
  elem.style.left = l+'px';

  const container = document.getElementById("container")
  container.appendChild(elem);
}

function remove(){
  i=999999999;
  const myNode = document.getElementById("container");
  myNode.innerHTML = '';
  const count = document.getElementById("count");
  count.innerHTML = '0';
}

function magic(t, l, At, Al, Bt, Bl, Ct, Cl){
  let intv = null;
  clearInterval(intv);
  intv = setInterval(run, 1);
  i=0;

  const count = document.getElementById("count");

  function run(){
    console.log("ran");
    if(i>2000){
      clearInterval(intv);
    }
    else{
      rand = Math.floor(Math.random() * 6);
      
      if (rand<2) {
        t = t+((At-t)/2);
        l = l+((Al-l)/2);
      }

      else if (rand<4) {
        t = t+((Bt-t)/2);
        l = l+((Bl-l)/2);
      }

      else {
        t = t+((Ct-t)/2);
        l = l+((Cl-l)/2);
      }
      create_point('dots', t, l);
    }
    i++;
    count.innerHTML = i;
  }
}