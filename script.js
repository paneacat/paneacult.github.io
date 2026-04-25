document.addEventListener('DOMContentLoaded', () => {

  // BOTTONI
  const bottoniCategoria = document.querySelectorAll('.filtro-categoria');
  const bottoniGenere = document.querySelectorAll('.filtro-genere');
  const cards = document.querySelectorAll('.card');

  // STATI ATTIVI
  let filtroCategoria = "tutti";
  let filtroGenere = "tutti";

  // ===== CATEGORIE =====
  bottoniCategoria.forEach(btn => {
    btn.addEventListener('click', () => {

      filtroCategoria = btn.dataset.filter;

      // reset stato attivo
      bottoniCategoria.forEach(b => b.classList.remove('attivo'));
      btn.classList.add('attivo');

      aggiornaFiltri();
    });
  });

  // ===== GENERI =====
  bottoniGenere.forEach(btn => {
    btn.addEventListener('click', () => {

      filtroGenere = btn.dataset.genere;

      // reset stato attivo
      bottoniGenere.forEach(b => b.classList.remove('attivo'));
      btn.classList.add('attivo');

      aggiornaFiltri();
    });
  });

  // ===== LOGICA FILTRO =====
  function aggiornaFiltri() {

  let visibili = 0; // 👈 contatore

  cards.forEach(card => {

    const categoria = card.dataset.categoria;
    const generi = card.dataset.genere.split(" ");

    const matchCategoria =
      filtroCategoria === "tutti" || categoria === filtroCategoria;

    const matchGenere =
      filtroGenere === "tutti" || generi.includes(filtroGenere);

    if (matchCategoria && matchGenere) {
      card.style.display = "block";
      visibili++; // 👈 conta
    } else {
      card.style.display = "none";
    }

  });

  const empty = document.getElementById("emptyState");

  if (visibili === 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }

  }
  });

  }
});
