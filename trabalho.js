export function geradorDeTagsDeIdentificacao(nome) {
   
    return nome.toUpperCase();
  }
  
  export function verificarSePodeSerAdotado(idade, porte) {
   
    const p = porte.toUpperCase();
    if ((p === 'P' || p === 'M') && idade >= 1) {
      return true;
    }
    if (p === 'G' && idade >= 2) {
      return true;
    }
    return false;
  }
  
  export function calcularConsumoDeRacao(nome, idade, peso) {
    
    return peso * 300;
  }
  
  export function decidirTipoDeAtividadePorPorte(porte) {
    
    switch (porte.toLowerCase()) {
      case 'pequeno':
        return 'brincar dentro de casa';
      case 'médio':
      case 'medio':
      case 'med':
        return 'passear na rua';
      case 'grande':
        return 'correr no parque';
      default:
        return 'atividade não definida';
    }
  }
  
  export async function buscarDadoAsync() {
    
    return Promise.resolve('Pipoca');
  }
  