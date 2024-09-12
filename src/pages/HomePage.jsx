import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cardData from '../cardData';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    const handleCardClick = (productId) => {
        navigate(`/product/${productId}`);
      };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-12 mb-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            imageAlt={card.imageAlt}
            description={card.description}
            price={card.price}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}


export default HomePage;