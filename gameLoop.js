function GameLoop(contexto, colisao, musica) {
    this.contexto = contexto;
    this.colisao = colisao;
    this.musica = musica;
    
    this.sprites = [];
    this.spritesExcluidos = [];
    this.rodando = false;
    this.gameOver = false;
}

GameLoop.prototype = {
    adicionarSprite: function(sprite) {
        this.sprites.push(sprite);
        sprite.gameLoop = this;
    },
    excluirSprite: function(sprite) {
        this.spritesExcluidos.push(sprite);
    },
    eliminarSprites: function() {
        var arrayAux = [];
        for (var i in this.sprites) {
            if (this.spritesExcluidos.indexOf(this.sprites[i]) == -1) {
                arrayAux.push(this.sprites[i]);
            }
        }
        this.spritesExcluidos = [];
        this.sprites = arrayAux;
    },
    rodar: function() {
        this.rodando = true;
        this.musica.play();
        this.desenhar();
    },
    parar: function() {
        this.rodando = false;
        this.musica.pause();
    },
    desenhar: function() {
        if ( this.rodando ) {
            //this.limpar();
            for (var i in this.sprites) {
                this.sprites[i].atualizar();
            }
            for (var i in this.sprites) {
                this.sprites[i].desenhar();
            }
            this.eliminarSprites();
            this.colisao.verificar();
		   var gameLoop = this;
            requestAnimationFrame(function() {
                gameLoop.desenhar();
            });
        }
    },
    limpar: function() {
        contexto.clearRect(0, 0, this.contexto.canvas.width, 
					this.contexto.canvas.height);
    }
}
