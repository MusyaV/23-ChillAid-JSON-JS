// section id="sectionPanels"
const secPanels = document.querySelector('#sectionPanels');
const arrSecPan = [
    {
        h3: 'Faucibus Porttitor Metus',
        h4: 'Ac orci proin porttitor lacus eget mi pellentesque non.'
    },
    {
        h3: 'Malesuada Accumsan',
        h4: 'Sapien sed metus congue sodales vivamus scelerisque.'
    },
    {
        h3: 'Mauris Placerat',
        h4: 'Et interdum vulputate purus nisl fringilla sapien quis.'
    },
    {
        h3: 'Elementum Rhoncus',
        h4: 'Sollicitudin dui mauris dui nunc lorem tortor pharetra.'
    }
]
arrSecPan.forEach(element => {
    const productHTML = `
    <div>
      <h3>${element.h3}</h3>
      <h4>${element.h4}</h4>
    </div>
    `
    secPanels.insertAdjacentHTML('beforeend', productHTML);
});

// section id="images2"
const secImg2 = document.querySelector('#images2');
const arrImg2 = [
    {
        img: 2,
        alt: 'Cinque Terre',
        text: 'Accumsan Placerat'
    },
    {
        img: 3,
        alt: 'Forest',
        text: 'Scelerisque Etiam'
    }
]

arrImg2.forEach(element => {
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
const secPan2 = document.querySelector('#sectionPanels2');
const arrPan2 = [
    {
        h3: 'Sociis Natoque Penatibus',
        h4: 'Interdum at congue semper purus nullam quis odio id justo accumsan ullamcorper maecenas vel arcu nulla tincidunt elit ornare.'
    },
    {
        h3: 'Magnis Parturient Montes',
        h4: 'Urna proin venenatis eros viverra ultrices fringilla lectus urna consequat erat eget scelerisque ligula felis nec neque nam.'
    },
    {
        h3: 'Nascetur Ridiculus Aenean',
        h4: 'Vitae ipsum vitae velit porttitor aliquam in quam aliquam ullamcorper sem a auctor dapibus nisi nunc vehicula nunc quis mattis.'
    },
    {
        h3: 'Ullamcorper Neque Phasellus',
        h4: 'Pede turpis at elit nunc at urna sed ligula vivamus vel erat at diam imperdiet pharetra quisque justo turpis mattis ut vitae.'
    },
    {
        h3: 'Aliquet Lacus Nulla Erat',
        h4: 'Tortor aenean leo ipsum elementum non cursus eu interdum ut risus proin risus nibh viverra eget lobortis feugiat egestas in nisl.'
    },
    {
        h3: 'Aliquam Volutpat Curabitur',
        h4: 'Fusce dignissim neque vitae justo aenean ac urna et leo posuere pretium nunc bibendum enim quis imperdiet elementum dui dolor.'
    }
]
arrPan2.forEach(element => {
    const productHTML = `
    <div>
      <h3>${element.h3}</h3>
     <h4>${element.h4}</h4>
    </div>
    `
    secPan2.insertAdjacentHTML('beforeend', productHTML);
});

// div id="fotos"
const fotos = document.querySelector('#fotos');
const arrFotos = [
    {
        img: 6,
        h2: 'A. Doe',
        text: 'Euismod nec hendrerit'
    },
    {
        img: 7,
        h2: 'B. Doe',
        text: 'Vel velit aliquam massa'
    },
    {
        img: 8,
        h2: 'C. Doe',
        text: 'Vulputate aliquet purus'
    },

]
arrFotos.forEach(element => {
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
const images33 = document.querySelector('#images33');
const arrimg33 = [
    {
        img: 11,
        h2: 'A. Doe',
    },
    {
        img: 12,
        h2: 'A. Doe',
    },
    {
        img: 13,
        h2: 'A. Doe',
    },
]
arrimg33.forEach(element => {
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
const table1 = document.querySelector('#tab1');
const arrtable1 = [
    {
        data: '05 APR 2045',
        text: 'Quam Justo Suscipit At Blandit At Blandit Vitae Tellus Maecenas'
    },
    {
        data: '06 APR 2045',
        text: 'Commodo Mauris A Semper Posuere Sem Arcu Cursus Felis Non Cursus'
    },
    {
        data: '07 APR 2045',
        text: 'Enim Odio In Odio Suspendisse Commodo Suscipit Nisi Nam Tellus'
    },
]
arrtable1.forEach(element => {
    const productHTML = `
                    <th style=" border-left: 1px solid rgb(117, 117, 117);">
                        <div class="text1">${element.data}</div>
                        <div class="text2">${element.text}</div>
                    </th>
    `
    table1.insertAdjacentHTML('beforeend', productHTML);
});

// div id="tab2"
const table2 = document.querySelector('#tab2');
const arrtable2 = [
    {
        class: 'phone',
        pd: 7,
        strong: 'Give Us A Call:',
        text: '+00 (123) 456 7890'
    },
    {
        class: 'mail',
        pd: 12,
        strong: 'Send Us A Mail:',
        text: 'support@domain.com'
    },
    {
        class: 'visit',
        pd: 12,
        strong: 'Come Visit Us:',
        text: 'Directions to our location'
    }
]
arrtable2.forEach(element => {
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