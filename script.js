
// ===== FILTRI =====
const filtri = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.card');

let filtriAttivi = {
  categoria: "tutti",
  genere: "tutti"
};

filtri.forEach(btn => {
  btn.addEventListener("click", () => {

    const tipo = btn.dataset.tipo;
    const valore = btn.dataset.valore;

    // reset gruppo (categoria o genere)
    document
      .querySelectorAll(`.filtro[data-tipo="${tipo}"]`)
      .forEach(b => b.classList.remove("attivo"));

    // se clicchi "tutti"
    if (valore === "tutti") {
      filtriAttivi[tipo] = "tutti";
      btn.classList.add("attivo");
    } else {
      filtriAttivi[tipo] = valore;
      btn.classList.add("attivo");
    }

    aggiornaFiltri();
  });
});

function aggiornaFiltri() {
  cards.forEach(card => {

    const categoria = card.dataset.categoria;
    const genere = card.dataset.genere || "";

    const matchCategoria =
      filtriAttivi.categoria === "tutti" ||
      categoria === filtriAttivi.categoria;

    const matchGenere =
      filtriAttivi.genere === "tutti" ||
      genere.includes(filtriAttivi.genere);

    if (matchCategoria && matchGenere) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

    // TOGGLE: se clicchi quello già attivo → reset a "tutti"
if (matchCategoria && matchGenere) {
  card.style.display = "";
} else {
  card.style.display = "none";
}
      filtro.classList.add('attivo');
      filtriAttivi[tipo] = valore;
    }

    aggiornaFiltri();
  });
});

function aggiornaFiltri() {
  cards.forEach(card => {

    const categoria = card.dataset.categoria;
    const genere = card.dataset.genere;

    const matchCategoria =
      filtriAttivi.categoria === "tutti" ||
      categoria === filtriAttivi.categoria;

    const matchGenere =
      filtriAttivi.genere === "tutti" ||
      (genere && genere.includes(filtriAttivi.genere));

    if (matchCategoria && matchGenere) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
// ===== FADE IN =====
const elements = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.9;

  elements.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 80);
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
