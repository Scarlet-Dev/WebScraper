const fs = require('fs');
const Article = require("./gramblinite-links.json");
const axios = require("axios").default;
const cheerio = require('cheerio');


function main() {
    var articleLinks = new Array();
    articleLinks = Article["published-works"].map(i => {return i.link});
    articleLinks.map((link, i) => {
        
        let filename = "link"+"_"+i+".html";
        let path = "htmlSource";

        var pathToFile = path+"/"+filename;

        axios.get(link)
        .then(response => response.data)
        .then(data => { 
            fs.writeFile(pathToFile, data, function(err){
                if(err) console.log(err);
                console.log("Html found!")
            });
        })
        .catch(err => console.log(err));

    })
}

main()