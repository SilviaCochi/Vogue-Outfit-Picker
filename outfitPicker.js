console.log('Hi');
const button = document.querySelector('.outfit-button');
const body = document.querySelector('.abc');
console.log(body);
const colors = ["olive", "purple", "darkcyan","orange","hotpink"];
var colorIndex = "";
body.style.backgroundColor = 'white';
button.addEventListener('click', changeBackground);


const bag_image = document.getElementById('bag');
const dress_image = document.getElementById('dress');
const shoe_image = document.getElementById('shoe');


function changeBackground(){
    colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex]; 
    
    if (colorIndex === 0){
        shoe_image.setAttribute('src', colour_olive[0]);
        dress_image.setAttribute('src', colour_olive[1]);
        bag_image.setAttribute('src', colour_olive[2]);
        console.log('I am olive');
    }  
    else if (colorIndex === 1){
        shoe_image.setAttribute('src', colour_purple[0]);
        dress_image.setAttribute('src', colour_purple[1]);
        bag_image.setAttribute('src', colour_purple[2]);
        console.log('I am purple');
    }
    else if (colorIndex === 2){
        shoe_image.setAttribute('src', colour_darkcyan[0]);
        dress_image.setAttribute('src', colour_darkcyan[1]);
        bag_image.setAttribute('src', colour_darkcyan[2]); 
        console.log('I am dark cyan');
    }
    else if (colorIndex === 3){
        shoe_image.setAttribute('src', colour_orange[0]);
        dress_image.setAttribute('src', colour_orange[1]);
        bag_image.setAttribute('src', colour_orange[2]);
        console.log('I am orange');
    }   
    else if (colorIndex === 4){
            shoe_image.setAttribute('src', colour_hotpink[0]);
            dress_image.setAttribute('src', colour_hotpink[1]);
            bag_image.setAttribute('src', colour_hotpink[2]);
            console.log('I am hotpink');
    }
}
    



 /*else if (colors[1]){
    shoe_image.setAttribute(colour_purple['purple'][0]);
    dress_image.setAttribute(colour_purple['purple'][1]);
    bag_image.setAttribute(colour_purple['purple'][2]);

} else if (colors === 'darkcyan'){
    shoe_image.setAttribute(colour_darkcyan['darkcyan'[0]]);
    dress_image.setAttribute(colour_darkcyan['darkcyan'][1]);
    bag_image.setAttribute(colour_darkcyan['darkcyan'][2]);
}     
        
*/
const colour_olive = ['https://www.net-a-porter.com/variants/images/20346390235515154/in/w920_q80.jpg', 'https://www.net-a-porter.com/variants/images/11452292646015081/in/w2000.jpg','https://www.net-a-porter.com/variants/images/18706561955415478/in/w920_q80.jpg'];
const colour_orange = ['https://www.net-a-porter.com/variants/images/2204324140125045/in/w920_q80.jpg','https://www.net-a-porter.com/variants/images/11452292646257173/ou/w2000_q80.jpg','https://chiswick.blob.core.windows.net/stock/125843-1.jpg?v=63721275557430'];
const colour_purple = ['https://bottega-veneta.dam.kering.com/m/32495a4b65bebddb/Large-608854VBSS05119_A.jpg?v=5', 'https://cdn-images.farfetch-contents.com/16/66/58/25/16665825_32650039_1000.jpg', 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c1/P00583155.jpg'];
const colour_darkcyan = ['https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/0c/P00536495.jpg', 'https://cdn-images.farfetch-contents.com/16/57/61/57/16576157_32474506_1000.jpg', 'https://cdn-images.farfetch-contents.com/15/39/72/85/15397285_30371027_1000.jpg'];
const colour_hotpink = ['https://cdn-images.farfetch-contents.com/16/83/88/29/16838829_33379477_1000.jpg','https://www.net-a-porter.com/variants/images/15546005222260549/in/w920_q80.jpg','https://www.net-a-porter.com/variants/images/19971654706599340/in/w920_q80.jpg'];


/*
const colour_purple = {'purple': ['pshoe', 'pdress','pbag']};
const colour_darkcyan = {'darkcyan': ['dshoe', 'ddress','dbag']};
const colour_orange = {'orange': ['orshoe', 'ordress','orbag']};
const colour_hotpink = {'hotpink': ['hshoe', 'hdress','hbag']};

console.log(colour_olive['olive'])*/

/*

Olive 
oshoe = https://www.net-a-porter.com/variants/images/20346390235515154/in/w920_q80.jpg
odress = https://www.net-a-porter.com/variants/images/11452292646015081/in/w2000.jpg
obag = https://www.net-a-porter.com/variants/images/18706561955415478/in/w920_q80.jpg

purple 
pshoe =https://bottega-veneta.dam.kering.com/m/32495a4b65bebddb/Large-608854VBSS05119_A.jpg?v=5
pdress = https://cdn-images.farfetch-contents.com/16/66/58/25/16665825_32650039_1000.jpg
pbag = https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c1/P00583155.jpg

Darkcyan
dshoe = https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/0c/P00536495.jpg
ddress = https://cdn-images.farfetch-contents.com/16/57/61/57/16576157_32474506_1000.jpg
dbag = https://cdn-images.farfetch-contents.com/15/39/72/85/15397285_30371027_1000.jpg
 
Orange 
orshoe=  https://www.net-a-porter.com/variants/images/2204324140125045/in/w920_q80.jpg
ordres= https://www.net-a-porter.com/variants/images/11452292646257173/ou/w2000_q80.jpg
orbag =  https://chiswick.blob.core.windows.net/stock/125843-1.jpg?v=63721275557430

Hot pink:
hshoe= https://cdn-images.farfetch-contents.com/16/83/88/29/16838829_33379477_1000.jpg
dress= https://www.net-a-porter.com/variants/images/15546005222260549/in/w920_q80.jpg
hbag = https://www.net-a-porter.com/variants/images/19971654706599340/in/w920_q80.jpg
*/