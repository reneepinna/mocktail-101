import './DrinkCard.scss';

function DrinkCard({ drink }) {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  return (
    <article id={idDrink} className='card'>
      <img className='card__thumbnail' src={strDrinkThumb}/>
      <div className='card__textBlock'>
        <h3 className='card__drinkName'>{strDrink}</h3>
      </div>
    </article>
  );
}

export default DrinkCard;
