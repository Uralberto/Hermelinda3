
const momPaths = document.getElementsByClassName("momPath");
const momUno = document.getElementById("momUno")

console.log(momPaths)
console.log(momUno)

      const btn = document.getElementById("momContainer_boton")
      
      function agregarClasesAMomUno() {
          momUno.classList.add('momUno', 'monDos', 'momTres','momCuatro','momCinco' )
      }


      function removerClasesAMomUno() {
        momUno.classList.remove('momUno', 'monDos', 'momTres','momCuatro','momCinco' )
    }


      function togglePintarMomAnimacion() {
          agregarClasesAMomUno()
          setTimeout(removerClasesAMomUno, 5000 )

      }


