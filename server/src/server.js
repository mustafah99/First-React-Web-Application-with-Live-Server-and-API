const express = require('express')
const cors = require('cors');
const app = express();
const port = 5000;

const products = [
  {
    id: 1,
    name: "iPhone 13",
    price: "7 599 kr",
    description: "Apple iPhone 13 har en schysst dubbelkamera och ett blixtsnabbt chip. Ett batteri som räcker längre. Den stilrena och tåliga designen har raka kanter. iPhone 13 tål vatten enligt den högsta klassificeringen (IP68, tål 6 meters vattendjup i 30 minuter).",
    imageUrl: "https://cdn-tele2-external-images.azureedge.net/nproz1mx87a8/7nRYsc26ZcdxVrPPirTVXu/34b1d8fc018f2f125d852f7d96de1798/iPhone_13_blue_2up_detail.png",
    secondImage: "https://www.bechtle.com/dam/jcr:9d164be4-2f8a-4d82-8044-315e9c8233fb/iphone-13-pink.png",
    techSpecs: "Super Retina XDR display with ProMotion 6.1‑inch (diagonal) all‑screen OLED display 2532‑by‑1170-pixel resolution at 460 ppi",
    additionaltechSpecs: "A15 Bionic chip New 6‑core CPU with 2 performance and 4 efficiency cores New 4‑core GPU New 16‑core Neural Engine - 512GB - Dual 12MP camera system: Wide and Ultra Wide cameras",
    urlSlug: "iphone-13"
  },
  {
    id: 2,
    name: "iPhone 13 Pro",
    price: "12 799 kr",
    description: "iPhone 13 Pro är en 6,1” stor mobil och innehåller ett avancerat kamerasystem som hjälper dig att ta skarpa bilder oavsett ljus. Det nya A15 Bionic-chippet är det snabbaste någonsin och perfekt för dig som gillar att streama film på mobilen.",
    imageUrl: "https://cdn-tele2-external-images.azureedge.net/nproz1mx87a8/6OwQvQDdiRKKi5U8tIbOO9/8c024fe4ba6753443c51aa705e219289/iPhone_13_pro_max_blue_2up_detail.png",
    secondImage: "https://www.xda-developers.com/files/2021/09/iPhone_13_Pro_max_f-e1631701411728.jpg",
    techSpecs: "Super Retina XDR display with ProMotion 6.1‑inch (diagonal) all‑screen OLED display 2532‑by‑1170-pixel resolution at 460 ppi",
    additionaltechSpecs: "ProMotion technology with adaptive refresh rates up to 120Hz HDR display True Tone Wide color (P3) Haptic Touch 2,000,000:1 contrast ratio (typical) 1000 nits max brightness (typical); 1200 nits max brightness (HDR) Fingerprint-resistant oleophobic coating Support for display of multiple languages and characters simultaneously - 1TB - Pro 12MP camera system: Telephoto, Wide, and Ultra Wide cameras",
    urlSlug: "iphone-13-pro"
  },
  {
    id: 3,
    name: "iPhone 13 Mini",
    price: "6 799 kr",
    description: "Apple iPhone 13 mini är stor mobil i ett litet format. Den har en dubbelkamera på 12 MP som tar schyssta bilder och är vattentät enligt IP68 (tål 6 meters vattendjup i 30 minuter). Förutom att iPhone 13 har ett lite bättre batteri än iPhone 13 mini, är mobilerna lika bra. Välj iPhone 13 mini om du gillar en lite mindre mobil!",
    imageUrl: "https://cdn-tele2-external-images.azureedge.net/nproz1mx87a8/xL8zcmTLC4OFLUY6pRlj3/2206ce36df74e17d44e14d895ec9ffa2/iPhone_13_mini_pink_2up_detail.png",
    secondImage: "https://www.bechtle.com/dam/jcr:9d164be4-2f8a-4d82-8044-315e9c8233fb/iphone-13-pink.png",
    techSpecs: "Super Retina XDR display 5.4‑inch (diagonal) all‑screen OLED display 2340‑by‑1080-pixel resolution at 476 ppi",
    additionaltechSpecs: "A15 Bionic chip New 6‑core CPU with 2 performance and 4 efficiency cores New 4‑core GPU New 16‑core Neural Engine - 512GB - Dual 12MP camera system: Wide and Ultra Wide cameras",
    urlSlug: "iphone-13-mini"
  },
  {
    id: 4,
    name: "iPhone 13 Pro Max",
    price: "13 799 kr",
    description: "iPhone 13 Pro Max passar dig som vill filma som ett proffs. Med sin nya avancerade kamera kan du välja mellan tre vinklar. 2,5 timmas längre batteritid än iPhone 12 Pro Max och med ett A15 Bionic Chip, det snabbaste chippet någonsin.",
    imageUrl: "https://cdn-tele2-external-images.azureedge.net/nproz1mx87a8/7tF8gEn0ms7o9ZaBa0IyNt/16abd35fd927f0ea8a50d8f42cf2dd1c/iPhone_13_pro_max_graphite_2up_detail.png",
    secondImage: "https://geekculture.co/wp-content/uploads/2021/09/iphone-13-pro-max-.jpg",
    techSpecs: "Super Retina XDR display with ProMotion 6.7‑inch (diagonal) all‑screen OLED display 2778‑by‑1284-pixel resolution at 458 ppi",
    additionaltechSpecs: "ProMotion technology with adaptive refresh rates up to 120Hz HDR display True Tone Wide color (P3) Haptic Touch 2,000,000:1 contrast ratio (typical) 1000 nits max brightness (typical); 1200 nits max brightness (HDR) Fingerprint-resistant oleophobic coating Support for display of multiple languages and characters simultaneously - 1TB - Pro 12MP camera system: Telephoto, Wide, and Ultra Wide cameras",
    urlSlug: "iphone-13-max"
  }
]

const pages = {
  home: {
    mainmenu: [
      {
        link: "http://localhost:3000/",
        menuname: "Hem"
      },
      {
        link: "http://localhost:3000/rea",
        menuname: "Rea"
      },
      {
        link: "http://localhost:3000/kontakta-oss",
        menuname: "Kontakta Oss"
      }
    ],
    hero: {
      title: "Discover a new world of the same iPhones",
      shortDescription: "Get AppleCare+ for no extra cost when you buy an eligible product. Offer ends on Monday.",
      buttonLink: "http://localhost:3000/products/iphone-13-pro",
      buttonText: "Learn More",
      imageUrl: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f8e0aaafeac9889106b860f%2F0x0.png%3FcropX1%3D0%26cropX2%3D1462%26cropY1%3D115%26cropY2%3D1211"
    },
    spots: [
      {
        spotLink: "https://www.apple.com/ipad/",
        title: "New iPad with M1",
        imageUrl: "https://images.macrumors.com/t/rtVaVKzLTEr3DZTPZNgihBVRPKk=/1920x/article-new/2021/05/m1-ipad-pro-1.jpg"
      },
      {
        spotLink: "https://www.apple.com/airpods/",
        title: "Airpod Nation",
        imageUrl: "https://storage.googleapis.com/orchestra-cafe-7jp1kqsp/uploads/2019/11/d47ceda6-airpods-pro.jpg"
      },
      {
        spotLink: "https://www.apple.com/iphone/",
        title: "iPhone 13 Pro",
        imageUrl: "https://9to5mac.com/wp-content/uploads/sites/6/2021/06/Dark-Purple-iPhone-Pro-concept.jpg?quality=82&strip=all"
      }
    ],
    products: products.map(x => {
      return {
        id: x.id,
        name: x.name,
        price: x.price,
        description: x.description,
        imageUrl: x.imageUrl,
        secondImage: x.secondImage,
        techSpecs: x.techSpecs,
        additionaltechSpecs: x.additionaltechSpecs,
        urlSlug: x.urlSlug
      }
    })
  }
};

app.use(cors());

// GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET /api/products/:urlSlug
app.get('/api/products/:urlSlug', (req, res) => {
  const { urlSlug } = req.params;

  const product = products.find(x => x.urlSlug == urlSlug);

  res.json(product);
});

// GET /api/pages
app.get('/api/pages/:id', (req, res) => {
  const { id } = req.params;

  const page = pages[id];

  res.json(page);
});

// GET /api/search?=/
app.get('/api/search/', (req, res) => {
  const { q } = req.query;

  const regExp = new RegExp(q, 'i');

  const filteredProduct = products.filter(x => x.name.match(regExp));

  const searchResult = {
    result: filteredProduct,
    count: filteredProduct.length
  };

  res.json(searchResult);
});

// Listening
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});