import Navbar from "./Navbar";
import Hero from "./Hero";
import Text from "./Text"
import Cards from "./Cards";
export default function App(){
  const cardDetails = [{
    imageURL : './image 12 (1).png',
    rating : 5.0,
    total_ratings : 6,
    country : 'USA',
    card_title : 'Life lessons with Katie Zaferes',
    price : 136
  },
  {
    imageURL : './mountain-bike 1.png',
    rating : 4.0,
    total_ratings : 36,
    country : 'UK',
    card_title : 'Bicycle Jorney Experience',
    price : 149
  },
  {
    imageURL : './wedding-photography 1.png',
    rating : 4.8,
    total_ratings : 40,
    country : 'UK',
    card_title : 'Wedding Managment Like Never Before',
    price : 100
  }
]
  return(
    
    <>
        <Navbar/>
        <Hero/>
        <Text/>
        <Cards detail={cardDetails} />
    </>
   
  )
}




