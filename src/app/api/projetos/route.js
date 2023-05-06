export async function GET(request) {
  const data = [
    {
      id: 1,
      texto: "Projeto-1",
      imagem: "/projeto.jpeg",
      alt: "lorem jdiasj",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur suscipit. Ab, molestias, mollitia saepe amet, porro molestiae ",
    },
    {
      id: 2,
      texto: "Projeto-2",
      imagem: "/programacao.webp",
      alt: "lorem jdiasj",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur suscipit. Ab, molestias, mollitia saepe amet, porro molestiae ",
    },
    {
      id: 3,
      texto: "Projeto-3",
      imagem: "/projeto.jpeg",
      alt: "lorem jdiasj",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur suscipit. Ab, molestias, mollitia saepe amet, porro molestiae ipsa doloremque excepturi ",
    },
  ];

  const response = new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });

  return response;
}
