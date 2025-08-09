const { createApp } = Vue

createApp({
  data() {
    return {
      profile: {
        name: 'Hanson Ramkhalawon',
        title: 'Développeur Go, DevOps',
        email: 'hanson.r@outlook.com',
        phone: '+33 6 22 23 24 52',
        location: 'Paris, France',
        linkedin: 'https://www.linkedin.com/in/hanson-ramkhalawon-81340392/',
        about: `I'm a software engineer based in Louvres, France. "I am a passionate Full Stack developer focused on creating web applications. With expertise in back-end technologies such as Node.js, I have a strong command of programming languages such as JavaScript and TypeScript, as well as popular frameworks like Node.js, React, and Express.js. I am capable of turning conceptual ideas into functional applications and I stay constantly updated with the latest technological trends. I am particularly interested in the DevOps approach and the Go programming language.`,
      },
      experiences: [
        {
          id: 1,
          title: 'Développeur Frontend Senior',
          company: 'TechCorp Solutions',
          period: 'Janvier 2022 - Présent',
          description:
            "Développement d'applications web complexes avec Vue.js 3 et TypeScript. Management d'une équipe de 3 développeurs junior. Mise en place d'une architecture micro-frontend moderne.",
        },
        {
          id: 2,
          title: 'Développeur Full Stack',
          company: 'StartupInnovante',
          period: 'Mars 2020 - Décembre 2021',
          description:
            "Création d'une plateforme SaaS complète avec Vue.js, Node.js et MongoDB. Développement d'API REST et intégration de services tiers. Optimisation des performances et SEO.",
        },
        {
          id: 3,
          title: 'Développeur Frontend Junior',
          company: 'WebAgency Pro',
          period: 'Septembre 2019 - Février 2020',
          description:
            "Développement de sites web responsives et d'applications web avec Vue.js 2. Collaboration étroite avec l'équipe design pour l'intégration d'interfaces utilisateur modernes.",
        },
      ],
      education: [
        {
          id: 1,
          degree: 'Master en Informatique',
          school: "École Supérieure d'Informatique de Paris",
          period: '2017 - 2019',
          description:
            "Spécialisation en développement web et technologies frontend. Projet de fin d'études sur les Progressive Web Apps avec Vue.js.",
        },
        {
          id: 2,
          degree: 'Licence en Informatique',
          school: 'Université Pierre et Marie Curie',
          period: '2014 - 2017',
          description:
            'Formation généraliste en informatique avec une forte composante en programmation web et bases de données.',
        },
      ],
      skills: [
        { name: 'Vue.js', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 85 },
        { name: 'CSS/SCSS', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
      ],
    }
  },
}).mount('#app')
