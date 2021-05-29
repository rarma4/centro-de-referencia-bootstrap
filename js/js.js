
document.querySelector("#ac").addEventListener("click",(e)=>{uf.value = "AC";listar("AC")})
document.querySelector("#al").addEventListener("click",(e)=>{uf.value = "AL";listar("AL")})
document.querySelector("#ap").addEventListener("click",(e)=>{uf.value = "AP";listar("AP")})
document.querySelector("#am").addEventListener("click",(e)=>{uf.value = "AM";listar("AM")})
document.querySelector("#ba").addEventListener("click",(e)=>{uf.value = "BA";listar("BA")})
document.querySelector("#ce").addEventListener("click",(e)=>{uf.value = "CE";listar("CE")})
document.querySelector("#df").addEventListener("click",(e)=>{uf.value = "DF";listar("DF")})
document.querySelector("#es").addEventListener("click",(e)=>{uf.value = "ES";listar("ES")})
document.querySelector("#go").addEventListener("click",(e)=>{uf.value = "GO";listar("GO")})
document.querySelector("#ma").addEventListener("click",(e)=>{uf.value = "MA";listar("MA")})
document.querySelector("#mt").addEventListener("click",(e)=>{uf.value = "MT";listar("MT")})
document.querySelector("#ms").addEventListener("click",(e)=>{uf.value = "MS";listar("MS")})
document.querySelector("#mg").addEventListener("click",(e)=>{uf.value = "MG";listar("MG")})
document.querySelector("#pa").addEventListener("click",(e)=>{uf.value = "PA";listar("PA")})
document.querySelector("#pb").addEventListener("click",(e)=>{uf.value = "PB";listar("PB")})
document.querySelector("#pr").addEventListener("click",(e)=>{uf.value = "PR";listar("PR")})
document.querySelector("#pe").addEventListener("click",(e)=>{uf.value = "PE";listar("PE")})
document.querySelector("#pi").addEventListener("click",(e)=>{uf.value = "PI";listar("PI")})
document.querySelector("#rj").addEventListener("click",(e)=>{uf.value = "RJ";listar("RJ")})
document.querySelector("#rn").addEventListener("click",(e)=>{uf.value = "RN";listar("RN")})
document.querySelector("#rs").addEventListener("click",(e)=>{uf.value = "RS";listar("RS")})
document.querySelector("#ro").addEventListener("click",(e)=>{uf.value = "RO";listar("RO")})
document.querySelector("#rr").addEventListener("click",(e)=>{uf.value = "RR";listar("RR")})
document.querySelector("#sc").addEventListener("click",(e)=>{uf.value = "SC";listar("SC")})
document.querySelector("#sp").addEventListener("click",(e)=>{uf.value = "SP";listar("SP")})
document.querySelector("#se").addEventListener("click",(e)=>{uf.value = "SE";listar("SE")})
document.querySelector("#to").addEventListener("click",(e)=>{uf.value = "TO";listar("TO")})
const uf = document.querySelector("#uf2")
const sp = document.querySelector("#sp")
const btnClick = document.querySelector("#btnClick")
const url = "centros-de-referencia.json"

btnClick.addEventListener("click",(e)=>{
  listar(uf.value,uf.value)
})
uf.addEventListener("blur",(e)=>{
  listar(uf.value,uf.value)
})

// https://www.rafart.com.br/centros-de-referencia.json
// var id =  this.id.toUpperCase()

function listar(id ){
  var id =  id
  document.getElementById('row').remove()
  document.getElementById('app').remove()
  var reconstrucao = document.createElement('div');
  reconstrucao.setAttribute('class', 'app')
  reconstrucao.setAttribute('id', 'app')

  var recrow = document.createElement('div');
  recrow.setAttribute('class', 'row')
  recrow.setAttribute('id', 'row')
  reconstrucao.appendChild(recrow)
  
  var lista = document.querySelector("#lista")
  lista.appendChild(reconstrucao)


  var title = document.querySelector("#title")
  title.innerText = "Centro de Referência: "+id;
      
  let search = id
  fetch(url)
  .then((resp)=>resp.json())
  .then(function(data){
    //  console.log(data)
    var count = 0
    for(var i=0;i< data.length; i++){
      if(data[i].UF === search){
        count++
      }
    }
    if(count === 0){

      var reconstrucao = document.createElement('div');
      reconstrucao.setAttribute('class', 'app')
      reconstrucao.setAttribute('id', 'app')

      var recrow = document.createElement('div');
      recrow.setAttribute('class', 'row')
      recrow.setAttribute('id', 'row')
      reconstrucao.appendChild(recrow)

      var lista = document.querySelector("#lista")
      lista.appendChild(reconstrucao)

      var card2 = document.createElement('div');
      card2.setAttribute('class', 'card text-center')

      var inst2 = document.createElement('div');
      inst2.setAttribute('class', 'card-header')
      inst2.innerText = "Sem Registro";
      card2.appendChild(inst2)

      var app2 = document.querySelector("#app")
      app2.appendChild(card2)
    }else{
      for(var i=0;i< data.length; i++){
        if(data[i].UF === search && count !== 0){
          
          var reconstrucao = document.createElement('div');
          reconstrucao.setAttribute('class', 'app')
          reconstrucao.setAttribute('id', 'app')

          var recrow = document.createElement('div');
          recrow.setAttribute('class', 'row')
          recrow.setAttribute('id', 'row')
          reconstrucao.appendChild(recrow)
          
          var lista = document.querySelector("#lista")
          lista.appendChild(reconstrucao)

          var col = document.createElement('div');
          col.setAttribute('class', 'col m-3')
            
          var card = document.createElement('div');
          card.setAttribute('class', 'card text-center')
          col.appendChild(card)

          var inst = document.createElement('div');
          inst.setAttribute('class', 'card-header')
          inst.innerText = data[i].Instituição;
          card.appendChild(inst)

          var end = document.createElement('div');
          end.setAttribute('class', 'card-text p-3')
          end.innerText = `${data[i].Endereço} - ${data[i].Cidade} - ${data[i].UF} - cep: ${data[i].CEP}` ;
          card.appendChild(end)

          var mapstr = `https://www.google.com/maps/place/${data[i].Endereço} - ${data[i].Cidade} - ${data[i].UF} - cep: ${data[i].CEP}`
          var link = document.createElement('div');
          link.setAttribute('class', 'card-footer text-muted')

          varIcon = document.createElement('i')
          varIcon.setAttribute('class', 'fa fa-map-marker')
          link.appendChild(varIcon)

          var linkmap = document.createElement('a')
          linkmap.setAttribute('href',mapstr )
          linkmap.setAttribute('target', '_blank')
          var linkText = document.createTextNode(' Link do Mapa')
          link.appendChild(linkmap)
          linkmap.appendChild(linkText)

          card.appendChild(link)

          var row = document.querySelector("#row")
          row.appendChild(col)
        }
      }
    }
  })
}