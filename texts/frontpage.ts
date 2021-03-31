const texts = {
  why_smartifier_array: [
    `Why do we have a brain? A mind? A soul?`,
    `To operate our body in the way we want. To get the experiences we desire.`,
    `Why does a car have a cooling unit? Why does it need to be serviced every year? Because that way it will have improved performance. `,
    `That is how we see training. The purpose of training is to improve our internal thoughts and external actions. So that we can enjoy the life we want to.`,
    `In this 21st century, where developing soft skills have become inevitable, many companies are concerned with their employees because conventional education does not include soft skills.`,
    `To solve this problem, Smartifier Academy has been working for 2.5 years to develop soft skills and improve performance through meta-learning skills. `,
    `Our aim is to enhance soft skills through courses and training. By smashing the typical preachy tone of mundane training, we design and provide interactive, personalized and gamified training sessions; which improves the trainee’s performance rapidly.`,
    `Because, ‘Your transformation is our motivation.’`,
  ],

  message_from_mentor_title: `I am Md. Sohan Haidear. I am your Mentor at Smartifier Training & Consultancy!`,
  message_from_mentor_messages: [
    `In today’s knowledge economy, we must develop skills fast. But how? Being passionate about learning and self-development all my life, I’ve chased this question for a long time. That pursuit led me to discover the concept of 'Meta-Learning' from the famous course 'Learning How to Learn' on Coursera.`,
    `It helped me progress rapidly in my career, and within a few years I had the privilege of winning 2 South Asian Digital Media Awards with the Digital Marketing team of The Daily Star.`,
    `Instead of piling up my showcase with awards, I wanted to help others pile up their showcases with awards. I had always enjoyed teaching others. Watching them grow gave me a special satisfaction.`,
    `From that thought, I had founded Smartifier Academy where our aim is to help people improve their performance through meta-learning skills. We are now incorporated as Smartifier Training & Consultation.`,
    `I firmly believe that every human being has unlimited potential. When you see a dream, the dream also sees you. But if you don’t take the right steps, it starts to fade away into the air.`,
    `We don’t know everything, but we know enough to guide you towards your transformation. And we do it with a lot of happiness and passion, because your transformation is our motivation.`,
  ],
  clients: [
    "/assets/client_1.png",
    "/assets/client_2.png",
    "/assets/client_3.png",
    "data:image/png;base64,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",
    "/assets/client_5.png",
  ],
  testimonials: [
    {
      message: `In this 21st century investing money in training should be the priority of the organization to develop the skillets. Smartifier Academy’s Training materials are enriched and aligned with the business goals that the benefits of this will bring organizational growth.`,
      person: {
        name: "Tajdin Hassan",
        professions: [
          `Head of Marketing, The Daily Star`,
          `Co-Founder of Mission Save Bangladesh`,
        ],
        image_link: `/assets/testimonial_1_image.jpg`,
      },
    },
    {
      message: `Smartifier Academy individually identified the strengths and weaknesses of our teammates and came up with the solution so that they can perform better in their corporate life.`,
      person: {
        name: "Shuvashish Roy",
        professions: [`Digital Marketing Manager, The Daily Star`],
        image_link: `/assets/testimonial_2_image.jpg`,
      },
    },
    {
      message: `I would like to applaud the relentless effort of Sohan & his amazing Smartifier Academy Team. We look forward to more training by Smartifier Academy.`,
      person: {
        name: "Amit Richard",
        professions: [`Founder & CEO, CoDesign`],
        image_link: `/assets/testimonial_3_image.jpg`,
      },
    },
    {
      message: `21st-century communication should be the core concern for developing an international employee mindset. Thanks to Smartifier Academy.`,
      person: {
        name: "Shadman Sadab",
        professions: [`CEO, Future City Summit Hong Kong`],
        image_link: `/assets/testimonial_4_image.jpg`,
      },
    },
  ],
  links: {
    need_assessment_call: "https://forms.gle/37ysuepdrJQJn1xCA",
    free_1_hour_session: "https://forms.gle/1pMxuWVHfzmXF1Ti8",
  },
};

export default texts;
