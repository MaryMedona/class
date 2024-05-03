Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version :',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qGZxuTj4h/',modelLoaded);

function modelLoaded()
{
    console.log('model loaded!');
}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_gesture_name").innerHTML=result[0].label;
        document.getElementById("result_gesture_name2").innerHTML=result[1].label;
        prediction_1=result[0].label;
        prediction_2=result[1].label;
    
        if(result[0].label=="Amazing")
        {
            document.getElementById("update_gesture").innerHTML="&#9996;";
        }

        if(result[0].label=="Best")
        {
            document.getElementById("update_gesture").innerHTML="&#128076;";
        }

        if(result[0].label=="Victory")
        {
            document.getElementById("update_gesture").innerHTML="&#128077;";
        }


        if(result[1].label=="Amazing")
        {
            document.getElementById("update_gesture2").innerHTML="&#9996;";
        }

        if(result[1].label==" All the Best")
        {
            document.getElementById("update_gesture2").innerHTML="&#128076;";
        }

        if(result[1].label=="Victory")
        {
            document.getElementById("update_gesture2").innerHTML="&#128077;";
        }
    }
}