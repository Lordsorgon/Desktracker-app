const opennote = document.getElementById('opennote');
const notecontainer = document.getElementById('notecontainer');
const closenote = document.getElementById('closenote');
const openphone = document.getElementById('openphone');
const phonecontainer = document.getElementById('phonecontainer');
const closephone = document.getElementById('closephone');

opennote.addEventListener("click"), () => {
  	notecontainer.classList.add("show");
};
openphone.addEventListener("click"), () => {
	  phonecontainer.classList.add("show");
};

closenote.addEventListener("click"), () => {
  notecontainer.classList.remove("show");
};
closephone.addEventListener("click"), () => {
	  phonecontainer.classList.remove("show");
};
