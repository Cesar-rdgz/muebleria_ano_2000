<?php 

function display_search(){
  if(isset($_GET['category'])){
    $search_query = $_GET['category'];

    echo "<input id='search_value' name='search' placeholder='Buscar' type='text' value='{$search_query}'>";
  }else {
    echo "<input id='search_value' name='search' placeholder='Buscar' type='text'>";
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mueblerias año 2000</title>

  <!-- css -->
  <link rel="stylesheet" href="css/styles.css">
  <link rel="manifest" href="manifest.json">
  <link rel="stylesheet" href="css/all.css" />

  <!-- animate CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

  <!-- ios support -->
  <meta name="theme-color" content="#501B1d">
  <link rel="apple-touch-icon" href="images/icons/logo-icon-96.png">
  <meta name="apple-mobile-web-app-status-bar" content="#501B1d">
</head>
<body>
  <header>
    <div class="menu-container">
      <div class="logo">
        <img src="images/logo-company-muebleria.jpg" alt="company logo">
      </div>
      <div class="menu">
        <input id="toggle-menu" type="checkbox">
        <label for="toggle-menu"><i class="fas fa-bars"></i></label>
        <nav id="navbar">
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="pages/about.html">Sobre Nosotros</a></li>
            <li><a href="pages/contact.html">Contacto</a></li>
            <li><a href="productos.html">Productos</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="contact-container">
      <a href="https://wa.me/+524371026787?text=Hola%20podrían%20ayudarme?"><i class="lil-icons fab fa-whatsapp"> 437-102-6787</i></a>
      <a href="https://www.facebook.com/Mua2mil"><i class="lil-icons fab fa-facebook-square"></i></a>
    </div>
  </header>

  <main>
    <section class="products aside-page">
      <div class="introduction">
      <h3>Algunos de nuestros productos</h3><br/>
      <p>Puedes darle un vistazo a algunos de nuestros productos, como siempre apuntamos a ofrecer los mejores productos en calidad y precio.</p><br/>
      </div>
      <form id="search-field">
          <div class="input-group">
              <label for="product">Se generico, por ejemplo: Recamaras, electrodomésticos, salas.</label><br/>
              <?php display_search(); ?>
          </div>
          <div class="input-group">
              <input id="btn-search" type="submit" name="submit" value="Buscar">
          </div>
      </form>
      <div class="grid-categories real-time-content content-product">
    
        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/alacena-chocolate.jpg" alt="">
          <ul class="description-links animateRight">
            <li><a class="product-title" href="">Alacena chocolate</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">Acabado: Mate.</br>Material: MDF</br>Medidas(alto x largo x profundo)</br>190 x 70 x 38</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>
  
        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/alacenas.jpg" alt="">
          <ul class="description-links animateRight">
            <li><a class="product-title" href="">Alacena Genova</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">Color: chocolate</br>Material: MDF</br>Medidas(alto x largo x ancho).(115 x 122 x 40)</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/batidoras.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Batidora Kitchenaid</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">Potencia: 325 WATTS</br>Accesorios: BATIDOR GLOBO|BATIDOR PLANO|GANCHO PARA AMASAR|PROTECTOR DE VERTIDO|TAZONACERO INOXIDABLE.</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/cama.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Ohma King Size</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">Estilo: contemporaneo</br>Tamaño: King Size</br>Material: Madera</br></p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/centros-entretenimiento.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Mueble para tv paris</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">Acabado: MDF</br>Estilo: contemporaneo</br>MEDIDAS (ALTO X LARGO X PROFUNDO)</br>80 X 120 X 35</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/cocina-integral.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Cocina Integral</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">Medidas (alto x ancho x profundo</br>Tarja: 95cm x 100cm x 64cm</br>Cajonera: 96cm 55cm 64cm</br>Sup cajonera: 60cm 55cm 30cm</br>Sup Tarja: 60cm 100cm 30cm</br>Estufa: 40cm 80cm 30cm</br></p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/colchones.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Colchon Restonic</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">SISTEMA DE DESCANSO: FIRMEZA MEDIA</br>TECNOLOGÍA: EUROTOP</br>TAMAÑO: KING SIZE.</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/comedores.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Comedor Ury</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">ACABADO: CHAPA DE ENCINO</br>SILLAS: INCLUYE 6</br>MEDIDAS (ALTO X LARGO X PROFUNDO)</br>77X190X77</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/comedor-holanda.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Comedor Holanda</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">No disponible</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/comedor-italia.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Comedor Italia</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">No disponible</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/comoda-morgan.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Comoda Morgan</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">ACABADO: MELAMINA</br>NUMERO CAJONES: 3</br>MEDIDAS (ALTO X LARGO X PROFUNDO)</br>96 X 72 X 39</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/comoda-para-tv.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">mueble para tv</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">No disponible</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div class="grid-container static-data">
          <img class="animateRight" src="images/products/congeladores.jpg" alt="">
          <ul class="description-links">
            <li><a class="product-title" href="">Hisense Congelador</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
              <p class="info-display">CAPACIDAD: 9 Pies</br>LLAVE DE SEGURIDAD: SI</br>FUNCIONES: CONGELA|CONSERVA CONGELADO</br></p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>
  
      </div>
  </section>
  </main>

  <footer>
    <div class="description">
      <img src="images/logo-company-muebleria.jpg" alt="">
      <p>Comercializamos muebles, inovación satisfacció y calidad en productos para tu casa y oficina.</p>
    </div>
    <div class="footer-nav">
      <p>Navigation</p>
      <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">Acerca</a></li>
        <li><a href="">Contacto</a></li>
      </ul>
    </div>
    <div class="footer-info">
      <p class="footer-info-title">Información de contacto</p><br/>
      <p class="indent">Dirección de la tienda</p>
      <div>
        <span>
          <i class="fas fa-map-marker-alt"></i>
           Lopez mateos #37
        </span>
      </div><br/>
      <p class="indent">Servicio al cliente</p>
      <div>
        <span>
          <i class="fas fa-phone-volume"></i>
           437-461-2033
        </span>
      </div>
    </div>

    <div class="copyrights">
      <p> &copy; 2020 Design by <a href="cesarwebdev.com">Cesar Rodriguez</a></p>
    </div>
  </footer>
  <script src="js/main-pages.js"></script>
  <script src="js/products_functions.js"></script>
</body>
</html>  