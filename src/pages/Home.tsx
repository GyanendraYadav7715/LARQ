import HomeShow from "../assets/homeshow.webp"

const Home = () => {
  return (
    <div className="w-full h-full">
      <img src={HomeShow} alt="HomeShow" className="object-cover object-center" />
    </div>
  );
}

export default Home;