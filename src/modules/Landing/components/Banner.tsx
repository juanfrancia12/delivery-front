const Banner = (): JSX.Element => {
  return (
    <section className="container-section grid grid-cols-2 gap-6 min-h-[35rem] items-center">
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-5xl">
          <span className="text-light-color-title">Reserva y disfruta</span> de
          un delicioso almuerzo o cena en casa
        </h2>
        <p className="text-primary-700 mb-3">
          <span className="block">
            Elige tu comida favorita de nuestra amplia selección de comidas
            disponibles.
          </span>
          ¡Todas nuestras comidas se cocinan con ingredientes de alta calidad,
          justo a tiempo y, por supuesto, por chefs experimentados!
        </p>
        <div className="flex gap-6">
          <button className="py-2.5 px-5 bg-blue-700 rounded-md text-white hover:bg-primary-800">
            Registrarme
          </button>
          <button className="py-2.5 px-5 bg-primary-300 rounded-md text-light-color-title hover:bg-primary-400">
            Iniciar sesión
          </button>
        </div>
      </div>
      <div className="">
        <img
          src="/images/banner-delivery.webp"
          alt="imagen delivery"
          className="w-3/5 m-auto"
        />
      </div>
    </section>
  )
}

export default Banner
