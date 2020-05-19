const books = [
    {
      title: "Good Omens",
      authors: ["Terry", "Neil"],
      rating: 3.25,
      genre: ["fiction", "fantasy"],
    },
    {
      title: "Bone: The Complete Edition",
      authors: ["Jeff Smith"],
      rating: 4.42,
      genre: ["novel", "fantasy"],
    },
    {
      title: "American Gods",
      authors: ["Neil Gaiman"],
      rating: 4.11,
      genre: ["fiction", "fantasy"],
    },
    {
      title: "A Gentelman in Moscow",
      authors: ["Amor Towles"],
      rating: 4.36,
      genre: ["fiction", "historical fiction"],
    },
    {
      title: "Changing My Mind",
      authors: ["Zadie Smith"],
      rating: 3.83,
      genre: ["nonfiction", "essays"],
    },
  ];
  
  const r = books.forEach(function(book) {
      book.title.toUpperCase();
  })

  console.log(r);