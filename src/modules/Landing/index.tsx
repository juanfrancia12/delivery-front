import Banner from "./components/Banner"
import PopuplarFoods from "./components/PopuplarFoods"

const LandingView = (): JSX.Element => {
  return (
    <div className="grow bg-white">
      <Banner />
      <PopuplarFoods />
    </div>
  )
}

export default LandingView
