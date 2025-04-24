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

    var ruta = 'https://genba-ingenieria.com/php/extractor.php?carpeta=' + folder;
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
            imagen.classList.add("img-thumbnail", "img-fluid", "col-3", "m-2", "rounded", "d-block", "mx-auto");
            imagen.setAttribute("data-bs-toggle", "modal");
            imagen.style.cursor = "pointer";

            // Agregar evento para agrandar la imagen al hacer clic
            imagen.addEventListener("click", function () {
                var modal = document.createElement("div");
                modal.classList.add("modal", "fade");
                modal.tabIndex = -1;

                var modalDialog = document.createElement("div");
                modalDialog.classList.add("modal-dialog", "modal-dialog-centered");

                var modalContent = document.createElement("div");
                modalContent.classList.add("modal-content");

                var modalBody = document.createElement("div");
                modalBody.classList.add("modal-body", "text-center");

                var modalImage = document.createElement("img");
                modalImage.src = imagen.src;
                modalImage.classList.add("img-fluid", "rounded");

                modalBody.appendChild(modalImage);
                modalContent.appendChild(modalBody);
                modalDialog.appendChild(modalContent);
                modal.appendChild(modalDialog);

                document.body.appendChild(modal);

                // Mostrar el modal
                var bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();

                // Eliminar el modal del DOM al cerrarlo
                modal.addEventListener("hidden.bs.modal", function () {
                    modal.remove();
                });
            });

            contenedor.appendChild(imagen);
        }
    }
}
