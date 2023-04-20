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
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum soluta beatae, labore optio architecto, voluptates quos officiis consequuntur culpa nemo nam? Sapiente quae enim corporis, modi aspernatur eaque asperiores nihil.</p>
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
