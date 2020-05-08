const fs = require('fs');

import Article from "./gramblinite-links.json";
import Axios from "axios";

const articleLinks = [];
articleLinks = articleLinks.pop(Article["published-works"].forEach(i => { return i.link}));

function saveHtmlToFile(){

}

function main() {
    articleLinks.map((link, i) => {
        let filename = "link"+"_"+i+".html";
        let htmlData = await Axios.get(link);
        fs.writeFile(filename, htmlData, function(err){
            if(err) console.log(err);
            console.log("Html found!")
        })
    })
}