# TIME TRACKING DASHBOARD

Solução para criar um painel de controle de tempo.

## Índice

- [Visão geral](#visao-geral)
  - [O Desafio](#o-desafio)
  - [Screenshot](#screenshot)
- [Resultado](#resultado)
- [Minha caminhada](#minha-caminhada)
  - [Propriedades](#propriedades)
  - [O que aprendi](#o-que-aprendi)
  - [Recursos](#recursos)
- [Autor](#autor)

## Visão Geral

### O Desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal para o site, dependendo do tamanho da tela do dispositivo
- Visualizar os estados de foco para todos os elementos interativos na página
- Alternar entre a exibição de estatísticas diárias, semanais e mensais

### Screenshots

<html>
  <h4>Layout mobile</h4>
  <img src="./assets/img/mobile.png" width="300px">
  <h4>Layout desktop </h4>
  <img src="./assets/img/desktop.png" width="920px">
  <h4>Demonstrativo layout desktop </h4>
  <video src="./assets/img/desktop1.mp4"></video>
</html>

## Resultado: [Veja como ficou!](https://painel-temporal.vercel.app/)

## Minha caminhada

1º dia

- [x] Planejamento
- [x] Preparativos

2º dia

- [x] Mobile layout

3º dia

- [x] Desktop layout

4º dia

- [x] Feature de aprensetação dos status semanais

5º dia

- [x] Featuresde aprensetação dos status diários e mensais
- [x] Refatoração das funções

6º dia

- [x] Inclusão de dados pessoais
- [x] Refatoração des todas as funções

7º dia

- [x] Refatoração

### Propriedades

- Mobile-first
- Semântica HTML
- SASS
- TypeScript

### Meu aprendizado

Um projeto simples, mas que até agora é o de maior destaque no desenvolvimento do meu conhecimento. Sua elaboração me fez aprofundar em SASS, JavaScript e até me introduzir ao TypeScript.

TypeScript

```ts
...
const updateStatusOutputs = (index: number, TaskTimeFramesCurrent: number, taskTimeFramesPrevious: number) => {
  currentOutput[index].textContent = `${TaskTimeFramesCurrent}hrs`;
  previousOutput[index].textContent = `Last day - ${taskTimeFramesPrevious}hrs`;
}

const dailyStatus = () => {

  for (let i = 0; i < tasks.length; i++) {
    const taskTimeFramesDailyCurrent = tasks[i].timeFrames.daily.current;
    const taskTimeFramesDailyPrevious = tasks[i].timeFrames.daily.previous;

    updateStatusOutputs(i, taskTimeFramesDailyCurrent, taskTimeFramesDailyPrevious);
  }
};
...
```

Quanto as funcionalidades da página, o desenvolvimento deu-se em TypeScript, além do superset aceitar todas as propriedades de JavaScript, desfrutei dos benefícios de adicionar tipos de maneira extremamente limpa, tonando o código mais seguro. Ainda no aspecto da aplicação, o conceito de refatoração foi posto em prática, com a ajuda dos iteradores e funções de ordem superiores.

SASS

```scss
...
@use 'variables'
@use 'mixins'
...
```

O site foi estilizado em SASS, utilizando a skin ".sass" pela primeira vez, pratiquei a importação de outras folhas de estilo, separando variáveis e mixins em arquivos aparte, que resultou em uma folha de estilo mais organizada e intuitiva.

### Recursos

- [TYPESCRIPT - Documentation](https://www.typescriptlang.org/docs/) - Saiba mais sobre o superset.

- [SASS - Documentation](https://sass-lang.com/documentation/) - Nesse site você saberá tudo sobre o mundo SASS.

- [O desafio da Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw) - Neste link você encontrará o desafio solucionado aqui.

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
