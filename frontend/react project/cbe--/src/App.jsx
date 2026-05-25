
import Header from './Header'
import Greet from './Greet'
import Counter from'./Counter'
import Profile from'./Profile'
import Exa from './Exa'
import Footer from './Footer'

export default function(){
  return <>
  <Header/> 
  <Greet name="abebe"/>
  <Greet name="sara"/>
  <Greet name="belay"/>
  <Greet name="sami"/>
  
  <Profile name="filmon" job="developer" hobby="music"/>
  <Profile name="john" job="fronter" hobby="art"/>
  image="https://via.placeholder.com/100"
  <Exa/>
  <Counter/>
  <Footer/>
  </>
}