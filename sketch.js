//usado para criar o motor de física
const Engine = Matter.Engine;
//usado para criar o mundo físico e adicionar objetos a ele
const World= Matter.World;
//usado para criar os objetos físicos que habitam o mundo
const Bodies = Matter.Bodies;

//declare as variáveis engine e world (motor e mundo)


//declare as variáveis block (1 a 3, elas serão os corpos para nossas formas)



function setup(){
    //cria uma tela
    var canvas = createCanvas(550,600);
    //cria um motor
    engine = Engine.create();
    //cria um mundo
    world = engine.world;

    //crie uma variável plane_options com a propriedade isStatic verdadeira
   


    //crie um corpo plano que será o solo e o adicione ao mundo
    
    
  
    //crie 3 variáveis block_options e lhes adicione diferentes propriedades físicas
    //bloco 1
   

    //bloco 2
    

    //bloco 3
    

    //Crie três corpos com formas diferentes (quadrado, círculo e retângulo), chamando-os de block1, block2 e block3 e os adicione ao world (mundo)
    //block1 = círculo
    
    
    //block2 = quadrado
    
    
    //block3 = retângulo
    
        
    //estilizando os corpos
    

}

function draw(){
  
  //Cor de fundo (background) → coloque a cor que desejar!
  background("pink");

  //Chame update() para atualizar o motor de física
  

  //criada forma para o plano e suporte
  

  //criadas formas para todos os corpos usando ellipse() e rect()
 
 
}
