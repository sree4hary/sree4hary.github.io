var i = 0;
var txt1 = "Hi, there. I'm Sreehari Surabind. I'm an Aspiring Java Backend Developer.";
var speed = 50;

function typeWriter() {
    if (i < txt1.length) {
      document.getElementById("typeWriter").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}