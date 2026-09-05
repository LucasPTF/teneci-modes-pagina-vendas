export type HeroVariant = "a1" | "a2" | "a3";

export const checkoutUrl = "https://pay.hotmart.com/M107093795K";
export const instagramUrl =
  "https://www.instagram.com/tenecimodes?igsh=c25sZTJ5bG5vOGNs&utm_source=qr";

export const heroContent: Record<
  HeroVariant,
  { title: string; support: string; note: string; cta: string }
> = {
  a1: {
    title: "Antes de tentar controlar o que você sente, entenda o que está acontecendo com você.",
    support:
      "Um workshop psicoeducativo para mulheres cristãs que querem compreender a mente acelerada, reconhecer os próprios padrões e aprender um primeiro recurso de regulação, sem transformar sofrimento emocional em falta de fé.",
    note:
      "O objetivo não é zerar a ansiedade em uma noite. É sair do automático com um mapa mais claro do que acontece entre corpo, mente e contexto.",
    cta: "Quero participar do workshop ao vivo",
  },
  a2: {
    title: "Ter fé e ainda sentir ansiedade não precisa virar mais uma razão para se culpar.",
    support:
      "Compreenda o que acontece entre corpo, mente e contexto, reconheça padrões e experimente um primeiro recurso de regulação em uma proposta que respeita sua fé sem transformar sofrimento emocional em falha espiritual.",
    note:
      "Você não precisa escolher entre uma explicação espiritual e uma explicação psicológica. Precisa de um olhar que não reduza sua experiência a uma única dimensão.",
    cta: "Quero aprender sem transformar o que sinto em culpa",
  },
  a3: {
    title: "Você dá conta de muita coisa. Mas por dentro parece que nunca descansa.",
    support:
      "Um workshop ao vivo para mulheres cristãs que seguem funcionando no trabalho, na família e na rotina, mas percebem que a mente continua ligada quando finalmente chega a hora de parar.",
    note:
      "Ser funcional não significa estar bem. O primeiro passo não é fazer mais força. É compreender melhor o padrão que mantém sua mente em alerta.",
    cta: "Quero entender por que minha mente não desliga",
  },
};

export const cycleItems = [
  "O dia termina, mas sua cabeça continua refazendo conversas, antecipando problemas e tentando resolver tudo antes de descansar.",
  "Você funciona, cumpre responsabilidades e segue em frente, mas sente que por dentro nunca existe silêncio de verdade.",
  "Quando a ansiedade aparece, a primeira reação é tentar controlar, esconder, lutar contra ou dar conta sozinha.",
  "Em alguns momentos, ainda aparece outra camada de culpa: eu deveria estar melhor, eu deveria conseguir lidar com isso.",
];

export const outcomes = [
  "Uma explicação simples para entender por que ansiedade, pensamentos e reações físicas podem aparecer juntos.",
  "Um mapa para observar a interação entre corpo, mente e contexto sem se reduzir a um único rótulo.",
  "Um jeito prático de reconhecer um ciclo de aceleração antes de responder no automático.",
  "Um primeiro recurso de micro-regulação para experimentar durante o encontro e adaptar ao cotidiano.",
  "Mais clareza para distinguir psicoeducação de cuidado clínico e reconhecer quando buscar acompanhamento profissional.",
];

export const agenda = [
  ["01", "Uma nova leitura", "Por que mente acelerada não é sinônimo de pouca fé, pouca disciplina ou falta de controle."],
  ["02", "O painel do corpo", "Como perceber sinais de ativação antes de entrar em luta com eles."],
  ["03", "O ciclo da mente", "Pensamentos repetitivos, antecipação, tentativas de controle e padrões que se reforçam."],
  ["04", "O contexto que pesa", "Responsabilidades, relações, história, ambiente e crenças que influenciam a experiência."],
  ["05", "Mapa ao vivo", "Um exercício guiado para organizar um episódio real em Corpo, Mente e Contexto."],
  ["06", "Primeiro recurso", "Uma prática de micro-regulação para responder ao momento com mais consciência."],
  ["07", "Próximo passo", "Como transformar compreensão em mudanças mais consistentes sem prometer solução instantânea."],
];

export const included = [
  "Workshop online e ao vivo de 2 horas, conduzido por Teneci Modes.",
  "Mapa Corpo, Mente e Contexto em três movimentos: Compreender, Reconhecer e Regular.",
  "Exercício guiado de Mapa de Padrões para aplicar durante o encontro.",
  "Caderno de exercícios práticos para continuar organizando observações depois da aula.",
  "Playbook de micro-regulações para consultar no dia a dia.",
  "Acesso à comunidade de apoio e aprendizagem para mulheres cristãs.",
];

export const faqs = [
  ["Isso é terapia?", "Não. É uma experiência psicoeducativa em grupo. O workshop não realiza diagnóstico, não substitui psicoterapia e não oferece tratamento individualizado."],
  ["Preciso ter um diagnóstico de ansiedade?", "Não. O conteúdo trabalha compreensão e autorregulação de forma educativa. Se houver sofrimento intenso, sintomas persistentes ou dúvida clínica, procure avaliação profissional adequada."],
  ["Preciso entender de Psicologia?", "Não. Os conceitos são apresentados em linguagem simples e aplicados a situações do cotidiano."],
  ["Minha fé será questionada?", "Não. A proposta respeita a fé como parte da história e da identidade da participante, sem transformar crenças religiosas em técnica psicológica nem impor convicções."],
  ["Vai ser só teoria?", "Não. Haverá um exercício guiado para organizar uma situação real em Corpo, Mente e Contexto e experimentar um primeiro recurso de regulação."],
  ["E se eu já tentei várias coisas?", "O workshop não promete substituir o que já foi feito. Ele propõe uma mudança de ordem: compreender o funcionamento e os padrões antes de escolher como responder."],
  ["Quanto tempo preciso reservar?", "O encontro ao vivo terá duração aproximada de 2 horas. Os materiais podem ser usados depois no seu próprio ritmo."],
  ["Isso substitui acompanhamento profissional?", "Não. Em demandas clínicas, sofrimento intenso ou necessidade de avaliação individualizada, procure psicóloga, psicólogo, psiquiatra ou outro serviço de saúde habilitado."],
];
