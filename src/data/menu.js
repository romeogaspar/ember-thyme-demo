/**
 * Menu data — single source of truth for the whole site.
 * The Menu page renders every category below; the Home page pulls
 * items marked `signature: true`.
 *
 * For a real client, this file is what their team edits — or swap it
 * for a Google Sheet fetch (see SETUP.md) so they never touch code.
 * Prices are plain strings so any currency works.
 */
const menu = [
  {
    category: "To Start",
    items: [
      {
        name: "Charred Leeks & Romesco",
        description: "Wood-fired leeks, almond romesco, smoked olive oil",
        price: "14",
      },
      {
        name: "Burrata & Blistered Tomatoes",
        description: "Creamy burrata, fire-roasted tomatoes, basil, grilled sourdough",
        price: "16",
        signature: true,
        image: "/images/dish-burrata.jpg",
      },
      {
        name: "Crispy Squid",
        description: "Calamansi aioli, charred lime, chili threads",
        price: "15",
      },
      {
        name: "Roasted Bone Marrow",
        description: "Parsley & shallot salad, toasted country bread",
        price: "17",
      },
    ],
  },
  {
    category: "From the Fire",
    items: [
      {
        name: "Whole Roasted Seabass",
        description: "Fennel, charred lemon, salsa verde — for two",
        price: "52",
        signature: true,
        image: "/images/dish-seabass.jpg",
      },
      {
        name: "Dry-Aged Ribeye",
        description: "400g, ember-roasted bone marrow butter, watercress",
        price: "58",
      },
      {
        name: "Wood-Fired Half Chicken",
        description: "Brined overnight, burnt honey glaze, grilled greens",
        price: "32",
      },
      {
        name: "Ember-Baked Cauliflower",
        description: "Whole-roasted, tahini, pomegranate, pine nuts",
        price: "26",
      },
    ],
  },
  {
    category: "Sides",
    items: [
      {
        name: "Duck-Fat Potatoes",
        description: "Crisped in the oven, rosemary salt",
        price: "9",
      },
      {
        name: "Charred Broccolini",
        description: "Garlic, lemon, chili",
        price: "10",
      },
      {
        name: "House Sourdough",
        description: "Baked daily, cultured butter, smoked salt",
        price: "6",
      },
    ],
  },
  {
    category: "Dessert",
    items: [
      {
        name: "Burnt Basque Cheesecake",
        description: "From the wood oven, muscovado caramel",
        price: "13",
        signature: true,
        image: "/images/dish-cheesecake.jpg",
      },
      {
        name: "Dark Chocolate Tart",
        description: "Smoked sea salt, crème fraîche",
        price: "12",
      },
      {
        name: "Grilled Stone Fruit",
        description: "Seasonal, honey, toasted almond, vanilla gelato",
        price: "11",
      },
    ],
  },
  {
    category: "To Drink",
    items: [
      {
        name: "House Negroni",
        description: "Barrel-rested, orange coin",
        price: "14",
      },
      {
        name: "Smoked Old Fashioned",
        description: "Bourbon, demerara, cherrywood smoke",
        price: "15",
      },
      {
        name: "Wines by the Glass",
        description: "A rotating list of small producers — ask your server",
        price: "from 9",
      },
    ],
  },
];

export default menu;
