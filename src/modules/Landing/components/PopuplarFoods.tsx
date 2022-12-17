import classNames from "classnames"
import { BsFillTrophyFill } from "react-icons/bs"

const FOOD_POPULAR = [
  {
    id: 1,
    name: "Cheese Burger",
    picture:
      "https://food-delivery-ecommerce-app.netlify.app/static/media/product_04.f7c5294d.jpg",
    category: ["pizza", "cena"],
    price: 24,
    ranking: 1,
  },
  {
    id: 2,
    name: "Seafood Pizza",
    picture:
      "https://food-delivery-ecommerce-app.netlify.app/static/media/product_2.2.4967c9cb.jpg",
    category: ["pizza", "almuerzo"],
    price: 35,
    ranking: 2,
  },
  {
    id: 3,
    name: "Classic Hamburger",
    picture:
      "https://food-delivery-ecommerce-app.netlify.app/static/media/product_08.efc6c719.jpg",
    category: ["pizza", "almuerzo", "cena"],
    price: 28,
    ranking: 3,
  },
]

const PopuplarFoods = (): JSX.Element => {
  return (
    <section className="bg-light-bg-blue/10">
      <div className="container-section !py-24">
        <h3 className="text-3xl font-bold text-center mb-12">
          COMIDAS POPULARES
        </h3>
        <div className="flex gap-10 justify-center items-center">
          {FOOD_POPULAR.map((food) => {
            return (
              <article
                key={food.id}
                className={classNames(
                  { "order-1": food.ranking === 1 },
                  { "order-2": food.ranking === 3 },
                  "bg-white px-4 py-8  rounded-md w-80 flex flex-col gap-2 relative cursor-pointer transition-transform hover:scale-105 shadow"
                )}
              >
                <div
                  className={classNames(
                    { "!text-yellow-400": food.ranking === 1 },
                    { "!text-gray-300": food.ranking === 3 },
                    "absolute top-3 left-3 text-gray-500"
                  )}
                >
                  <BsFillTrophyFill
                    size={food.ranking === 1 ? "3rem" : "2rem"}
                  />
                </div>
                <div className="absolute top-4 right-0 px-4 py-2 bg-green-200/50 text-green-800 font-bold rounded-tl-md rounded-bl-md">{`S/. ${food.price}`}</div>
                <img
                  src={food.picture}
                  alt={food.name}
                  className={classNames(
                    { "w-2/5": food.ranking !== 1 },
                    "w-4/5 m-auto"
                  )}
                />
                <p
                  className={classNames(
                    { "text-lg font-medium": food.ranking !== 1 },
                    "font-bold text-2xl text-center mb-2"
                  )}
                >
                  {food.name}
                </p>
                <div className="flex gap-4 justify-center items-center">
                  {food.category.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-blue-100/70 rounded text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PopuplarFoods
