class PortalHeaderText {
  constructor(text) {
    // Assign this.element to the passed in element
    this.text = text;
  }

  select() {
    // Select all ".tabs__item" elements from the DOM
    const items = document.querySelectorAll(".tabs__link").textContent;
    console.log(items);
    // Remove the class "tabs__item-selected" from each element
    Array.from(items).forEach(item =>
      item.classList.remove(" .portalHeader__textContent--selected")
    );
    // Add a class named "tabs__item-selected" to this element
    this.item.classList.add(" .portalHeader__textContent--previous");
  }
}
let linkTexts = document.querySelectorAll(".tabs__link");
linkTexts.forEach(linkText => {
  return new PortalHeaderText(linkText.textContent);
});

