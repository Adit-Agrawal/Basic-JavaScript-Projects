const menu = [
  {
    id: 1,
    title: "Chhole Bhature",
    category: "breakfast",
    price: 250,
    img: "./images/chhole-bhature.jpg",
    desc: 'Spicy chickpea curry served with deep-fried, fluffy Indian bread.',
  },
  {
    id: 2,
    title: "Amritsari Kulcha",
    category: "lunch",
    price: 100,
    img: "./images/amritsari-kulcha.jpg",
    desc: 'Stuffed Indian flatbread baked to perfection, served with tangy chickpeas and chutney.',
  },
  {
    id: 3,
    title: "Oreo Masti",
    category: "shakes",
    price: 70,
    img: "./images/oreo-shake.jpg",
    desc: 'Creamy milkshake blended with crushed Oreos and topped with whipped cream.',
  },
  {
    id: 4,
    title: "Aloo Paratha",
    category: "breakfast",
    price: 45,
    img: "./images/aloo-paratha.jpg",
    desc: 'Whole wheat flatbread stuffed with spiced mashed potatoes, served with butter, curd, and pickle.',
  },
  {
    id: 5,
    title: "Chhole Kulche",
    category: "lunch",
    price: 80,
    img: "./images/chole-kulche.jpg",
    desc: 'Soft leavened flatbreads served with spicy, tangy chickpea curry and onions.',
  },
  {
    id: 6,
    title: "Strawberry Delight",
    category: "shakes",
    price: 65,
    img: "./images/strawberry-shake.jpg",
    desc: 'Refreshing milkshake made with fresh strawberries, milk, and a touch of sweetness.',
  },
  {
    id: 7,
    title: "Poha",
    category: "breakfast",
    price: 50,
    img: "./images/poha.jpg",
    desc: 'Light and fluffy flattened rice cooked with onions, mustard seeds, turmeric, and fresh herbs.',
  },
  {
    id: 8,
    title: "Chicken Tikka",
    category: "lunch",
    price: 420,
    img: "./images/chicken-tikka.jpg",
    desc: 'Tender chicken pieces marinated in spices and yogurt, grilled to smoky perfection.',
  },
  {
    id: 9,
    title: "Dal Makhani",
    category: "dinner",
    price: 370,
    img: "./images/dal-makhani.jpg",
    desc: 'Rich and creamy black lentils slow-cooked with butter, cream, and aromatic spices.',
  },
  {
    id: 10,
    title: "Butter Chicken",
    category: "dinner",
    price: 450,
    img: "./images/butter-chicken.jpg",
    desc: 'Succulent chicken cooked in a creamy tomato-based gravy with rich butter and spices.',
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">₹${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
