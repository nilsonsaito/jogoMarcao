// Arquivo: tiro.js
var SOM_TIRO = new Audio();
SOM_TIRO.src = "snd/tiro.mp3";
SOM_TIRO.volume = 0.2;
SOM_TIRO.load();

function Tiro(contexto, nave) {
    this.contexto = contexto;
    this.nave = nave;
    this.largura = 4;
    this.altura = 20;
    this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
    this.y = nave.y - this.altura;
    this.deslocamento = 10;
    
    SOM_TIRO.currentTime = 0.0;
    SOM_TIRO.play();
}
Tiro.prototype = {
    atualizar: function() {
        this.y -= this.deslocamento;
        if (this.y < -this.altura) {
            this.gameLoop.excluirSprite(this); // Verificar retirada da colisão
        }
    },
    desenhar: function() {
        var ctx = this.contexto;
        ctx.save();
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.restore();
    },
    retangulosColisao: function() {
        var rets = [ 
            {x: this.x, y: this.y, largura: this.largura, altura: this.altura} 
        ];
        var ctx = this.contexto;
        for (var i in rets) {
            ctx.save();
            ctx.strokeStyle = 'yellow';
            ctx.strokeRect(rets[i].x, rets[i].y, rets[i].largura, rets[i].altura);
            ctx.restore();
        }
        return rets
   },
    colidiuCom: function(outro) {
    }
}

