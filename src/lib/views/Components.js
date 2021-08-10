import home from './home.js';
import profile from './profile.js';
import register from './register.js';

const components = {
     "#": register(),
     "#home": home(),
     "#profile": profile(),
     "": home()
}

export const hrefContent = {
     '#' : register(),
     '' : register(),
     '#home': home(),
     '#profile': profile()
 }
 
 export const routes = {
     '/' : register(),
     '/home' : home(),
     '/profile': profile()
 }

