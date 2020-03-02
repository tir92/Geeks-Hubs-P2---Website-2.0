const Contacto = `
<div class="container-fluid" id=Carta> 
<div class="card mb-3" style="max-width: 750px;">
<div class="row no-gutters">
    <div class="col-md-4">
     <img src="./Imagenes/avatar-persona.jpg" class="card-img" alt="avatar">
    </div>
    <div class="col-md-8">
    <div class="card-body">
         <h5 class="card-title">Quien soy?</h5>
        <p class="card-text">Hola a todos, me presento mi nombre es Alexandru Tir.
        Soy un full stack developer que esta estudiando en la academia GeeksHubs, tengo 27 años y son de Rumania, <br> Para mas informacion teneis un formulario de contacto con el que podeis contactar conmigo y en el mas breve periodo de tiempo me pondre en contacto con ustedes. <br> <br>Si echais un ojo por mi portfolio vereis un apartado llamado proyectos en el cual podeis ver mis trabajos realizados. <br> <br>Un saludo.</p>
    </div>
    </div>
</div>
</div>
</div>

<form>
<div class="container-fluid" id=contenedor-formulario> 
<div class="form-row">
<div class="form-group col-md-6">
<label for="inputEmail4">Email</label>
<input type="email" class="form-control" id="inputEmail4">
</div>
<div class="form-group col-md-6">
<label for="inputName4">Name</label>
<input type="text" class="form-control" id="inputName4">
</div>
</div>
<div class="form-group">
<label for="inputAddress">Address</label>
<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
</div>
<div class="form-group">
<label for="inputAddress2">Where you found me ?</label>
<input type="text" class="form-control" id="inputFound" placeholder="Git, Instagram, Youtube, other?">
</div>
<div class="form-row">
<div class="form-group col-md-6">
<label for="inputCity">City</label>
<input type="text" class="form-control" id="inputCity">
</div>
<div class="form-group col-md-4">
<label for="inputState">State</label>
<select id="inputState" class="form-control">
<option selected>Choose...</option>
<option>Barcelona</option>
<option>Madrid</option>
<option>Valencia</option>
</select>
</div>
<div class="form-group col-md-2">
<label for="inputZip">Zip</label>
<input type="text" class="form-control" id="inputZip">
</div>
</div>
<div class="form-group">
<div class="form-check">
</div>
</div>
<button type="submit" class="btn btn-primary">Send.</button>
</div>
</form>`

const Formacion = `<div class="Formacion">
                    <h2> Formacion </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis adipisci accusantium fuga corrupti vitae iste, deleniti odit perferendis rem..
                    </p>
                </div>`;


const Proyectos = `<div class="Proyectos ">
                <h2> Proyecto </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam dolor ea velit repudiandae libero unde nisi numquam explicabo possimus sit odit architecto minus neque, ullam quidem deserunt adipisci impedit facilis delectus aspernatur? Minima corrupti a dignissimos reiciendis nulla magni praesentium ducimus placeat sed, distinctio, obcaecati consequatur doloribus rem nihil labore dolore! Placeat dolorum tempora deleniti? Voluptatibus cupiditate ab consectetur tempore voluptates aliquam, eius neque sunt vero quod. Magni maxime maiores consequuntur iusto minima quis voluptates amet sequi iste ex..
                </p>
            </div>`
const Experiencia = `<div class="Proyectos ">
            <h2> Experiencia </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam dolor ea velit repudiandae libero unde nisi numquam explicabo possimus sit odit architecto minus neque, ullam quidem deserunt adipisci impedit facilis delectus aspernatur? Minima corrupti a dignissimos reiciendis nulla magni praesentium ducimus placeat sed, distinctio, obcaecati consequatur doloribus rem nihil labore dolore! Placeat dolorum tempora deleniti? Voluptatibus cupiditate ab consectetur tempore voluptates aliquam, eius neque sunt vero quod. Magni maxime maiores consequuntur iusto minima quis voluptates amet sequi iste ex..
            </p>
        </div>`




const main = document.querySelector('main')
window.addEventListener('load', () => {
    if (window.location.hash === '#Experiencia') {
        main.innerHTML = Experiencia
    } else if (window.location.hash === '#Formacion') {
        main.innerHTML = Formacion
    } else if (window.location.hash === '#Poryectos') {
        main.innerHTML = Proyectos
    } else {
        main.innerHTML = Contacto
    }
})
let widthProgressBar = 0;
document.querySelector('.contactButton').addEventListener('click', () => {
    main.innerHTML = Contacto;
    window.scrollTo({
        top: 400,
        behavior: 'smooth',
    })
    setTimeout(() => {
        document.body.scrollIntoView({
            behavior: 'smooth'
        })
    }, 1000);
    history.pushState({}, '', '#');
})
document.querySelector('.formacionButton').addEventListener('click', () => {
    main.innerHTML = Formacion;
    history.pushState({}, '', '#Formacion');
})
document.querySelector('.expButton').addEventListener('click', () => {
    main.innerHTML = Experiencia;
    history.pushState({}, '', '#Experiencia');
})

document.querySelector('.proyectButon').addEventListener('click', () => {
    main.innerHTML = Proyectos;
    history.pushState({}, '', '#Proyectos');
})