const API_URL = "https://notes-api.dicoding.dev/v2";

class ArchiveMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="archive-menu">
        <button id="show-all-btn" class="show-all">Show Note</button>
        <button id="show-archive-btn" class="show-archive">Show Archived Notes</button>
      </div>
    `;

    const showArchiveButton = this.querySelector("#show-archive-btn");
    const showAllButton = this.querySelector("#show-all-btn");

    showAllButton.classList.add("active");

    showArchiveButton.addEventListener("click", async () => {
      const noteListSection = document.querySelector("note-list");
      try {
        const response = await fetch(`${API_URL}/notes/archived`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch archived notes.");
        }

        const data = await response.json();
        const archivedNotes = data.data;
        noteListSection.notes = archivedNotes;
        noteListSection.render();
        showArchiveButton.classList.add("active");
        showAllButton.classList.remove("active");
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "Failed to fetch archived notes.",
        });
      }
    });

    showAllButton.addEventListener("click", async () => {
      const noteListSection = document.querySelector("note-list");
      noteListSection.updateList();
      showAllButton.classList.add("active");
      showArchiveButton.classList.remove("active");
    });
  }
}

customElements.define("archive-menu", ArchiveMenu);

export { ArchiveMenu };
