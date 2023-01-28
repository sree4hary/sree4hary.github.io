var i = 0;
var txt1 = "Hi, there. I'm Sreehari Surabind. I'm an Aspiring Java Backend Developer.";
var txt2 = "lhsfsf sjhfkjshf shfksjnhf khkahsflafhlafh khskfh skfhkshkahkhfklhav khsfbkjsfb kshfkbskfh"
var speed = 50;

function typeWriter() {
    if (i < txt1.length) {
      document.getElementById("typeWriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } i = 0;
    if (i < txt.length) {
        document.getElementById("typeWriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
}