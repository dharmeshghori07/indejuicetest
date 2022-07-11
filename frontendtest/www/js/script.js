const fruits = [
  {
    id: 1,
    title: "Mangoes",
    from: "from India",
    price: 0.5,
    img: "mangoes.png",
    description:
      "A mango is a juicy stone fruit(drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifere, cultivated mostly for their edible fruit.",
  },
  {
    id: 2,
    title: "Strawberries",
    from: "from spain",
    price: 0.2,
    img: "strawberries.png",
    description:
      "This fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.It is consumed in large quantities and popular in jam,juice,pies & ice cream.",
  },
  {
    id: 3,
    title: "Guavas",
    from: "from Guatemala",
    price: 0.5,
    img: "guavas.png",
    description:
      "Guavas are a common tropical fruit cultivated in many tropical and subtropical regions,originating from an area throught to extend from Mexico or Central America.",
  },
];

// Get modal element
var modal = document.getElementById("fruitModel");

// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", outsideClick);

// Open modal
function openModal(index) {
  console.log(index);
  modal.innerHTML = `
  <div class="modal-content">
  <div class="modal-header">
    <span class="closeBtn" onclick="closeModal()"> X </span>
    <h4>${fruits[index].title}</h4>
  </div>
  <div class="modal-body">
    <img src="img/${fruits[index].img}" alt="" class="image-holder" />

    <div class="text-box">
    <span>&#163;<b>${fruits[index].price}</b> <small> each </small></span>
      <p>
      ${fruits[index].description}
      </p>
    </div>
  </div>
  <div class="modal-footer">
    <h3><button onclick="buyNow()">Buy Now</button></h3>
  </div>
</div>
  `;
  modal.style.display = "block";
}

// Close modal
function buyNow() {
  console.log("Working");
  modal.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
}
