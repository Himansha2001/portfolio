type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Himansha Thunmuduna Portfolio",
    fullName: "Himansha Thunmuduna",
    email: "himanshathunmuduna@mail.com",
  },
  hero: {
    name: "Himansha Thunmuduna",
    p: ["I’m a Software Engineer & Digital Entrepreneur."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      // name: {
      //   span: "Your Name",
      //   placeholder: "What's your name?",
      // },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m an undergraduate software engineer, freelancer, and entrepreneur with a passion for building scalable web and mobile applications.
      With extensive experience in full-stack development, UI/UX design, and digital marketing, I’ve helped businesses bring their ideas to life and generated over a million in projects.
      From e-commerce platforms to SaaS solutions, I build digital products that make an impact.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    // feedbacks: {
    //   p: "What others say",
    //   h2: "Testimonials.",
    // },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
