import pure from "../assets/purification-big.webp";
import home from "../assets/home-big.webp";
import drink from "../assets/drinkware-big-us.webp";
import Button from "../components/button";
const products = [
  {
    id: 1,
    imgUrl: pure,
    alttext: "Purification product",
    title: "Purification",
    link: "tututu",
  },
  {
    id: 2,
    imgUrl: home,
    alttext: "Home product",
    title: "Home",
    link: "tututu",
  },
  {
    id: 3,
    imgUrl: drink,
    alttext: "Drinkware product",
    title: "Drinkware",
    link: "tututu",
  },
  {
    id: 4,
    imgUrl: pure,
    alttext: "Purification product",
    title: "Purification",
    link: "tututu",
  },
  {
    id: 5,
    imgUrl: home,
    alttext: "Home product",
    title: "Home",
    link: "tututu",
  },
  {
    id: 6,
    imgUrl: drink,
    alttext: "Drinkware product",
    title: "Drinkware",
    link: "tututu",
  },
  {
    id: 7,
    imgUrl: pure,
    alttext: "Purification product",
    title: "Purification",
    link: "tututu",
  },
  {
    id: 8,
    imgUrl: home,
    alttext: "Home product",
    title: "Home",
    link: "tututu",
  },
  {
    id: 9,
    imgUrl: drink,
    alttext: "Drinkware product",
    title: "Drinkware",
    link: "tututu",
  },
];
function Magazine() {
  return (
    <div className="container mx-auto py-8 px-20 mb-7">
      <div className="flex items-center justify-between">
        <div className="text">
          <h1 className="text-6xl font-bold text-left mt-12 mb-6 text-[#153a5b]">
            basq magazine
          </h1>
          <p className="text-2xl font-medium text-left  text-[#153a5b] tracking-wide mb-7">
            Take a peek at our online magazine where we cover everything from
            water to travel and wellness.
          </p>
        </div>
        <div>
          <Button title="Explore basq" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div className="" key={product.id}>
            <img
              src={product.imgUrl}
              alt={product.alttext}
              className="w-full h-[80vh] object-cover rounded-lg mb-4"
            />
            <div className="text-left flex flex-col gap-6 mt-7">
              <p className="text-3xl font-bold text-[#153a5b] tracking-wide">
                {product.title}
              </p>
              <a href={product.link} className="underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Magazine;
