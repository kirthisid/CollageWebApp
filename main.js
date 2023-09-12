var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (e) {
    console.log(e);
    content=e.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
speak()
}
function speak(){
    synth=window.speechSynthesis
    speak_data= document.getElementById("textbox").value
    utterthis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis+"🤣")
    Webcam.attach(camera)
}
Webcam.set({
    width:350,
    height:250,
    Image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")