import React from 'react';
import cardsAPI from './API/card.json';
import images from './API/API-IMG/card-img';

const Card = ({ title, desc, image }) => {
  return (
    <div id='cards' className='max-w-80 p-3 border shadow-xl hover:shadow-2xl transition'>
      <img className='w-96' src={images[image]} alt={title} />
      <div>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='container'>
      <div className='flex flex-wrap justify-between'>
        {cardsAPI.map(card => (
          <Card key={card.id} title={card.title} desc={card.desc} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
