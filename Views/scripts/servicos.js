// querySelector() returns the first Element within the document that matches the specified selector
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const displayedText = document.querySelector('.displayed-txt');

 //Declaring the array of image filenames 
const images = ['../Images/Foto1.jpg', `../Images/Foto2.jpg`, `../Images/Foto3.jpg`, `../Images/Foto4.jpg`, `../Images/Foto5.jpg`, `../Images/Foto6.jpg`];

// Declare an array of text for each image
const imageText = [
  'Tinturaria: O tingimento consiste na alteração ou no reavivar da cor de uma peça de vestuário. É um processo efetuado a altas temperaturas pelo que é necessário ter em atenção a resistência do tecido. Entre em contato conosco para avaliar o tipo de tingimento e cor desejados, bem como qual é o tingimento ideal para o seu tipo de tecido.', 
  'O delavé vem da França e indica que o tecido passou por um intenso processo de desbotamento ou descoloração de seu tom natural. Durante a fabricação do jeans delavé ele é submetido à lavagens feitas com produtos químicos que eliminam o índigo da peça e dão um toque de maciez ao denim, criando uma tonalidade mais clara.', 
  ' Estonagem ou Stonewash: Técnicas usadas para acelerar o desbotamento ou clareamento do jeans. Apesar do termo stone (do inglês, pedra), o processo pode ser realizado usando diferentes materiais. Apenas com pedra ou só com enzimas ou com a mistura dos dois. A intensidade do desgaste depende do tamanho da máquina lavadora, do número de pedras usado para o atrito, da quantidade de enzimas, entre outras variáveis. Lavagens como essa demoram, em média, uma hora. O aspecto desgastado ou de usado fica mais intenso nas regiões de costura, bolsos, vistas, cós. Pode ser aplicada também em peças tingidas ou estampadas. A técnica pode ser combinada com diversos tipos de estilizações, como puídos, que desgastam a peça em lugares como barras, parte de cima dos bolsos, pernas, dando o efeito de desfiado, rasgado, utilizando pedras e rebolos em maquina de alta rotação (retifica).', 
  'Sky Bleach é um processo artesanal onde cada peça tem um visual único! Seu nome faz alusão à um céu com nuvens! O processo pode ser feito de várias formas, variando assim a intensidade do efeito! Aposte nessa tendência que é um diferencial dentro do guarda-roupa jeans', 
  'Tingimento Sulfuroso: Tingimento cationizado sobre peças confeccionadas em PT e Jeans; podendo se criar diversos efeitos diferenciados após tingimento tais como: corrosão, puídos, marmorização, bigodes resinados, pigmentados etc. E pode ser combinado por exemplo com bigodes resinados, que gera o efeito de bigodes tridimensionais.', 
  'Used: Como o termo em inglês indica, tipo de beneficiamento que deixa o tecido ou a peça pronta com aspecto de muito usado. Para obter esse efeito, é usado jato de permanganato, de areia, alumínio, entre outras substâncias.'];

//Looping through images and add text divs
for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement('img'); //Cria as outras 5 img no HTML
  newImage.setAttribute('src', `images/${images[i]}`); //Adiciona o atributo src as 5 img em images
  thumbBar.appendChild(newImage); //Adiciona as imagens criadas a div com classe thumbbar

  // Create the text div and set its text content
  const textDiv = document.createElement('div');
  textDiv.textContent = imageText[i]; //textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.
  textDiv.classList.add('text');
  textDiv.style.zIndex = '999';
  
  
  newImage.addEventListener('click', e => {
    // Hide all divs texts in every click
    const textDivs = document.getElementsByClassName('text');
    for (let j = 0; j < textDivs.length; j++) {
      textDivs[j].style.display = 'none';
    }
    // Show the text div for the clicked image according to index i
    textDiv.style.display = 'block';
    displayedText.appendChild(textDiv); // displays text
    displayedImage.src = e.target.src; //event.target.src indica qual a src que deve ser anexada ao displayed image quando o click e acionado
  });
}


