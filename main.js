const listaFilmes = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/Edwardscissorhandsposter.JPG/250px-Edwardscissorhandsposter.JPG",
  "https://br.web.img3.acsta.net/medias/nmedia/18/91/30/40/20328542.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zCDnvN_5J3Ien-Z9H1jrOt20NOGN15IbZkh6gFFY0Ma-zFHe",
  "https://br.web.img2.acsta.net/c_310_420/pictures/210/124/21012465_2013061319170245.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/86/98/32/19870786.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlC1BU-d_49KZvZrLQ6vhp_dsWObCyp9a7UuJe0-8tpQcJ3fM",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/31/05/20139182.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FENVsmSINdlIk-sRjwF6ar5kDJkFe3Yuq_whOOWL0oT4N-Yp",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSj5tAoD0XV1ryf95-PQCcuRyifKlqmudtS9kZBQeSpzLHEi7c1",
];


const listafilmes = [];
for (let i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

function adicionarFilme(){
  const filmeFavorito = document.getElementById("filme").value;
  if(filmeFavorito.endsWith(".jpg")){
      listarFilmesNaTela(filmeFavorito);
  }else{
      console.error("Endereço inválido");
  }
  document.getElementById("filme").value = "";
}


function listarFilmesNaTela(filme){
  const elementoFilmeFavorito = "<img src=" + filme + ">";
  const elementoListaFilmes = document.getElementById("listaFilmes")
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
}