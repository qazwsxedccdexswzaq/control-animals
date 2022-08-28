function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MsWCBinP5/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);

        cat = 0;
        dog = 0;
        img = document.getElementById('listen');
        console.log(cat,dog);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected - '+results[0].label;
        document.getElementById("result_count").innerHTML= 'Detected Dog - '+ dog +' Detected Cat - '+ cat;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        if (results[0].label == "meow") {
            img.src = 'meow.gif';
            cat++;
        }else if (results[0].label == "bark") {
            img.src = 'bark.gif';
            dog++;
        }else if (results[0].label == "Background Noise") {
            img.src = 'listen.gif';
        }
    }
}