const API_URL = "https://notes-api.dicoding.dev/v2";

class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="container">
          <h1>${this.getAttribute("app-title")}</h1>
          <div class="header-icons">
            <i class="${this.getAttribute(
              "add-note-btn-icon"
            )}" id="open-add-note-modal-btn"></i>
          </div>
        </div>
      </header>
    `;

    const openModalBtn = this.querySelector("#open-add-note-modal-btn");

    openModalBtn.addEventListener("click", () => {
      this.openAddNoteModal();
    });
  }

  async openAddNoteModal() {
    try {
      const { value: formValues, isConfirmed } = await Swal.fire({
        title: "Add Notes",
        html:
          '<input id="swal-input-title" class="swal2-input" placeholder="Title" required minlength="4" pattern="^[a-zA-Z0-9 ]{6,}$">' +
          '<textarea id="swal-input-body" class="swal2-textarea" placeholder="Your note..." required minlength="10" maxlength="120"></textarea>' +
          '<p id="swal-validation-msg" style="color: red; margin-top: 5px; font-size: 14px;"></p>',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        didOpen: async () => {
          const titleInput = document.getElementById("swal-input-title");
          const bodyInput = document.getElementById("swal-input-body");

          titleInput.addEventListener("input", () => {
            const titleValidity = this.validateTitle(titleInput.value);
            if (titleValidity !== true) {
              titleInput.classList.add("swal2-inputerror");
              document.getElementById("swal-validation-msg").textContent =
                titleValidity;
            } else {
              titleInput.classList.remove("swal2-inputerror");
              document.getElementById("swal-validation-msg").textContent = "";
            }
          });

          bodyInput.addEventListener("input", () => {
            const bodyValidity = this.validateBody(bodyInput.value);
            if (bodyValidity !== true) {
              bodyInput.classList.add("swal2-inputerror");
              document.getElementById("swal-validation-msg").textContent =
                bodyValidity;
            } else {
              bodyInput.classList.remove("swal2-inputerror");
              document.getElementById("swal-validation-msg").textContent = "";
            }
          });
        },
        preConfirm: () => {
          const titleInput = document.getElementById("swal-input-title");
          const bodyInput = document.getElementById("swal-input-body");
          const title = titleInput.value;
          const body = bodyInput.value;
          const titleValidity = this.validateTitle(title);
          const bodyValidity = this.validateBody(body);

          if (titleValidity !== true || bodyValidity !== true) {
            return false;
          }

          return { title, body };
        },
      });

      if (isConfirmed && formValues) {
        const addedNote = await this.addNote(formValues.title, formValues.body);
        this.handleAddNoteSuccess(addedNote);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Failed to add note.",
      });
    }
  }

  async addNote(title, body) {
    try {
      const response = await fetch(`${API_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      if (!response.ok) {
        throw new Error("Failed to add note.");
      }

      const data = await response.json();
      return {
        title: data.data.title,
        body: data.data.body,
        id: data.data.id,
      };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to add note.");
    }
  }

  handleAddNoteSuccess(note) {
    const newNote = {
      title: note.title,
      body: note.body,
      id: note.id,
      createdAt: new Date(),
    };

    const noteListSection = document.querySelector("note-list");
    noteListSection.addNewNoteToList(newNote);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Note has been added successfully",
    });
  }

  validateTitle(title) {
    if (!title) {
      return "Title is required.";
    }

    if (title.length < 4) {
      return "Title must be at least 4 characters long.";
    }

    let words = title.split(/\s+/);
    let wordCount = words.length;
    if (wordCount > 4) return "Title must have at most 4 words.";
    for (let word of words) {
      if (word.length > 15)
        return "Each word in title must be at most 15 characters.";
    }

    if (!/^[a-zA-Z0-9\s]+$/.test(title)) {
      return "Title must only contain letters, numbers, and spaces.";
    }

    return true;
  }

  validateBody(body) {
    if (!body) {
      return "Body is required.";
    }

    if (body.length < 20) {
      return "Body must be at least 20 characters long.";
    }

    if (body.length > 150) {
      return "Body must be at most 150 characters long.";
    }

    // Memeriksa batas karakter tiap kata
    const words = body.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 10) {
        return "Each word in the body must not exceed 10 characters.";
      }
    }

    return true;
  }
}

customElements.define("app-bar", AppBar);

export { AppBar };
