const Contacto = `
<div class="container-fluid"> 
<div class="card mb-3" style="max-width: 540px;">
<div class="row no-gutters">
    <div class="col-md-4">
     <img src="./Imagenes/avatar-persona.jpg" class="card-img" alt="avatar">
    </div>
    <div class="col-md-8">
    <div class="card-body">
         <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
<label for="inputPassword4">Password</label>
<input type="password" class="form-control" id="inputPassword4">
</div>
</div>
<div class="form-group">
<label for="inputAddress">Address</label>
<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
</div>
<div class="form-group">
<label for="inputAddress2">Address 2</label>
<input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
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
<option>...</option>
</select>
</div>
<div class="form-group col-md-2">
<label for="inputZip">Zip</label>
<input type="text" class="form-control" id="inputZip">
</div>
</div>
<div class="form-group">
<div class="form-check">
<input class="form-check-input" type="checkbox" id="gridCheck">
<label class="form-check-label" for="gridCheck">
Check me out
</label>
</div>
</div>
<button type="submit" class="btn btn-primary">Sign in</button>
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