import "./style.css";
import { AppBar } from "./components/app-bar.js";
import { NoteList } from "./components/note-list.js";
import { ArchiveMenu } from "./components/archive-menu.js";
import { NoteSearch } from "./components/note-search.js";
import { FooterBar } from "./components/footer-bar.js";

import gsap from "gsap";

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const noteListSection = document.querySelector("note-list");
    noteListSection.updateList();

    gsap.from("app-bar", {
      opacity: 0,
      y: -50,
      duration: 0,
      ease: "power2.inOut",
    });

    gsap.from("note-list", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: function () {
        console.log("Animation completed!");
      },
    });
  } catch (error) {
    console.error(error);
  }
});
