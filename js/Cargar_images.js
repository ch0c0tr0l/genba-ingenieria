function loadImages(folder) {
    var contenedor = document.getElementById("modalGallery");
    contenedor.innerHTML = ""; // Limpiar el contenedor antes de cargar nuevas imágenes

    // Crear y mostrar el indicador de "cargando"
    var loadingDiv = document.createElement("div");
    loadingDiv.id = "loadingIndicator";
    loadingDiv.textContent = "Cargando...";
    loadingDiv.style.textAlign = "center";
    loadingDiv.style.fontSize = "1.5rem";
    contenedor.appendChild(loadingDiv);

    var ruta = 'http://localhost:8000/php/extractor.php?carpeta=' + folder;
    var request = new XMLHttpRequest();
    request.open("GET", ruta);
    request.send();
    request.onload = function () {
        // Ocultar el indicador de "cargando"
        var loadingIndicator = document.getElementById("loadingIndicator");
        if (loadingIndicator) {
            loadingIndicator.remove();
        }

        var listaimagen = JSON.parse(request.responseText);
        for (var i = 0; i < listaimagen.length; i++) {
            var imagen = document.createElement("img");
            imagen.src = listaimagen[i];
            imagen.classList.add("img-fluid", "resize");
            imagen.setAttribute("data-bs-toggle", "modal");
            imagen.setAttribute("data-bs-target", "#exampleModal");
            contenedor.appendChild(imagen);
        }
    }
}