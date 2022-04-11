import * as $ from 'jquery';
import Post from "./Post";
import json from './assets/json';
import xml from './assets/data';
import csv from './assets/data2.csv';
import GovnoLogo from './assets/clipart-snoopy';
import './styles/styles.css';
import './styles/style.scss';

const post = new Post('Webpack post title', GovnoLogo)

console.log('Post to string', post.toString())

console.log('JSON: ', json)
console.log('XML', xml)
console.log('CSV', csv)

$('pre').addClass('code').html(post.toString())