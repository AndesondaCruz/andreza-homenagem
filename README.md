# Para Andreza, com amor ❤️

Site de homenagem pessoal feito com React + Vite, com layout responsivo, carta, seção de memórias, galeria de fotos e espaço para uma música personalizada.

## 1. Rodar na sua máquina

Abra o terminal da sua máquina, entre na pasta do projeto e execute:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Abra o endereço local mostrado pelo Vite, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
```

O resultado será gerado na pasta `dist/`.

## 2. Colocar as fotos reais

Copie as fotos para `public/images/` e use estes nomes para substituir os espaços reservados:

- `andreza-principal.jpg` — foto principal da Andreza
- `memoria-1.jpg` — primeira lembrança
- `memoria-2.jpg` — segunda lembrança
- `memoria-3.jpg` — terceira lembrança

JPG, PNG e WebP funcionam; se usar outra extensão, atualize o caminho correspondente em `src/main.jsx`.

## 3. Adicionar a música

Coloque a música criada para a homenagem em `public/music/musica-para-andreza.mp3`. O controle de reprodução já está preparado. A música precisa ser um arquivo que você tenha direito de usar.

## 4. Publicar no AWS Amplify

1. Envie o projeto para um repositório GitHub seu.
2. No AWS Amplify, conecte esse repositório e escolha a branch principal.
3. Use estas configurações de build para Vite:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Faça o deploy e teste o domínio fornecido pelo Amplify.
5. Como você já criou o DNS personalizado, confira no Amplify em **Hosting / Custom domains** (a nomenclatura pode variar) se o domínio e os registros DNS existentes estão associados ao app correto. Não remova registros existentes sem confirmar o que eles fazem.

## Personalização

A carta e os textos estão em `src/main.jsx`; as cores, tipografia, espaçamento e responsividade estão em `src/style.css`.
