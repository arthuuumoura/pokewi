let nomes = ['Camila','Henrique', 'Arthur', 'Júlia'];
let nome = document.querySelector('#nome');
let setinha = document.querySelector('#setinha');
let posicao = 0;
let imagens = ['imgs/camila.jpg', 'imgs/henrique.jpg', 'imgs/arthur.jpg', 'imgs/julia.jpg'];
let descricoes = ['Aluna fofinha, calma para a maioria das coisas e um pouco louquinha.', '', 'Aluno broken da sala, bom em futebol, bonito e inteligente.', 'Aluna um pouco dispersa, muito animada e inteligente.'];
let fotinhas = document.querySelector('#fotinhas');
let descricao = document.querySelector('#descricao');
nome.innerHTML = "<p>" + nomes[0] + "</p>";
fotinhas.innerHTML = "<img src=" + imagens[0] + ">";
descricao.innerHTML = "<p>" + descricoes[0] + "</p>";

setinha.addEventListener('click',function(){
	posicao ++;
	if(posicao == 4){
		posicao = 0;
	}
	nome.innerHTML = "<p>" + nomes[posicao] + "</p>";
	fotinhas.innerHTML = "<img src=" + imagens[posicao] + ">";
	descricao.innerHTML = "<p>" + descricoes[posicao] + "</p>";
});
