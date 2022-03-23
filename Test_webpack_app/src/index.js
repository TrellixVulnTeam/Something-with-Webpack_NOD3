import Post from "./Post";
import json from './assets/json';
import GovnoLogo from './assets/clipart-snoopy.png';
import './styles/styles.css';

const post = new Post('Webpack post title', GovnoLogo)

console.log('Post to string', post.toString())

console.log('JSON: ', json)
// console.log('govno')