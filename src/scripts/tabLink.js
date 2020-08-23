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

Array.from(items).forEach(item=>
{
   if (item.classList.contains("tabs__item--selected")) {
    item.style.display = "flex";
    console.log(this.item,"hasflex")
  } else {
    item.style.display = "none";
    console.log(this.item,"hasnone")
    }
  }
)
  }
}

class TabLink{
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs__item[data-tab='${this.data}']`
    );

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // this.portalHeaderText = new PortalHeaderText(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => {
      this.select();
    });
    this.itemToDisplay = this.itemElement.textContent;
    this.header = document.getElementById("Header");
  }

  select() {
    // Get all of the elements with the tabs__link class
    const links = document.querySelectorAll(".tabs__link");

    // Using a loop or the forEach method remove the 'tabs__link-selected' class from all of the links
    Array.from(links).forEach(
      link => link.classList.remove("tabs__link--selected"),
      console.log(
        "#header[0]==|",
        this.header[0],
        "#1--|this.data:",
        this.data,
        "#2--|this.itemToDisplay",
        this.itemToDisplay,
        "#3--|this.clickedLinkElement",
        this.element,
        "#4--|this.clickedLinkElement.textContent",
        this.element.textContent
      )
    );

    this.header.textContent = this.element.textContent;

    this.header.style =
      "color:white; font-size:3rem;transition:3s ease; transform:opacity:0";

    console.log("test", this.header);
    // Add a class named "tabs__link-selected" to this link
    this.element.classList.toggle("tabs__link--selected", "loaded", "loading");

    // Call the select method on the item associated with this link
    this.tabItem.select();
    // this.portalHeaderText.select();
  }
}

let links = document.querySelectorAll(".tabs__link");
links.forEach(link => {
  return new TabLink(link);
});



