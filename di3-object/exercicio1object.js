let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorrente = 'Sim';

  for (const key in info) {
    console.log(info[key]);
  }

  for (const key in info) {
    console.log(key);
  } 
  //console.log(info);
  //console.log('Ola , ', info.personagem);