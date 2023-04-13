const profesores= [
    {
        id: 1,
        name: "ALEJANDRA <br> SANMILLAN",
        materia: "HTML",
        img: './AvatarMujer',
    },
    {
        id: 2,
        name: "GONZALO EZEQUIEL BETTI",
        materia: "CSS",
        img: "/AvatarHombre"
    },
    {
        id: 3,
        name: "GERSON <br> AGÜERO",
        materia: "CSS",
        img: "/AvatarHombre"
    },
    {
        id: 4,
        name: "MATIAS RICARDO FIGUEROA",
        materia: "Uñas",
        img: "/AvatarHombre"
    },
    {
        id: 5,
        name: "CELESTE <br> RODRIGUEZ",
        materia: "CSS",
        img: "/AvatarHombre"
    },
    {
        id: 6,
        name: "NICOLAS <br> ROSANE",
        materia: "CSS",
        img: "/AvatarHombre"
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
