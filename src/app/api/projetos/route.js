export async function GET(request) {
  const data = [
    {
      id: 1,
      texto: "PROJETO ",
      imagem: "/projeto.jpeg",
      alt: "lorem jdiasj",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur suscipit. Ab, molestias, mollitia saepe amet, porro molestiae ipsa doloremque excepturi ad eos aliquam delectus quam necessitatibus sapiente error possimus",
    },
    {
      id: 2,
      texto: "Conhecimentos",
      imagem: "/programacao.webp",
      alt: "lorem jdiasj",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur suscipit. Ab, molestias, mollitia saepe amet, porro molestiae ipsa doloremque excepturi ad eos aliquam delectus quam necessitatibus sapiente error possimus",
    },
    {
      id: 3,
      texto: "Contato",
      imagem: "/projeto.jpeg",
      alt: "lorem jdiasj",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur suscipit. Ab, molestias, mollitia saepe amet, porro molestiae ipsa doloremque excepturi ad eos aliquam delectus quam necessitatibus sapiente error possimus",
    },
  ];

  const response = new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });

  return response;
}
