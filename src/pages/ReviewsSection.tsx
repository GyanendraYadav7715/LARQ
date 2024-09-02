import Button from "../components/button";
import Strategist from "../assets/strategist.png";
import Magazine from "../assets/oprah_Magazine.webp";
import Housekeeping from "../assets/Good_Housekeeping.png";
import BP from "../assets/BP-logo-black.webp";
const reviews = [
  {
    reviewpara:
      "What is the Next Status Water Bottle? Three of our experts named the LARQ bottle as one to watch.",
    imgUrl: Strategist,
    altText: "The Strategist Logo",
  },
  {
    reviewpara:
      "The result is that every glass of water tastes crisp and fresh.",
    imgUrl: Magazine,
    altText: "Oprah Magazine Logo",
  },
  {
    reviewpara:
      "Easier to drink through the straw than other water filter bottles.",
    imgUrl: Housekeeping,
    altText: "Good Housekeeping Logo",
  },
  {
    reviewpara:
      "You Should Ditch Your Old Water Dispenser For The High-Tech LARQ Pitcher PureVis™.",
    imgUrl: BP,
    altText: "BP Logo",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center h-[60vh]">
        <div className="md:col-span-1 text-center md:text-left">
          <h1 className="text-6xl font-bold text-gray-900">Brilliant</h1>
          <div className="flex justify-center md:justify-start my-2">
            <span className="text-red-500 text-2xl">★★★★★</span>
          </div>
          <p className="text-gray-600 mb-5">based on 11,934 reviews</p>
          <Button title="All reviews" />
        </div>

        {reviews.map((review, index) => (
          <div key={index} className="md:col-span-1 text-center md:text-left">
            <p className="text-[#153a5b] text-xl tracking-wide font-medium h-36">
              {review.reviewpara}
            </p>
            <div className="mt-10">
              <img
                src={review.imgUrl}
                alt={review.altText}
                className="h-6 mx-auto md:mx-0"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
