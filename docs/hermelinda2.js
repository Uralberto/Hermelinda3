
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




      // let check = 0

      // function togglePintarMomAnimacion() {
      //   if (check === 0) {
      //     agregarClasesAMomUno()
      //     check = 1;
      //     btn.innerHTML = '<i class="far fa-pause-circle"></i>';
      //   } else {
      //     agregarClasesAMomUno()
      //     check = 0;
      //     btn.innerHTML = '<i class="far fa-play-circle"></i>';
      //   }
      // }

      let check = 0
      
      function togglePintarMomAnimacion() {
          agregarClasesAMomUno()
          setTimeout(removerClasesAMomUno, 5000 )

      }


      // removerClasesAMomUno() 
