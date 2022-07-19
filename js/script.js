const DATA_URL = "./js/test.json";
const secPanels = document.querySelector('#sectionPanels');
const secImg2 = document.querySelector('#images2');
const secPan2 = document.querySelector('#sectionPanels2');
const fotos = document.querySelector('#fotos');
const images33 = document.querySelector('#images33');
const table1 = document.querySelector('#tab1');
const table2 = document.querySelector('#tab2');

window.addEventListener('load', () => {
  fetch(DATA_URL)
    .then(respone => respone.json())
    .then(result => {
      // section id="sectionPanels"
      result.arrSecPan.forEach(element => {
        const productHTML = `
            <div>
              <h3>${element.h3}</h3>
              <h4>${element.h4}</h4>
            </div>
            `
        secPanels.insertAdjacentHTML('beforeend', productHTML);
      });
      // section id="images2"
      result.arrImg2.forEach(element => {
        const productHTML = `
                  <div class="responsive">
                     <div class="gallery">
                       <a target="_blank" href="">
                         <img src="images/${element.img}.jpg" alt="${element.alt}" width="600" height="400">
                       </a>
                       <div class="desc">${element.text}</div>
                     </div>
                  </div>
                  `
        secImg2.insertAdjacentHTML('beforeend', productHTML);
      });
      // section id="sectionPanels2"
      result.arrPan2.forEach(element => {
        const productHTML = `
                <div>
                  <h3>${element.h3}</h3>
                 <h4>${element.h4}</h4>
                </div>
                `
        secPan2.insertAdjacentHTML('beforeend', productHTML);
      });
      // div id="fotos"
      result.arrFotos.forEach(element => {
        const productHTML = `
                <div class="responsive3">
                  <div class="gallery3">
                    <a target="_blank" href="">
                        <img src="images/${element.img}.jpg" alt="${element.h2}">
                    </a>
                    <div class='fotosText'>
                        <h2>${element.h2}</h2>
                        ${element.text}
                    </div>
                  </div>
                </div>
                `
        fotos.insertAdjacentHTML('beforeend', productHTML);
      });
      // section id="images33"
      result.arrimg33.forEach(element => {
        const productHTML = `
                    <div class="responsive33">
                       <div class="gallery33">
                             <a target="_blank" href="">
                             <img src="images/${element.img}.jpg" alt="${element.h2}">
                             </a>
                            <div>
                               <a href="" style="float: left;">&#128100; Admin</a>
                               <a href="" style="float: right;">&#128387; Comments</a>
                            </div>
                     </div>
                   </div>
                    `
        images33.insertAdjacentHTML('beforeend', productHTML);
      });
      // tr id="tab1"
      result.arrtable1.forEach(element => {
        const productHTML = `
                                <th style=" border-left: 1px solid rgb(117, 117, 117);">
                                    <div class="text1">${element.data}</div>
                                    <div class="text2">${element.text}</div>
                                </th>
                               `
        table1.insertAdjacentHTML('beforeend', productHTML);
      });
      // div id="tab2"
      result.arrtable2.forEach(element => {
        const productHTML = `
                                <a href="">
                                  <button class="${element.class}">
                                    <div style="padding-bottom: ${element.pd}px;">
                                      <strong>${element.strong}</strong>
                                     </div>
                                     <div>${element.text}</div>
                                  </button>
                                 </a>
                                `
        table2.insertAdjacentHTML('beforeend', productHTML);
      });
    })
})




