import Nav from "./components/Nav";
import Text from "./components/Text";
import Contador from "./components/Contador"
const app = () => {
  return (
   <>
   <Nav/>
   <Text greeting= "Tus Joyas preferidas en JoyShop"/>
   <Contador inicial={1} stock={5}/>
   </>
  );
}
export default app;