import BreedCard from "../BreedCard/BreedCard";
import "./Breeds.modules.css";

const Breeds = ({ breeds }) => {
  return (
    <>
      {breeds.length > 0 ? (
        <div className="cardsBox">
          {breeds.map((breed) => (
            <BreedCard
              key={breed.id}
              id={breed.id}
              name={breed.name}
              img={breed.image ? breed.image.url : `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
              temperament={breed.temperament}
              weight={breed.weight}
              life_span={breed.life_span}
            />
          ))}
        </div>
      ) : (
        <div className="cardsBoxEmpty">
          <p>No breeds found </p>
        </div>
      )}
    </>
  );
};

export default Breeds;
