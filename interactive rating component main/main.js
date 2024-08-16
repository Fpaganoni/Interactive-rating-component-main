// CREAMOS UNA CLASE CONSTRUCTORA PARA EL RANKING DE NUMEROS
class RankingNumbers {
  constructor(
    container_number,
    button_submit,
    span_number,
    container_card,
    container_ty
  ) {
    // Seleccionamos todos las clases .rating-btn
    this.containerNumber = document.querySelectorAll(container_number);
    this.buttonSubmit = document.querySelector(button_submit);
    this.spanNumber = document.querySelector(span_number);
    this.containerCard = document.querySelector(container_card);
    this.container_ty = document.querySelector(container_ty);

    // Creamos una funcion que retorna el numero seleccionado
    this.numberSelected();
  }

  numberSelected() {
    // Recorremos todos los numeros y guardamos en una variable el numero seleccionado
    this.containerNumber.forEach((e) => {
      e.addEventListener("click", () => {
        let numberRanking = e.textContent;

        // A partir del click en el boton submit el numero seleccionado en la anterior funcion se setea en el spanID
        this.buttonSubmit.addEventListener("click", () => {
          this.spanNumber.textContent = numberRanking;

          // Cambiamos de card
          this.containerCard.style.display = "none";
          this.container_ty.style.display = "block";
        });
      });
    });
  }
}

// LLAMAMOS A LA CLASE EN UNA FUNCION
(function () {
  new RankingNumbers(
    ".rating-btn",
    "#button-submit",
    "#number-selected",
    ".container-card",
    ".container-ty"
  );
})();
