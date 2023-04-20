const profesores= [
    {
        id: 1,
        name: "ALEJANDRA <br> SANMILLAN",
        materia: "HTML",
        img: 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/16/35/1024x1024/square-original-573cdd52ba3fpareja-sexo-mente-ok-tu-rostro-habla-por-ti-12718540-1-esl-es-tu-rostro-habla-por-ti-jpg.jpg?resize=1200:*',
    },
    {
        id: 2,
        name: "GONZALO EZEQUIEL BETTI",
        materia: "CSS",
        img: "https://crehana-blog.imgix.net/media/filer_public/e3/d1/e3d13ef9-e5a1-46bb-8727-24446dfb55d1/rostro_rectangular.jpg?auto=format&q=50" 
    },
    {
        id: 3,
        name: "GERSON <br> AGÜERO",
        materia: "CSS",
        img: "https://modaellos.com/wp-content/uploads/2022/07/rostro-masculino-barba.png"
    },
    {
        id: 4,
        name: "MATIAS RICARDO FIGUEROA",
        materia: "Uñas",
        img: "https://img.freepik.com/foto-gratis/hombre-joven-guapo-nuevo-corte-pelo-estilo_176420-19636.jpg"
    },
    {
        id: 5,
        name: "CELESTE <br> RODRIGUEZ",
        materia: "CSS",
        img: "https://www.publimetro.cl/resizer/oB82kucbaMlMhsvBxvzwIjUXJAo=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/EE5G5BOLLNETDMOMLQJMMJEGTE.jpg"
    },
    {
        id: 6,
        name: "NICOLAS <br> ROSANE",
        materia: "CSS",
        img: "https://img.freepik.com/foto-gratis/concepto-emociones-personas-foto-cabeza-hombre-guapo-aspecto-serio-barba-confiado-decidido_1258-26730.jpg"
    }
]

let card = document.getElementById("card-template");

profesores.map((x) => {
    card.innerHTML +=`
    <div class="col">
    <div class="card">
        <img src="${x.img}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
        <h5 class="card-title text-center text-primary">${x.name}</h5>
        <p class="card-text">Nuestros profesores de Codecourses son expertos en sus desarrollo de software, con amplia experiencia en la enseñanza y un enfoque práctico para el aprendizaje. Aprende de los mejores y mejora tus habilidades en programación, diseño web y más. ¡Inscríbete hoy y alcanza tus metas con nuestros talentosos profesores!</p>
        </div>
    </div>
    </div>
    `;
});

const formularioUsuarios = document.querySelector("#formularioUsuarios")

formularioUsuarios.addEventListener("submit",(event) =>{
    event.preventDefault()
    console.log(formularioUsuarios.seleccione.value)
})

const tarjetasDiv = document.getElementById("tarjetas");

const tarjetasDatos = [
  {
    imagen: "https://i.ibb.co/k2g4yVc/751768-27d8.jpg",
    texto: "Tarjeta 1",
  },
  {
    imagen: "https://i.ibb.co/svv9dbB/763172-d61c-4.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/Sc58f1w/1192848-e63a.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/S6jx3DB/1471126-4841-4.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/z8Dk2jp/1539258-ac4e-2.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/Rycj4fb/2544807-f6c0-2.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/TrVQKMW/2801382-452d-2.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/J7TN3Sd/3109474-6f39-6.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/W3cSXwT/3875746-161e.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/jLzTLrr/4197094-f0d9.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/zfTjLVR/4371056-5f97.jpg",
    texto: "Tarjeta 2",
  },
  {
    imagen: "https://i.ibb.co/0hLjNc4/4503440-fc76-3.jpg",
    texto: "Tarjeta 2",
  },
];

for (const tarjeta of tarjetasDatos) {
  const tarjetaDiv = document.createElement("div");
  tarjetaDiv.classList.add("col");

  tarjetaDiv.innerHTML = `
  <div class="card h-100" style="width: 300px;">
      <img src="${tarjeta.imagen}" class="card-img-top" alt="Imagen de la tarjeta">
      <div class="card-body">
        <p class="card-text">${tarjeta.texto}</p>
      </div>
    </div>
  `;

  tarjetasDiv.appendChild(tarjetaDiv);
}
