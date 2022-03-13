import Navigation from '../src/components/navigation/Navigation'
import Main from '../src/components/main/Main'
import MainHeader from '../src/components/mainHeader/MainHeader'
import GearUp from '../src/components/gearUp/GearUp'
import ThreePics from '../src/components/threepics/ThreePics'
import Footer from '../src/components/footer/Footer'
import SingIn from '../src/components/singIn/SingIn'


function App() {


  return (
    <div className="app">
         
          <SingIn />
          <Navigation />
          <Main />
          <MainHeader />
          <GearUp />
          <ThreePics />
          <Footer />

    </div>
  )
}

export default App;
