document.addEventListener("DOMContentLoaded", () => {
    // Manejar la presentación del formulario en index.html
    const myForm = document.getElementById("myForm");
    if (myForm) {
        myForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Form submitted!");
        });
    }

    // Obtener y mostrar datos JSON en index.html
    fetch('data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const toursContainer = document.getElementById("toursContainer");
            if (toursContainer) {
                data.items.forEach(item => {
                    const tourCard = document.createElement('div');
                    tourCard.className = 'col-md-4';
                    tourCard.innerHTML = `
                        <div class="card mb-4 shadow-sm">
                            <img src="${item.image}" class="card-img-top" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                                <p class="card-text"><small class="text-muted">${item.price}</small></p>
                                <a href="#" class="btn btn-primary">Book Now</a>
                            </div>
                        </div>
                    `;
                    toursContainer.appendChild(tourCard);
                });
            }
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));

    // Manejar la presentación del formulario en contact.html
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message sent!");
            // Aquí puedes agregar lógica para enviar el formulario a un servidor
        });
    }
});
