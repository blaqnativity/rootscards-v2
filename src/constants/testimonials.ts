export interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from...",
    name: "Charles Dickens",
    role: "CTO, Accenture",
    avatar: "/avatars/charles.jpg", // replace with your asset path
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, metus non faucibus lacinia, nisl nisl aliquet nunc, vitae ultricies lacus libero nec nulla.",
    name: "Ada Lovelace",
    role: "Engineer, Microsoft",
    avatar: "/avatars/ada.jpg",
  },
  {
    id: 3,
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    name: "Alan Turing",
    role: "Researcher, Google DeepMind",
    avatar: "/avatars/turing.jpg",
  },
  {
    id: 4,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Grace Hopper",
    role: "Admiral, US Navy",
    avatar: "/avatars/grace.jpg",
  },
  // {
  //   id: 4,
  //   text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  //   name: "Grace Hopper",
  //   role: "Admiral, US Navy",
  //   avatar: "/avatars/grace.jpg",
  // },
];
