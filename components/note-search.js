class NoteSearch extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container">
      <h2>${this.getAttribute("search-title")}</h2>
      <section class="search-bar">
        <div class="search-container">
          <input type="text" id="search-input" placeholder="${this.getAttribute(
            "search-placeholder",
          )}">
          <span class="clear-icon" id="clear-icon">&#10006;</span>
        </div>
        <button id="search-button"><i class="fas fa-search"></i></button>
      </section>
    </div>
    `;

    const searchContainer = this.querySelector(".search-container");
    const searchInput = this.querySelector("#search-input");
    const searchButton = this.querySelector("#search-button");
    const clearIcon = this.querySelector("#clear-icon");
    const container = this.querySelector(".container");

    const performSearch = () => {
      let notes = document.querySelectorAll(".note");
      const searchTerm = searchInput.value.trim().toLowerCase();
      let found = false;

      notes.forEach((note) => {
        const title = note.querySelector("h2").textContent.toLowerCase();
        const body = note.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchTerm) || body.includes(searchTerm)) {
          note.style.display = "flex";
          found = true;
        } else {
          note.style.display = "none";
        }
      });

      if (!found) {
        const notFoundMessage = document.createElement("p");
        notFoundMessage.classList.add("not-found");
        notFoundMessage.textContent = `Notes not found for "${searchTerm}"`;
        container.appendChild(notFoundMessage);
      } else {
        const notFoundMessage = container.querySelector(".not-found");
        if (notFoundMessage) {
          container.removeChild(notFoundMessage);
        }
      }

      if (searchTerm === "") {
        clearIcon.style.display = "none";
      } else {
        clearIcon.style.display = "inline-block";
      }
    };

    const refreshNotes = () => {
      let notes = document.querySelectorAll(".note");
      notes.forEach((note) => {
        note.style.display = "flex";
      });
      const notFoundMessage = container.querySelector(".not-found");
      if (notFoundMessage) {
        container.removeChild(notFoundMessage);
      }
    };

    searchButton.addEventListener("click", () => {
      performSearch();
    });

    searchContainer.addEventListener("click", (event) => {
      const target = event.target;
      if (target.id === "search-button") {
        performSearch();
      } else if (target.id === "clear-icon") {
        searchInput.value = "";
        refreshNotes();
        clearIcon.style.display = "none";
      }
    });

    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        performSearch();
      }
    });

    searchInput.addEventListener("input", () => {
      if (searchInput.value.trim() === "") {
        refreshNotes();
        clearIcon.style.display = "none";
      } else {
        clearIcon.style.display = "inline-block";
      }
    });
  }
}

customElements.define("note-search", NoteSearch);

export { NoteSearch };
