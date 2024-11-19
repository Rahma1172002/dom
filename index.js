// Sélection des éléments nécessaires
const cart = document.querySelector("#cart");
const totalElement = document.querySelector("#total");

// Met à jour le prix total
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".item").forEach(item => {
    const price = parseFloat(item.querySelector(".price").dataset.price);
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    total += price * quantity;
  });
  totalElement.textContent = total;
}

// Ajout des événements
cart.addEventListener("click", event => {
  const target = event.target;

  // Supprimer un article
  if (target.classList.contains("remove")) {
    target.closest(".item").remove();
    updateTotal();
  }

  // Ajuster la quantité (+ ou -)
  if (target.classList.contains("increase") || target.classList.contains("decrease")) {
    const quantityElement = target.closest(".item").querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);

    if (target.classList.contains("increase")) {
      quantity++;
    } else if (target.classList.contains("decrease") && quantity > 1) {
      quantity--;
    }

    quantityElement.textContent = quantity;
    updateTotal();
  }

  // Aimer un article
  if (target.classList.contains("like")) {
    target.classList.toggle("liked");
  }
});

// Initialisation du prix total
updateTotal();
