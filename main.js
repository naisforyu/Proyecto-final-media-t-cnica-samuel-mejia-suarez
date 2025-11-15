// Código frontend simple para mostrar productos de ejemplo y manejar carrito básico.
// No hay persistencia real aparte de sessionStorage (demo).
const featured = document.getElementById('featured');

const sampleProducts = [
  {id:1,title:'Micrófono Condensador XLR',price:45,tag:'renta',desc:'Sonido profesional para streamers.'},
  {id:2,title:'Cámara 4K StreamCam',price:120,tag:'compra',desc:'Imagen nítida, autofocus rápido.'},
  {id:3,title:'PC Streaming RTX',price:300,tag:'renta',desc:'PC optimizada para encoding y juegos.'},
  {id:4,title:'Panel LED RGB',price:25,tag:'compra',desc:'Iluminación ajustable para tu set.'}
];

function createCard(p){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `<h3>${p.title}</h3><p class="small">${p.desc}</p><div class="price">$${p.price} <span class="small">/ día (renta)</span></div>
  <div style="margin-top:8px"><button onclick="addToCart(${p.id})">Agregar al carrito</button> <a href="../views/productos.html">Ver</a></div>`;
  return el;
}

function render(){
  if(!featured) return;
  featured.innerHTML='';
  sampleProducts.forEach(p=> featured.appendChild(createCard(p)));
}
window.addToCart = function(id){
  const p = sampleProducts.find(x=>x.id===id);
  if(!p) return alert('Producto no encontrado');
  let cart = JSON.parse(sessionStorage.getItem('cart')||'[]');
  cart.push(p);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  alert('Añadido al carrito: '+p.title);
}

document.addEventListener('DOMContentLoaded', render);
