function attachEventListner() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function x() {
    console.log("Click kardiya!!!", ++count);
  });
}

attachEventListner();
