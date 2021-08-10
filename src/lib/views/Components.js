import Home from './home.js';
import Profile from './profile.js';
import Register from './register.js';
const components = {
     "#": Register(),
     "#home": Home(),
     "#profile": Profile(),
     "": Home()
}

export default components;