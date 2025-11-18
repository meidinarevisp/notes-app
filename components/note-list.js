import { notesData } from "../src/notesData";
import { LoadingIndicator } from "./loading-indicator.js";
const API_URL = "https://notes-api.dicoding.dev/v2";

class NoteList extends HTMLElement {
  constructor() {
    super();
    this.notes = [];
    this.loadingIndicator = document.querySelector("loading-indicator");
  }

  connectedCallback() {
    this.updateList();
    this.addEventListener("click", (event) => {
      const target = event.target;
      if (target.classList.contains("delete-icon")) {
        const noteId = target.dataset.id;
        this.deleteNoteById(noteId);
      } else if (
        target.classList.contains("archive-button") ||
        target.classList.contains("unarchive-button")
      ) {
        const noteId = target.dataset.id;
        this.archiveOrUnarchiveNote(noteId);
      }
    });
  }

  async updateList() {
    try {
      this.loadingIndicator.style.display = "block";
      const response = await fetch(`${API_URL}/notes`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch notes.");
      }

      const data = await response.json();
      this.notes = data.data.concat(notesData);
      this.notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      this.notes.reverse();
      this.render();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.message || "Failed to fetch notes. Showing dummy data instead.",
      });
      this.notes = notesData;
      this.render();
    } finally {
      setTimeout(() => {
        this.loadingIndicator.style.display = "none";
      }, 1000);
    }
  }

  render() {
    this.innerHTML = this.generateNoteListMarkup();
  }

  generateNoteListMarkup() {
    return `
    <section class="notes-container">
      ${this.notes
        .map(
          (note) => `
            <div class="note" data-id="${note.id}">
              <center>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="background-color: #E178C5; width: 30px; height: 30px; border-radius: 50%; margin-bottom: 5px;"></li>
                  <li style="background-color: #FF8E8F; width: 20px; height: 20px; border-radius: 50%; margin-bottom: 5px;"></li>
                  <li style="background-color: #41C9E2; width: 10px; height: 10px; border-radius: 50%; margin-bottom: 5px;"></li>
                </ul>
              </center>
              <div style="margin-left: 15px;">
                <h2>${note.title}</h2>
                <p><button class="archive-button ${
                  note.archived ? "unarchive-button" : "archive-button"
                }" data-id="${note.id}">${
                  note.archived ? "unarchive" : "archive"
                }</button></p>
                <p>${note.body}</p>
                <small>${this.formatDate(new Date(note.createdAt))}</small>
              </div>
              <i class="fas fa-trash delete-icon" data-id="${note.id}"></i>
            </div>
          `,
        )
        .reverse()
        .join("")}
    </section>
  `;
  }

  formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  async addNewNoteToList(newNote) {
    try {
      this.notes.push(newNote);
      this.render();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Failed to add note.",
      });
    }
  }

  async deleteNoteById(noteId) {
    try {
      const confirmed = await Swal.fire({
        icon: "warning",
        title: "Confirm",
        text: "Are you sure you want to delete this note?",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      });

      if (confirmed.isConfirmed) {
        this.notes = this.notes.filter((note) => note.id !== noteId);
        this.render();
        const response = await fetch(`${API_URL}/notes/${noteId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete note.");
        }

        const data = await response.json();
        const message = data.message;
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: message,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Failed to delete note.",
      });
    }
  }

  async archiveOrUnarchiveNote(noteId) {
    try {
      const noteElement = this.querySelector(`.note[data-id="${noteId}"]`);
      if (!noteElement) {
        throw new Error("Note element not found.");
      }

      const isArchived = noteElement
        .querySelector(".archive-button")
        .classList.contains("unarchive-button");

      const response = await fetch(
        `${API_URL}/notes/${noteId}/${isArchived ? "unarchive" : "archive"}`,
        {
          method: "POST",
        },
      );

      if (!response.ok) {
        throw new Error(
          `Failed to ${isArchived ? "unarchive" : "archive"} note.`,
        );
      }

      const data = await response.json();
      const message = data.message;
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: message,
      });

      noteElement.remove();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.message ||
          `Failed to ${isArchived ? "unarchive" : "archive"} note.`,
      });
    }
  }
}

customElements.define("note-list", NoteList);

export { NoteList };
