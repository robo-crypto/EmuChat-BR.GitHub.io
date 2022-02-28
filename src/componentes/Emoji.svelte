< estilo >
	:global( .emoji ) {
		família de fontes : Arial , Helvetica , sans-serif ;
		borda : nenhuma ;
		fundo : transparente ;
		cursor : ponteiro ;
		tamanho da fonte : 1,3 em ;
		largura : 1,5 cm ;
		altura : 1,5 cm ;
		preenchimento : 0,2 em ;
		margem : 0 ;
	}
	:global( .engine-webkit  .emoji ) {
		família de fontes : Twemoji, Arial , Helvetica , sans-serif ;
	}
	:global( .engine-gecko  .emoji ) {
		família de fontes : Twemoji, Arial , Helvetica , sans-serif ;
	}
	:global( .engine-edgehtml  .emoji ) {
		família de fontes : Twemoji, Arial , Helvetica , sans-serif ;
	}
	:global( .emoji :hover ) {
		fundo : #7d7d7d ;
		raio da borda : 5 px ;
	}
	:global( .emoji  img ) {
		largura : 1 em ;
		altura : 1 cm ;
		alinhamento vertical : meio ;
	}
	:global( .emoji  svg ) {
		largura : 1 em ;
		altura : 1 cm ;
	}
</ estilo >

< roteiro >
	import { onMount , createEventDispatcher } de  ' svelte '
	importar  Emojis  de  ' ../../js/emojis '
	export  let showEmojis
	exportar  deixe emoji
	const  despacho  =  createEventDispatcher ()
	deixe montado
	botão deixe
	deixe substituído
	deixe currentEmoji =  emoji . emoji
	$ :  if (showEmojis && montado && botão) {
		if (currentEmoji && currentEmoji !==  emoji . emoji ) {
			botão . innerHTML  =  emoji . emoji
			currentEmoji =  emoji . emoji
			botão =  Emojis . substituir (botão)
		}
	}
	onMount (() => {
		montado =   verdadeiro
		if (showEmojis && botão &&  ! substituído) {
			botão =  Emojis . substituir (botão)
			substituído =  verdadeiro
		}
	})
	função  ao clicar () {
		despacho ( ' emojiclick ' , emoji)
	}
	função  onMouseOver () {
		despacho ( ' emojihover ' , emoji)
	}
	função  onMouseOut () {
		despacho ( ' emojihover ' , null )
	}
</ script >

< button  class = "emoji"  on:mouseover ={ onMouseOver } on:mouseout ={ onMouseOut } on:click ={ onClick } type = "button"  bind:this ={ button }>{ emoji . botão emoji }</ >
