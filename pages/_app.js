//we'll return instantly ie
import 'styles/global.css'
//here we'll have to import,Our navbar and footer will be in every single page in our entire application
//we'll do a global import here instead of importing the pages individually

//****INTERNAL IMPORTS*
import { NavBar } from '../components/componentindex';

const MyApp = ({Component , pageProps}) =>  (
//we'll take a div and instide that we'll take our navbar component
   <div>
      <NavBar/>
      <Component {...pageProps}/>;
   </div>
//with the above now we can access NavBar globally. 
);
export default MyApp;