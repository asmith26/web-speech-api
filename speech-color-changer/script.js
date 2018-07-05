var recognition = new webkitSpeechRecognition();

recognition.maxAlternatives = 5;
recognition.continuous = false;
recognition.start();

recognition.onresult = function(event) {
  var SpeechRecognitionResult = event.results[0]

  for (var k = 0; k < SpeechRecognitionResult.length; k++) {
    var transcript = SpeechRecognitionResult[k].transcript;
    var confidence = SpeechRecognitionResult[k].confidence;
  
    console.log('Transcript: '+transcript+'; Confidence: '+confidence);
  }
}
