/* eslint-disable @typescript-eslint/no-explicit-any */
import service1 from "../../../../public/assets/service-1-1.jpg.png";
import service2 from "../../../../public/assets/service-1-2.jpg.png";
import service3 from "../../../../public/assets/service-1-3.jpg.png";
import service4 from "../../../../public/assets/service-1-4.jpg.png";
import service5 from "../../../../public/assets/service-1-5.jpg.png";
import service6 from "../../../../public/assets/service-1-6.jpg.png";

export type Service = {
  id: string;
  title: string;
  description: string;
  image: any;
};

export const fakeServices: Service[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Many desktop publishing packages web page editors now use Lorem Ipsum a default model text, and a search",
    image: service1,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Many desktop publishing packages web page editors now use Lorem Ipsum a default model text, and a search",
    image: service2,
  },
  {
    id: "saas-product",
    title: "SaaS Product",
    description:
      "Many desktop publishing packages web page editors now use Lorem Ipsum a default model text, and a search",
    image: service3,
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Many desktop publishing packages web page editors now use Lorem Ipsum a default model text, and a search",
    image: service4,
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description:
      "Many desktop publishing packages web page editors now use Lorem Ipsum a default model text, and a search",
    image: service5,
  },
  {
    id: "consulting",
    title: "Consulting",
    description:
      "Many desktop publishing packages web page editors now use Lorem Ipsum a default model text, and a search",
    image: service6,
  },
];
