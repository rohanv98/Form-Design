import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}
  list = [
    {
      title: "VIVO V9 pro",
      demo: "(Nebula Purple, 64 Gb) (6 Gb Ram)",
      imageUrl:
        "https://www.linkdecode.com/wp-content/uploads/2018/08/Vivo-V9-Blue-Sapphire-2.jpg",
      price: 18000,
      category: "mobile"
    },
    {
      title: "VIVO V11 pro",
      demo: "(Nebula Purple, 128 Gb) (8 Gb Ram)",
      imageUrl:
        "https://images.fonearena.com/blog/wp-content/uploads/2018/12/Vivo-V11-Pro-Supernova-Red-1024x913.jpg",
      price: 20000,
      category: "mobile"
    },
    {
      title: "VIVO V15 pro",
      demo: "(Nebula Purple, 256 Gb) (16 Gb Ram)",
      imageUrl:
        "https://images.firstpost.com/wp-content/uploads/2019/05/Vivo-V15-Pro-1024.jpg",
      price: 28000,
      category: "mobile"
    },
    {
      title: "VIVO S1",
      demo: "(Nebula Purple, 256 Gb) (16 Gb Ram)",
      imageUrl: "https://unite4buy.com/static/images/2019/04/01/vivo-s1-6.jpg ",
      price: 28000,
      category: "mobile"
    }
  ];
}
