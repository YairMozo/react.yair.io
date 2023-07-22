import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diseño web</h1>
      </header>
      <main>
        <section>
          <h2>Introduccion a HTML</h2>
          <p>
            HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup
            Language) es el componente más básico de la Web. Define el
            significado y la estructura del contenido web. Además de HTML,
            generalmente se utilizan otras tecnologías para describir la
            apariencia/presentación de una página web (CSS) o la
            funcionalidad/comportamiento (JavaScript).
          </p>
        </section>
        <section>
          <h2>¿Qué es CSS?</h2>
          <p>
            CSS son las siglas en inglés para «hojas de estilo en cascada»
            (Cascading Style Sheets). Básicamente, es un lenguaje que maneja el
            diseño y presentación de las páginas web, es decir, cómo lucen
            cuando un usuario las visita. Funciona junto con el lenguaje HTML
            que se encarga del contenido básico de las páginas. Se les denomina
            hojas de estilo «en cascada» porque puedes tener varias hojas y una
            de ellas con las propiedades heredadas (o «en cascada») de otras.
            Para muchas personas una simple plantilla de blog es suficiente. Aun
            así, cuando quieras personalizar la apariencia de un sitio
            necesitarás implementar CSS que, en conjunto con un buen CMS, te
            ayudará a potenciar el alcance de tu contenido.
          </p>
        </section>
        <section>
          <h2>Fundamentos de Frontend</h2>
          <p>
            Los fundamentos de frontend incluyen HTML, CSS y JavaScript, y son
            esenciales para desarrollar aplicaciones web interactivas.
          </p>
        </section>
      </main>
      <footer>
        <p>Derechos de autor © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
