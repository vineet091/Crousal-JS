import "./styles.css";

function CreateCrousal() {
  var box;
  var activeIndex = 0;
  var Images = [
    {
      src: "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg",
      name: "Image-1"
    },
    {
      src:
        "https://jenmulligandesign.com/wp-content/uploads/2017/04/pexels-beach-tropical-scene-free-stock-photo.jpg",
      name: "Image-2"
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
      name: "Image-3"
    }
  ];
  this.init = function () {
    box = document.createElement("div");

    box.style.maxHeight = "400px";
    //box.style.position = "relative";
    box.style.cssText =
      "display:flex; position: relative; width: 100%; height: 400px; max-height: 400px; flex-grow: 1";
    document.getElementById("app").appendChild(box);
    for (var i = 0; i < Images.length; i++) {
      var img = this.getImage(Images[i], i);
      box.appendChild(img);
    }
    var leftBtn = this.getButton("<");
    leftBtn.style.cssText =
      "position: absolute; align-self:center;left: 0;padding: 15px 20px; font-size: 30px; background-color: #bbb; border: none";
    leftBtn.setAttribute("id", "btn-left");
    leftBtn.addEventListener("click", () => {
      console.log(this);
      this.changeImage("left");
    });
    box.appendChild(leftBtn);
    var rightBtn = this.getButton(">");
    rightBtn.style.cssText =
      "position: absolute; align-self:center; right: 0;padding: 15px 20px; font-size: 30px; background-color: #bbb; border: none";
    rightBtn.setAttribute("id", "btn-right");
    rightBtn.addEventListener("click", () => {
      this.changeImage("right");
    });
    box.appendChild(rightBtn);
    document.getElementById("image-0").style.display = "inline-block";
    document.getElementById("btn-left").setAttribute("disabled", true);
  };
  this.getImage = function (image, index) {
    var img = document.createElement("img");
    img.setAttribute("src", image.src);
    img.setAttribute("alt", image.name);
    img.setAttribute("id", "image-" + index);
    img.classList.add("c-image");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.display = "none";
    return img;
  };

  this.getButton = function (text) {
    var btn1 = document.createElement("button");
    btn1.style.position = "absolute";
    btn1.innerHTML = text;
    return btn1;
  };
  this.changeImage = function (direction) {
    if (direction === "left") {
      if (activeIndex > 0) {
        activeIndex--;
      }
    } else {
      if (activeIndex < Images.length) {
        activeIndex++;
      }
    }
    const images = document.querySelectorAll(".c-image");
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    console.log(images);
    document.getElementById("image-" + activeIndex).style.display =
      "inline-block";
    if (activeIndex === 0) {
      document.getElementById("btn-left").setAttribute("disabled", true);
    } else {
      document.getElementById("btn-left").removeAttribute("disabled");
    }
    if (activeIndex === Images.length - 1) {
      document.getElementById("btn-right").setAttribute("disabled", true);
    } else {
      document.getElementById("btn-right").removeAttribute("disabled");
    }
  };
}

var corousal = new CreateCrousal();
corousal.init();
