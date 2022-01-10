var fir = document.getElementById("s11")
var sec = document.getElementById("s12")
var thir = document.getElementById("s13")
var four = document.getElementById("s14")
var fif = document.getElementById("s15")
var six = document.getElementById("s21")
var sev = document.getElementById("s22")

console.log(fir.innerHTML)

function dob(h, entry, stin) {
  entry.target.innerHTML = entry.target.innerHTML + stin[h]
}

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        switch(entry.target) {
          case fir:
          case sec:
          case thir:
          case four:
          case fif:
          entry.target.classList.add("perv")
          break;
          case six:
          case sev:
          entry.target.classList.add("vtor")
          break;
        }
      }
    })

})

observer.observe(fir)
observer.observe(sec)
observer.observe(thir)
observer.observe(four)
observer.observe(fif)
observer.observe(six)
observer.observe(sev)
