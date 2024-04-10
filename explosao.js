// Arquivo: explosao.js
var SOM_EXPLOSAO = new Audio();
SOM_EXPLOSAO.src = "snd/explosao.mp3";
SOM_EXPLOSAO.volume = 0.4;
SOM_EXPLOSAO.load();

function Explosao(contexto, imagem, x, y) {
    this.contexto = contexto;
    this.imagem = imagem;
    this.x = x;
    this.y = y;
    this.spritesheet = new Spritesheet(contexto, imagem, 1, 5, 200);
    
    SOM_EXPLOSAO.currentTime = 0.0;
    SOM_EXPLOSAO.play();
    this.fimDaExplosao = null;
    var explosao = this;
    this.spritesheet.fimDoCiclo = function() {
        explosao.gameLoop.excluirSprite(explosao);
        if (explosao.fimDaExplosao) {
            explosao.fimDaExplosao();
        }
    }
}

Explosao.prototype = {
    atualizar: function() {
    },
    desenhar: function() {
        this.spritesheet.desenharQuadro(this.x, this.y);
        this.spritesheet.proximoQuadro();
    }
}
