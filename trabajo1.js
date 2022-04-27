var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function valida_envia(){
  //valido el rut
  if (document.fvalida.rut.value.length==0){
         alert("Tiene que escribir su Rut")
         document.fvalida.rut.focus()
         return 0;
  }

  //valido el digito
  if (document.fvalida.fdigit.value.length==0){
      alert("Tiene que escribir su Digito Verificador")
      document.fvalida.fdigit.focus()
      return 0;
}

  //valido el nombre
  if (document.fvalida.name.value.length==0){
      alert("Tiene que escribir su Nombre")
      document.fvalida.name.focus()
      return 0;
}

   //valido el apellido
   if (document.fvalida.lastname.value.length==0){
      alert("Tiene que escribir su Apellido")
      document.fvalida.lastname.focus()
      return 0;
}

  //valido la direccion
  if (document.fvalida.adress.value.length==0){
      alert("Tiene que escribir su Dirección")
      document.fvalida.adress.focus()
      return 0;
}

  //valido la comuna
  if (document.fvalida.comuna.value.length==0){
      alert("Tiene que escribir su Comuna")
      document.fvalida.comuna.focus()
      return 0;
}

  //valido el tipo de vehiculo
  if (document.fvalida.typecar.selectedIndex==0){
      alert("Debe seleccionar un tipo de Vehiculo.")
      document.fvalida.typecar.focus()
      return 0;
}

  //valido la marca
  if (document.fvalida.marca.value.length==0){
      alert("Tiene que escribir la marca de su vehiculo")
      document.fvalida.marca.focus()
      return 0;
}

  //valido el modelo
  if (document.fvalida.modelo.value.length==0){
      alert("Tiene que escribir el Modelo de su Vehiculo")
      document.fvalida.modelo.focus()
      return 0;
}

  //valido el año
  if (document.fvalida.year.value.length==0){
      alert("Tiene que escribir el Año de su Vehiculo")
      document.fvalida.year.focus()
      return 0;
}

  //valido revision tecnica
  if (document.fvalida.rtecnica.selectedIndex==0){
      alert("Debe seleccionar revision tecnica.")
      document.fvalida.rtecnica.focus()
      return 0;0
}

   //valido lavado
  if (document.fvalida.flexRadioDefault1.value.length==0 & document.fvalida.flexRadioDefault2.value.length==0){
      alert("Tiene que seleccionar un valor")
      document.fvalida.flexRadioDefault1.focus()
      return 0;
}

  //valido encargado
  if (document.fvalida.Encargado.selectedIndex==0){
      alert("Debe seleccionar Encargado.")
      document.fvalida.Encargado.focus()
      return 0;0
}

  //valido fecha
  if (document.fvalida.fecha.selectedIndex==0){
      alert("Debe seleccionar Fecha.")
      document.fvalida.fecha.focus()
      return 0;0
}

  //valido hora
  if (document.fvalida.hora.selectedIndex==0){
      alert("Debe seleccionar Encargado.")
      document.fvalida.hora.focus()
      return 0;0
}


  //el formulario se envia
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}

