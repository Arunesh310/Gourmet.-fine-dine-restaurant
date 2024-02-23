import images from "./images";

const wines = [
  {
    title: "Ballantine Scotch",
    price: "₹5000",
    tags: "US | Bottle",
  },
  {
    title: "Indri Whiskey",
    price: "₹4000",
    tags: "IN | Bottle",
  },
  {
    title: "Johnnie Walker Black",
    price: "₹4000",
    tags: "US | 750 ml",
  },
  {
    title: "Chivas Regal",
    price: "₹7000",
    tags: "US | 750 ml",
  },
  {
    title: "Buddweiser",
    price: "₹350",
    tags: "US | 750 ml",
  },
];

const cocktails = [
  {
    title: "Sex On Beach",
    price: "₹1500",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "₹1000",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "₹700",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "₹2100",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "₹1900",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
