function wishes() {
  let mySound = new Audio("mucic.m4a");
  values = document.getElementById("input").value;
  if (values.trim().length === 0) {
    alert("Enter Your Name");
  } else {
    document.getElementById("main").style.display = "none";
    document.getElementById("wish").style.display = "block";
    document.getElementById("name").innerText = `${values}`;
    // document.body.style.backgroundImage="url('https://www.forevernepal.com/uploads/images/202110/image_750x_615c276f5ff5b.jpg')";
    document.body.style.backgroundImage =
      "url('Screenshot 2023-10-24 124938.png')";
    setTimeout(() => {
      mySound.play();
    }, 1000);
  }
}
