import Post from "./Post";
import json from './assets/json';
import xml from './assets/data'
import GovnoLogo from './assets/clipart-snoopy';
import './styles/styles.css';

const post = new Post('Webpack post title', GovnoLogo)

console.log('Post to string', post.toString())

console.log('JSON: ', json)
console.log('XML', xml)