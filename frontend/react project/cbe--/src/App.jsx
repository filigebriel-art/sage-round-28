
import Header from './Header'
import Greet from './Greet'
import Counter from'./Counter'
import Goal from './Goal'
import Garage from './Garage'
import List from './List'
import Styling from './Styling'



import Footer from './Footer'

export default function(){
  return <>
  <Header/> 
  <Greet name="abebe"/>
  <Greet name="sara"/>
  <Greet name="kokeb"/>
  <Greet name="sami"/>
  
 
  <Goal  isgoal={true}/>
  <Garage cars={["Byd","toyota","jeep"]}/>
  <List/>
  <Counter/>
  <Styling/>
  <Footer/>
  </>
}