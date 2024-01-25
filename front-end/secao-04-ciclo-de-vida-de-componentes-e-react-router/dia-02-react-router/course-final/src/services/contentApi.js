// const CONTENT_API_URL = 'https://inss-project.vercel.app/api/course';
const REQUEST_TIMEOUT = 1000;

const responses = {
  fundamentals: {
    id: 'fundamentals',
    module: 'Fundamentos',
    description: 'Nosso primeiro módulo te ensinará tudo que '
      + 'você precisa saber para iniciar sua carreira no mundo '
      + 'do desenvolvimento Web, virando uma pessoa preparada '
      + 'para os módulos de front-end e back-end. Vamos te guiar, '
      + 'etapa a etapa, por toda essa jornada!',
    color: '#BDD5FF',
    section: [
      {
        sectionNumber: '1.1',
        sectionTitle: 'Unit & Bash - Parte 1',
      },
      {
        sectionNumber: '1.2',
        sectionTitle: 'Unit & Bash - Parte 2',
      },
      {
        sectionNumber: '2.1',
        sectionTitle: 'Git - O que é e pra que serve',
      },
      {
        sectionNumber: '2.2',
        sectionTitle: 'Git & GitHub - Entendendo os comandos',
      },
    ],
  },
  front: {
    id: 'front',
    module: 'Front-end',
    description: 'Neste módulo, você vai aprender as técnicas e '
      + 'ferramentas mais atuais para desenvolver um código de '
      + 'front-end que seja rápido, bonito e testável.',
    color: '#A0F046',
    section: [
      {
        sectionNumber: '1.1',
        sectionTitle: 'JavaScript Assíncrono e Callbacks',
      },
      {
        sectionNumber: '1.2',
        sectionTitle: 'JavaScript Assíncrono - Fetch ',
      },
      {
        sectionNumber: '2.1',
        sectionTitle: '“Hello, world!” no React!',
      },
      {
        sectionNumber: '2.2',
        sectionTitle: 'Componentes React',
      },
    ],
  },
  back: {
    id: 'back',
    module: 'Back-end',
    description: 'Neste módulo, você vai aprender como desenvolver '
      + 'um código de back-end robusto, limpo, escalável e seguro, '
      + 'dominando o uso de bancos de dados, a construção de APIs com '
      + 'testes automatizados.',
    color: '#FCF1CF',
    section: [
      {
        sectionNumber: '1.1',
        sectionTitle: 'Utilizando Containers - Docker',
      },
      {
        sectionNumber: '1.2',
        sectionTitle: 'Manipulando Imagens no Docker',
      },
      {
        sectionNumber: '2.1',
        sectionTitle: 'Banco de dados SQL',
      },
      {
        sectionNumber: '2.2',
        sectionTitle: 'Encontrando dados em um banco de dados',
      },
    ],
  },
  cs:
    {
      id: 'cs',
      module: 'Ciência da Computação',
      description: 'Aqui você aprenderá os principais conceitos da '
      + 'Ciência da Computação que são aplicados no dia a dia do '
      + 'desenvolvimento de software e como transformar a teoria em '
      + 'prática, analisando algoritmos e escolhendo as melhores estruturas '
      + 'de dados para resolver os problemas!',
      color: '#F3C5F3',
      section: [
        {
          sectionNumber: '1.1',
          sectionTitle: 'Aprendendo Python',
        },
        {
          sectionNumber: '1.2',
          sectionTitle: 'Entrada e Saída de dados',
        },
        {
          sectionNumber: '2.1',
          sectionTitle: 'P.O.O em Python',
        },
        {
          sectionNumber: '2.2',
          sectionTitle: 'Padrões - Iterador, Adapter, Strategy',
        },
      ],
    },
};

const getContent = (moduleName = '') => new Promise((resolve) => {
  setTimeout(() => {
    resolve(responses[moduleName]);
  }, REQUEST_TIMEOUT);
});

export default getContent;
