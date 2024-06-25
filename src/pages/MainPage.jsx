import CountDown from "../components/CountDown"
import Deets from "../components/Deets"
import Footer from "../components/Footer"
import FunctionDeets from "../components/FunctionDeets"
import Invite from "../components/Invite"
import MainDisplay from "../components/MainDisplay"
import Story from "../components/Story"


function MainPage(){

    return(
        <>
        <MainDisplay></MainDisplay>
      <Story></Story>
      <CountDown></CountDown>
      <Deets></Deets>
      <FunctionDeets></FunctionDeets>
      <Invite></Invite>
      <Footer></Footer>
        </>
    )
}

export default MainPage