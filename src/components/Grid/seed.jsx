const seed = [
  {
    title: 'Tales Before Narnia',
    author: 'J.R.R. Tolkien',
    imageURL:
      'http://books.google.com/books/content?id=Mhc0eD78rjsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '75.11'
  },
  {
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    author: 'J.R.R. Tolkien',
    imageURL:
      'http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '49.90'
  },
  {
    title: 'Harry Potter e o enigma do Príncipe',
    author: 'J.K. Rowling',
    imageURL:
      'http://books.google.com/books/content?id=yjUQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '24.90'
  },
  {
    title: 'Harry Potter e a Câmara Secreta',
    author: 'J.K. Rowling',
    imageURL:
      'http://books.google.com/books/content?id=hjcQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '24.90'
  },
  {
    title: 'Aprendendo TypeScript',
    author: 'Josh Goldberg',
    imageURL:
      'http://books.google.com/books/content?id=OaiJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '77.60'
  },
  {
    title: 'Effective TypeScript',
    author: 'Dan Vanderkam',
    imageURL:
      'http://books.google.com/books/content?id=4D63DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '82.99'
  },
  {
    title: 'TypeScript Microservices',
    author: 'Parth Ghiya',
    imageURL:
      'http://books.google.com/books/content?id=gnteDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '210.99'
  },
  {
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    imageURL:
      'http://books.google.com/books/content?id=MGAlDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '37.90'
  },
  {
    title: '21 lições para o século 21',
    author: 'Yuval Noah Harari',
    imageURL:
      'http://books.google.com/books/content?id=if5QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '29.90'
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    imageURL:
      'http://books.google.com/books/content?id=FmyBAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '98.04'
  },
  {
    title: 'Jogos de herança',
    author: 'Jennifer Lynn Barnes',
    imageURL:
      'http://books.google.com/books/content?id=6sxAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '29.90'
  },
  {
    title: 'Conceptions of Cosmos',
    author: 'Helge S. Kragh',
    imageURL:
      'http://books.google.com/books/content?id=RQtREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    price: '150.52'
  }
]

const nSeed = []

;(function Seed() {
  let count = 0
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < seed.length; i++) {
      let id = Math.floor(Math.random() * 100000)
      nSeed[count] = { ...seed[i], id: id }
      count++
    }
  }
})()

export { nSeed }

// seed simulando de forma superficial dados obtidos da API
// o objetivo é montar a Grid do front
