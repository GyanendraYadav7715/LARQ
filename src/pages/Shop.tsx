import pure from "../assets/purification-big.webp";
import home from "../assets/home-big.webp";
import drink from "../assets/drinkware-big-us.webp";

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
];
function Shop() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-6xl font-bold text-left my-12 text-[#153a5b]">
        Shop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div className="" key={product.id}>
            <img
              src={product.imgUrl}
              alt={product.alttext}
              className="w-full h-[80vh] object-cover rounded-lg mb-4"
            />
            <div className="text-center flex flex-col gap-6 mt-7">
              <p className="text-3xl font-bold text-[#153a5b] tracking-wide">
                {product.title}
              </p>
              <a href={product.link} className="underline">
                shop now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
