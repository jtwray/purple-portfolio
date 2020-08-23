class TabItem {
  constructor(item) {
    // Assign this.element to the passed in element
    this.item = item;
    this.item.style.display = "none";
  }

    select() {
    // Select all ".tabs__item" elements from the DOM
    const items = document.querySelectorAll(".tabs__item");

    // Remove the class "tabs__item-selected" from each element
    Array.from(items).forEach(item =>
      item.classList.remove("tabs__item--selected")
    );
    // Add a class named "tabs__item-selected" to this element
   this.item.classList.add("tabs__item--selected");
    if (this.item.classList.contains("tabs__item--selected")) {
      this.item.style.display = "flex";
      console.log(this.item,"hasflex")
    } else {
      this.item.style.display = "none";
      console.log(this.item,"hasnone")
    }
  }
}
