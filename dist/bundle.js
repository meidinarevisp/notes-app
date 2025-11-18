/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      83: (t, e, n) => {
        n.d(e, { A: () => o });
        var r = n(601),
          i = n.n(r),
          a = n(314),
          s = n.n(a)()(i());
        s.push([
          t.id,
          'body {\n  margin: 0;\n  padding: 0;\n  background-color: #e0e0e0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  min-height: 100vh;\n  position: relative;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nheader {\n  background: linear-gradient(135deg, #ffffff, #e32e9a);\n  color: #e33095;\n  border-radius: 0 0 30px 30px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 1000;\n  margin-bottom: 20px;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container h1 {\n  font-family: "Next Bro", sans-serif;\n  padding-left: 30px;\n  letter-spacing: 2px;\n  font-size: 2.4rem;\n  margin-right: 12px;\n}\n\n.header-icons {\n  font-size: 38px;\n  padding-right: 30px;\n}\n\n.header-icons i {\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.header-icons i:hover {\n  color: #f9e8f3;\n}\n\n.fas.fa-plus-circle {\n  position: relative;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fas.fa-plus-circle:hover {\n  transform: scale(1.1);\n}\n\n.fas.fa-plus-circle::after {\n  content: "Add New Notes";\n  position: absolute;\n  top: 50%;\n  left: 6%;\n  transform: translate(-110%, -50%);\n  background-color: rgba(229, 224, 227, 0.8);\n  color: #e70284;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 12px;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n  letter-spacing: 1px;\n}\n\n.fas.fa-plus-circle:hover::after {\n  opacity: 1;\n}\n\n.swal2-popup {\n  font-family: "Arial", sans-serif;\n}\n\n.swal2-title {\n  color: #333;\n  font-size: 28px;\n  margin-bottom: 5px;\n}\n\n.swal2-input,\n.swal2-textarea {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 14px;\n  width: 280px;\n}\n\n.swal2-input::placeholder,\n.swal2-textarea::placeholder {\n  font-size: 14px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.swal2-popup .swal2-confirm {\n  padding: 8px 14px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  background-color: #32abec;\n  color: #fff;\n  transition: background-color 0.3s ease;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n}\n\n.swal2-popup .swal2-confirm:hover {\n  background-color: #1a7fde;\n}\n\n.swal2-popup .swal2-cancel {\n  padding: 8px 14px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  background-color: #f6853f;\n  color: #fff;\n  transition: background-color 0.3s ease;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n}\n\n.swal2-popup .swal2-cancel:hover {\n  background-color: #fa641e;\n}\n\n.notes-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 22px;\n  padding: 20px;\n  padding-bottom: 70px;\n}\n\n.note {\n  background-color: #f4f4f4;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n  align-items: center;\n  display: flex;\n}\n\n.note h2 {\n  font-size: 20px;\n  display: contents;\n}\n\n.note p {\n  text-align: justify;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n\n.note small {\n  font-size: 12px;\n  color: grey;\n}\n\n.note:hover {\n  transform: translateY(-8px);\n  background-color: #f1e2ed;\n}\n\n.search-bar {\n  margin-bottom: 20px;\n  display: flex;\n  padding-top: 120px;\n  margin-right: 20px;\n}\n\n.search-container {\n  position: relative;\n}\n\n.search-bar input[type="text"] {\n  padding: 10px;\n  border: 1px solid transparent;\n  background-color: rgb(255, 255, 255);\n  border-radius: 8px 0 0 8px;\n  width: 97%;\n  outline-color: rgb(246, 250, 255);\n}\n\n.search-bar input:focus {\n  background-color: #b6e3ff;\n}\n\n.container h2 {\n  margin-left: 20px;\n  margin-right: 10px;\n  font-size: 28px;\n  padding-top: 100px;\n}\n\n.clear-icon {\n  position: absolute;\n  right: 2px;\n  top: 50%;\n  transform: translateY(-53%);\n  cursor: pointer;\n  font-size: 11px;\n  display: none;\n}\n\n.search-bar button {\n  padding: 10px 15px;\n  background-color: #6abffc;\n  color: white;\n  border: 1px solid transparent;\n  border-radius: 0 8px 8px 0;\n  cursor: pointer;\n  margin-left: 15px;\n}\n\n.search-bar button:hover {\n  background-color: rgb(42, 134, 247);\n}\n\n.delete-icon {\n  color: #ccc9c9;\n  font-size: 1.5em;\n  cursor: pointer;\n  transition: color 0.3s ease;\n  font-size: 20px;\n  margin-top: auto;\n  margin-left: auto;\n}\n\n.delete-icon:hover {\n  color: #ff1744;\n}\n\n.archive-menu {\n  margin-left: 20px;\n}\n\nbutton.show-archive,\nbutton.show-all {\n  padding: 10px 20px;\n  margin-right: 10px;\n  background-color: #cec8cc;\n  color: #2b272a;\n  cursor: pointer;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  padding: 4px 10px;\n  border-radius: 5px;\n  border: none;\n}\n\nbutton.show-archive:hover,\nbutton.show-all:hover {\n  background-color: #b8aeb4;\n}\n\nbutton.show-archive.active,\nbutton.show-all.active {\n  background-color: #f552b4;\n}\n\n.archive-button {\n  background-color: #41a0e5;\n  color: #f0f2f5;\n  font-size: 1.5em;\n  cursor: pointer;\n  transition: color 0.3s ease;\n  font-size: 12px;\n  border: none;\n  border-radius: 10px;\n  padding: 2.5px 6px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.archive-button:hover {\n  background-color: #0e8eea;\n}\n\n.unarchive-button {\n  background-color: #37cdb4;\n  color: #ffffff;\n  font-size: 1.5em;\n  cursor: pointer;\n  transition: color 0.3s ease;\n  font-size: 12px;\n  border: none;\n  border-radius: 6px;\n  padding: 2.5px 5px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.unarchive-button:hover {\n  background-color: #00c2a1;\n}\n\n.not-found {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n#loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#loading-spinner {\n  border: 8px solid #ffb2ce;\n  border-top: 8px solid #e54598;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 1s linear infinite;\n}\n\n#loading-overlay img {\n  position: absolute;\n  bottom: 10px;\n  width: 100px;\n  margin-bottom: 180px;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.fade-in {\n  opacity: 0;\n  animation: fadeIn 0.5s forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\nfooter {\n  position: absolute;\n  background-color: #dc5e9b;\n  color: #fff;\n  padding: 15px 0;\n  width: 100%;\n  bottom: 0;\n}\n\nfooter p {\n  margin: auto;\n  font-size: 0.8rem;\n  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",\n    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;\n}\n\nfooter-bar {\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .notes-container {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  }\n\n  .container h1 {\n    font-size: 2rem;\n  }\n\n  .search-bar {\n    padding-top: 98px;\n  }\n\n  .container h2 {\n    font-size: 24px;\n    padding-top: 70px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .container h1 {\n    font-size: 1.5rem;\n  }\n\n  .search-bar {\n    margin-bottom: 20px;\n    display: flex;\n    padding-top: 80px;\n    margin-right: 20px;\n  }\n\n  .container h2 {\n    margin-left: 20px;\n    margin-right: 10px;\n    font-size: 23px;\n    padding-top: 60px;\n  }\n\n  .header-icons {\n    font-size: 30px;\n  }\n}\n\n@media only screen and (max-width: 350px) {\n  .clear-icon {\n    display: none;\n  }\n\n  .header-icons {\n    font-size: 30px;\n  }\n}\n\n@media only screen and (max-width: 280px) {\n  .container h1 {\n    font-size: 1.2rem;\n  }\n\n  .search-bar {\n    margin-bottom: 10px;\n    padding-top: 70px;\n    margin-right: 20px;\n  }\n\n  .container h2 {\n    font-size: 16px;\n    padding-top: 58px;\n  }\n\n  .notes-container {\n    padding: 10px;\n  }\n\n  .clear-icon {\n    display: none;\n  }\n\n  .header-icons {\n    font-size: 22px;\n  }\n}\n',
          "",
        ]);
        const o = s;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, i, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var s = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var u = this[o][0];
                  null != u && (s[u] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var c = [].concat(t[l]);
                (r && s[c[0]]) ||
                  (void 0 !== a &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = a)),
                  n &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = n))
                      : (c[2] = n)),
                  i &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = i))
                      : (c[4] = "".concat(i))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, s = [], o = 0; o < t.length; o++) {
            var u = t[o],
              l = r.base ? u[0] + r.base : u[0],
              c = a[l] || 0,
              h = "".concat(l, " ").concat(c);
            a[l] = c + 1;
            var d = n(h),
              f = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== d) e[d].references++, e[d].updater(f);
            else {
              var p = i(f, r);
              (r.byIndex = o),
                e.splice(o, 0, { identifier: h, updater: p, references: 1 });
            }
            s.push(h);
          }
          return s;
        }
        function i(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, i) {
          var a = r((t = t || []), (i = i || {}));
          return function (t) {
            t = t || [];
            for (var s = 0; s < a.length; s++) {
              var o = n(a[s]);
              e[o].references--;
            }
            for (var u = r(t, i), l = 0; l < a.length; l++) {
              var c = n(a[l]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            a = u;
          };
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var i = void 0 !== n.layer;
                i &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  i && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var a = (e[r] = { id: r, exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      var t = n(72),
        e = n.n(t),
        r = n(825),
        i = n.n(r),
        a = n(659),
        s = n.n(a),
        o = n(56),
        u = n.n(o),
        l = n(540),
        c = n.n(l),
        h = n(113),
        d = n.n(h),
        f = n(83),
        p = {};
      (p.styleTagTransform = d()),
        (p.setAttributes = u()),
        (p.insert = s().bind(null, "head")),
        (p.domAPI = i()),
        (p.insertStyleElement = c()),
        e()(f.A, p),
        f.A && f.A.locals && f.A.locals;
      class m extends HTMLElement {
        connectedCallback() {
          (this.innerHTML = `\n      <header>\n        <div class="container">\n          <h1>${this.getAttribute("app-title")}</h1>\n          <div class="header-icons">\n            <i class="${this.getAttribute("add-note-btn-icon")}" id="open-add-note-modal-btn"></i>\n          </div>\n        </div>\n      </header>\n    `),
            this.querySelector("#open-add-note-modal-btn").addEventListener(
              "click",
              () => {
                this.openAddNoteModal();
              },
            );
        }
        async openAddNoteModal() {
          try {
            const { value: t, isConfirmed: e } = await Swal.fire({
              title: "Add Notes",
              html: '<input id="swal-input-title" class="swal2-input" placeholder="Title" required minlength="4" pattern="^[a-zA-Z0-9 ]{6,}$"><textarea id="swal-input-body" class="swal2-textarea" placeholder="Your note..." required minlength="10" maxlength="120"></textarea><p id="swal-validation-msg" style="color: red; margin-top: 5px; font-size: 14px;"></p>',
              focusConfirm: !1,
              showCancelButton: !0,
              cancelButtonText: "Cancel",
              didOpen: async () => {
                const t = document.getElementById("swal-input-title"),
                  e = document.getElementById("swal-input-body");
                t.addEventListener("input", () => {
                  const e = this.validateTitle(t.value);
                  !0 !== e
                    ? (t.classList.add("swal2-inputerror"),
                      (document.getElementById(
                        "swal-validation-msg",
                      ).textContent = e))
                    : (t.classList.remove("swal2-inputerror"),
                      (document.getElementById(
                        "swal-validation-msg",
                      ).textContent = ""));
                }),
                  e.addEventListener("input", () => {
                    const t = this.validateBody(e.value);
                    !0 !== t
                      ? (e.classList.add("swal2-inputerror"),
                        (document.getElementById(
                          "swal-validation-msg",
                        ).textContent = t))
                      : (e.classList.remove("swal2-inputerror"),
                        (document.getElementById(
                          "swal-validation-msg",
                        ).textContent = ""));
                  });
              },
              preConfirm: () => {
                const t = document.getElementById("swal-input-title"),
                  e = document.getElementById("swal-input-body"),
                  n = t.value,
                  r = e.value,
                  i = this.validateTitle(n),
                  a = this.validateBody(r);
                return !0 === i && !0 === a && { title: n, body: r };
              },
            });
            if (e && t) {
              const e = await this.addNote(t.title, t.body);
              this.handleAddNoteSuccess(e);
            }
          } catch (t) {
            console.error(t),
              Swal.fire({
                icon: "error",
                title: "Error",
                text: t.message || "Failed to add note.",
              });
          }
        }
        async addNote(t, e) {
          try {
            const n = await fetch("https://notes-api.dicoding.dev/v2/notes", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ title: t, body: e }),
            });
            if (!n.ok) throw new Error("Failed to add note.");
            const r = await n.json();
            return { title: r.data.title, body: r.data.body, id: r.data.id };
          } catch (t) {
            throw (console.error(t), new Error("Failed to add note."));
          }
        }
        handleAddNoteSuccess(t) {
          const e = {
            title: t.title,
            body: t.body,
            id: t.id,
            createdAt: new Date(),
          };
          document.querySelector("note-list").addNewNoteToList(e),
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Note has been added successfully",
            });
        }
        validateTitle(t) {
          if (!t) return "Title is required.";
          if (t.length < 4) return "Title must be at least 4 characters long.";
          let e = t.split(/\s+/);
          if (e.length > 4) return "Title must have at most 4 words.";
          for (let t of e)
            if (t.length > 10)
              return "Each word in title must be at most 10 characters.";
          return (
            !!/^[a-zA-Z0-9\s]+$/.test(t) ||
            "Title must only contain letters, numbers, and spaces."
          );
        }
        validateBody(t) {
          if (!t) return "Body is required.";
          if (t.length < 10) return "Body must be at least 10 characters long.";
          if (t.length > 150)
            return "Body must be at most 150 characters long.";
          const e = t.split(" ");
          for (let t = 0; t < e.length; t++)
            if (e[t].length > 10)
              return "Each word in the body must not exceed 10 characters.";
          return !0;
        }
      }
      customElements.define("app-bar", m);
      const _ = [
        {
          id: "notes-jT-jjsyz61J8XKiI",
          title: "Welcome to Notes, Dimas!",
          body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
          createdAt: "2022-07-28T10:03:12.594Z",
          archived: !1,
        },
        {
          id: "notes-aB-cdefg12345",
          title: "Meeting Agenda",
          body: "Discuss project updates and assign tasks for the upcoming week.",
          createdAt: "2022-08-05T15:30:00.000Z",
          archived: !1,
        },
        {
          id: "notes-XyZ-789012345",
          title: "Shopping List",
          body: "Milk, eggs, bread, fruits, and vegetables.",
          createdAt: "2022-08-10T08:45:23.120Z",
          archived: !1,
        },
        {
          id: "notes-1a-2b3c4d5e6f",
          title: "Personal Goals",
          body: "Read two books per month, exercise three times a week, learn a new language.",
          createdAt: "2022-08-15T18:12:55.789Z",
          archived: !1,
        },
        {
          id: "notes-LMN-456789",
          title: "Recipe: Spaghetti Bolognese",
          body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
          createdAt: "2022-08-20T12:30:40.200Z",
          archived: !1,
        },
        {
          id: "notes-QwErTyUiOp",
          title: "Workout Routine",
          body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
          createdAt: "2022-08-25T09:15:17.890Z",
          archived: !1,
        },
        {
          id: "notes-abcdef-987654",
          title: "Book Recommendations",
          body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
          createdAt: "2022-09-01T14:20:05.321Z",
          archived: !1,
        },
        {
          id: "notes-zyxwv-54321",
          title: "Daily Reflections",
          body: "Write down three positive things that happened today and one thing to improve tomorrow.",
          createdAt: "2022-09-07T20:40:30.150Z",
          archived: !1,
        },
        {
          id: "notes-poiuyt-987654",
          title: "Travel Bucket List",
          body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
          createdAt: "2022-09-15T11:55:44.678Z",
          archived: !1,
        },
        {
          id: "notes-asdfgh-123456",
          title: "Coding Projects",
          body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
          createdAt: "2022-09-20T17:10:12.987Z",
          archived: !1,
        },
        {
          id: "notes-5678-abcd-efgh",
          title: "Project Deadline",
          body: "Complete project tasks by the deadline on October 1st.",
          createdAt: "2022-09-28T14:00:00.000Z",
          archived: !1,
        },
        {
          id: "notes-9876-wxyz-1234",
          title: "Health Checkup",
          body: "Schedule a routine health checkup with the doctor.",
          createdAt: "2022-10-05T09:30:45.600Z",
          archived: !1,
        },
        {
          id: "notes-qwerty-8765-4321",
          title: "Financial Goals",
          body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
          createdAt: "2022-10-12T12:15:30.890Z",
          archived: !1,
        },
        {
          id: "notes-98765-54321-12345",
          title: "Holiday Plans",
          body: "Research and plan for the upcoming holiday destination.",
          createdAt: "2022-10-20T16:45:00.000Z",
          archived: !1,
        },
        {
          id: "notes-1234-abcd-5678",
          title: "Language Learning",
          body: "Practice Spanish vocabulary for 30 minutes every day.",
          createdAt: "2022-10-28T08:00:20.120Z",
          archived: !1,
        },
      ];
      class g extends HTMLElement {
        connectedCallback() {
          this.innerHTML =
            '\n      <div id="loading-overlay">\n        <div id="loading-spinner"></div>\n        <img src="https://res.cloudinary.com/dwxoqt0ra/image/upload/v1711983326/gTeEe8Gpc_zj81e4.gif" alt="Animasi Hewan Lucu">\n      </div>\n    ';
        }
      }
      customElements.define("loading-indicator", g);
      const v = "https://notes-api.dicoding.dev/v2";
      class y extends HTMLElement {
        constructor() {
          super(),
            (this.notes = []),
            (this.loadingIndicator =
              document.querySelector("loading-indicator"));
        }
        connectedCallback() {
          this.updateList(),
            this.addEventListener("click", (t) => {
              const e = t.target;
              if (e.classList.contains("delete-icon")) {
                const t = e.dataset.id;
                this.deleteNoteById(t);
              } else if (
                e.classList.contains("archive-button") ||
                e.classList.contains("unarchive-button")
              ) {
                const t = e.dataset.id;
                this.archiveOrUnarchiveNote(t);
              }
            });
        }
        async updateList() {
          try {
            this.loadingIndicator.style.display = "block";
            const t = await fetch(`${v}/notes`, { method: "GET" });
            if (!t.ok) throw new Error("Failed to fetch notes.");
            const e = await t.json();
            (this.notes = e.data.concat(_)),
              this.notes.sort(
                (t, e) => new Date(e.createdAt) - new Date(t.createdAt),
              ),
              this.notes.reverse(),
              this.render();
          } catch (t) {
            console.error(t),
              Swal.fire({
                icon: "error",
                title: "Error",
                text:
                  t.message ||
                  "Failed to fetch notes. Showing dummy data instead.",
              }),
              (this.notes = _),
              this.render();
          } finally {
            setTimeout(() => {
              this.loadingIndicator.style.display = "none";
            }, 1e3);
          }
        }
        render() {
          this.innerHTML = this.generateNoteListMarkup();
        }
        generateNoteListMarkup() {
          return `\n    <section class="notes-container">\n      ${this.notes
            .map(
              (t) =>
                `\n            <div class="note" data-id="${t.id}">\n              <center>\n                <ul style="list-style: none; padding: 0; margin: 0;">\n                  <li style="background-color: #E178C5; width: 30px; height: 30px; border-radius: 50%; margin-bottom: 5px;"></li>\n                  <li style="background-color: #FF8E8F; width: 20px; height: 20px; border-radius: 50%; margin-bottom: 5px;"></li>\n                  <li style="background-color: #41C9E2; width: 10px; height: 10px; border-radius: 50%; margin-bottom: 5px;"></li>\n                </ul>\n              </center>\n              <div style="margin-left: 15px;">\n                <h2>${t.title}</h2>\n                <p><button class="archive-button ${t.archived ? "unarchive-button" : "archive-button"}" data-id="${t.id}">${t.archived ? "unarchive" : "archive"}</button></p>\n                <p>${t.body}</p>\n                <small>${this.formatDate(new Date(t.createdAt))}</small>\n              </div>\n              <i class="fas fa-trash delete-icon" data-id="${t.id}"></i>\n            </div>\n          `,
            )
            .reverse()
            .join("")}\n    </section>\n  `;
        }
        formatDate(t) {
          return new Date(t).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          });
        }
        async addNewNoteToList(t) {
          try {
            this.notes.push(t), this.render();
          } catch (t) {
            console.error(t),
              Swal.fire({
                icon: "error",
                title: "Error",
                text: t.message || "Failed to add note.",
              });
          }
        }
        async deleteNoteById(t) {
          try {
            if (
              (
                await Swal.fire({
                  icon: "warning",
                  title: "Confirm",
                  text: "Are you sure you want to delete this note?",
                  showCancelButton: !0,
                  confirmButtonText: "Yes, delete it!",
                })
              ).isConfirmed
            ) {
              (this.notes = this.notes.filter((e) => e.id !== t)),
                this.render();
              const e = await fetch(`${v}/notes/${t}`, { method: "DELETE" });
              if (!e.ok) throw new Error("Failed to delete note.");
              const n = (await e.json()).message;
              Swal.fire({ icon: "success", title: "Success!", text: n });
            }
          } catch (t) {
            console.error(t),
              Swal.fire({
                icon: "error",
                title: "Error",
                text: t.message || "Failed to delete note.",
              });
          }
        }
        async archiveOrUnarchiveNote(t) {
          try {
            const e = this.querySelector(`.note[data-id="${t}"]`);
            if (!e) throw new Error("Note element not found.");
            const n = e
                .querySelector(".archive-button")
                .classList.contains("unarchive-button"),
              r = await fetch(
                `${v}/notes/${t}/${n ? "unarchive" : "archive"}`,
                { method: "POST" },
              );
            if (!r.ok)
              throw new Error(`Failed to ${n ? "unarchive" : "archive"} note.`);
            const i = (await r.json()).message;
            Swal.fire({ icon: "success", title: "Success!", text: i }),
              e.remove();
          } catch (t) {
            console.error(t),
              Swal.fire({
                icon: "error",
                title: "Error",
                text:
                  t.message ||
                  `Failed to ${isArchived ? "unarchive" : "archive"} note.`,
              });
          }
        }
      }
      customElements.define("note-list", y);
      class b extends HTMLElement {
        connectedCallback() {
          this.innerHTML =
            '\n      <div class="archive-menu">\n        <button id="show-all-btn" class="show-all">Show Note</button>\n        <button id="show-archive-btn" class="show-archive">Show Archived Notes</button>\n      </div>\n    ';
          const t = this.querySelector("#show-archive-btn"),
            e = this.querySelector("#show-all-btn");
          e.classList.add("active"),
            t.addEventListener("click", async () => {
              const n = document.querySelector("note-list");
              try {
                const r = await fetch(
                  "https://notes-api.dicoding.dev/v2/notes/archived",
                  { method: "GET" },
                );
                if (!r.ok) throw new Error("Failed to fetch archived notes.");
                const i = (await r.json()).data;
                (n.notes = i),
                  n.render(),
                  t.classList.add("active"),
                  e.classList.remove("active");
              } catch (t) {
                console.error(t),
                  Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: t.message || "Failed to fetch archived notes.",
                  });
              }
            }),
            e.addEventListener("click", async () => {
              document.querySelector("note-list").updateList(),
                e.classList.add("active"),
                t.classList.remove("active");
            });
        }
      }
      customElements.define("archive-menu", b);
      class x extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `\n    <div class="container">\n      <h2>${this.getAttribute("search-title")}</h2>\n      <section class="search-bar">\n        <div class="search-container">\n          <input type="text" id="search-input" placeholder="${this.getAttribute("search-placeholder")}">\n          <span class="clear-icon" id="clear-icon">&#10006;</span>\n        </div>\n        <button id="search-button"><i class="fas fa-search"></i></button>\n      </section>\n    </div>\n    `;
          const t = this.querySelector(".search-container"),
            e = this.querySelector("#search-input"),
            n = this.querySelector("#search-button"),
            r = this.querySelector("#clear-icon"),
            i = this.querySelector(".container"),
            a = () => {
              let t = document.querySelectorAll(".note");
              const n = e.value.trim().toLowerCase();
              let a = !1;
              if (
                (t.forEach((t) => {
                  const e = t.querySelector("h2").textContent.toLowerCase(),
                    r = t.querySelector("p").textContent.toLowerCase();
                  e.includes(n) || r.includes(n)
                    ? ((t.style.display = "flex"), (a = !0))
                    : (t.style.display = "none");
                }),
                a)
              ) {
                const t = i.querySelector(".not-found");
                t && i.removeChild(t);
              } else {
                const t = document.createElement("p");
                t.classList.add("not-found"),
                  (t.textContent = `Notes not found for "${n}"`),
                  i.appendChild(t);
              }
              r.style.display = "" === n ? "none" : "inline-block";
            },
            s = () => {
              document.querySelectorAll(".note").forEach((t) => {
                t.style.display = "flex";
              });
              const t = i.querySelector(".not-found");
              t && i.removeChild(t);
            };
          n.addEventListener("click", () => {
            a();
          }),
            t.addEventListener("click", (t) => {
              const n = t.target;
              "search-button" === n.id
                ? a()
                : "clear-icon" === n.id &&
                  ((e.value = ""), s(), (r.style.display = "none"));
            }),
            e.addEventListener("keypress", (t) => {
              "Enter" === t.key && a();
            }),
            e.addEventListener("input", () => {
              "" === e.value.trim()
                ? (s(), (r.style.display = "none"))
                : (r.style.display = "inline-block");
            });
        }
      }
      customElements.define("note-search", x);
      class w extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `\n      <div class="container">\n        <p>${this.getAttribute("footer-title")}</p>\n      </div>\n    `;
        }
      }
      function T(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function k(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      customElements.define("footer-bar", w);
      var A,
        M,
        E,
        C,
        S,
        O,
        z,
        L,
        D,
        P,
        R,
        F,
        B,
        I,
        N,
        q,
        j,
        U = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        Y = { duration: 0.5, overwrite: !1, delay: 0 },
        $ = 1e8,
        H = 1e-8,
        X = 2 * Math.PI,
        Z = X / 4,
        G = 0,
        V = Math.sqrt,
        W = Math.cos,
        Q = Math.sin,
        J = function (t) {
          return "string" == typeof t;
        },
        K = function (t) {
          return "function" == typeof t;
        },
        tt = function (t) {
          return "number" == typeof t;
        },
        et = function (t) {
          return void 0 === t;
        },
        nt = function (t) {
          return "object" == typeof t;
        },
        rt = function (t) {
          return !1 !== t;
        },
        it = function () {
          return "undefined" != typeof window;
        },
        at = function (t) {
          return K(t) || J(t);
        },
        st =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        ot = Array.isArray,
        ut = /(?:-?\.?\d|\.)+/gi,
        lt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        ct = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ht = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        dt = /[+-]=-?[.\d]+/,
        ft = /[^,'"\[\]\s]+/gi,
        pt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        mt = {},
        _t = {},
        gt = function (t) {
          return (_t = Xt(t, mt)) && Zn;
        },
        vt = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()",
          );
        },
        yt = function (t, e) {
          return !e && console.warn(t);
        },
        bt = function (t, e) {
          return (t && (mt[t] = e) && _t && (_t[t] = e)) || mt;
        },
        xt = function () {
          return 0;
        },
        wt = { suppressEvents: !0, isStart: !0, kill: !1 },
        Tt = { suppressEvents: !0, kill: !1 },
        kt = { suppressEvents: !0 },
        At = {},
        Mt = [],
        Et = {},
        Ct = {},
        St = {},
        Ot = 30,
        zt = [],
        Lt = "",
        Dt = function (t) {
          var e,
            n,
            r = t[0];
          if ((nt(r) || K(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
            for (n = zt.length; n-- && !zt[n].targetTest(r); );
            e = zt[n];
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new on(t[n], e)))) ||
              t.splice(n, 1);
          return t;
        },
        Pt = function (t) {
          return t._gsap || Dt(Te(t))[0]._gsap;
        },
        Rt = function (t, e, n) {
          return (n = t[e]) && K(n)
            ? t[e]()
            : (et(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        Ft = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        Bt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        It = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        Nt = function (t, e) {
          var n = e.charAt(0),
            r = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
          );
        },
        qt = function (t, e) {
          for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
          return r < n;
        },
        jt = function () {
          var t,
            e,
            n = Mt.length,
            r = Mt.slice(0);
          for (Et = {}, Mt.length = 0, t = 0; t < n; t++)
            (e = r[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        Ut = function (t, e, n, r) {
          Mt.length && !M && jt(),
            t.render(e, n, r || (M && e < 0 && (t._initted || t._startAt))),
            Mt.length && !M && jt();
        },
        Yt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(ft).length < 2
            ? e
            : J(t)
              ? t.trim()
              : t;
        },
        $t = function (t) {
          return t;
        },
        Ht = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        Xt = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        Zt = function t(e, n) {
          for (var r in n)
            "__proto__" !== r &&
              "constructor" !== r &&
              "prototype" !== r &&
              (e[r] = nt(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
          return e;
        },
        Gt = function (t, e) {
          var n,
            r = {};
          for (n in t) n in e || (r[n] = t[n]);
          return r;
        },
        Vt = function (t) {
          var e,
            n = t.parent || C,
            r = t.keyframes
              ? ((e = ot(t.keyframes)),
                function (t, n) {
                  for (var r in n)
                    r in t ||
                      ("duration" === r && e) ||
                      "ease" === r ||
                      (t[r] = n[r]);
                })
              : Ht;
          if (rt(t.inherit))
            for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
          return t;
        },
        Wt = function (t, e, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var a,
            s = t[r];
          if (i) for (a = e[i]; s && s[i] > a; ) s = s._prev;
          return (
            s
              ? ((e._next = s._next), (s._next = e))
              : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = s),
            (e.parent = e._dp = t),
            e
          );
        },
        Qt = function (t, e, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = e._prev,
            a = e._next;
          i ? (i._next = a) : t[n] === e && (t[n] = a),
            a ? (a._prev = i) : t[r] === e && (t[r] = i),
            (e._next = e._prev = e.parent = null);
        },
        Jt = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        Kt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
          return t;
        },
        te = function (t, e, n, r) {
          return (
            t._startAt &&
            (M
              ? t._startAt.revert(Tt)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
          );
        },
        ee = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        ne = function (t) {
          return t._repeat
            ? re(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        re = function (t, e) {
          var n = Math.floor((t /= e));
          return t && n === t ? n - 1 : n;
        },
        ie = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        ae = function (t) {
          return (t._end = It(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || H) || 0),
          ));
        },
        se = function (t, e) {
          var n = t._dp;
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = It(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
              )),
              ae(t),
              n._dirty || Kt(n, t)),
            t
          );
        },
        oe = function (t, e) {
          var n;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((n = ie(t.rawTime(), e)),
              (!e._dur || ye(0, e.totalDuration(), n) - e._tTime > H) &&
                e.render(n, !0)),
            Kt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            t._zTime = -1e-8;
          }
        },
        ue = function (t, e, n, r) {
          return (
            e.parent && Jt(e),
            (e._start = It(
              (tt(n) ? n : n || t !== C ? _e(t, n, e) : t._time) + e._delay,
            )),
            (e._end = It(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
            )),
            Wt(t, e, "_first", "_last", t._sort ? "_start" : 0),
            de(e) || (t._recent = e),
            r || oe(t, e),
            t._ts < 0 && se(t, t._tTime),
            t
          );
        },
        le = function (t, e) {
          return (
            (mt.ScrollTrigger || vt("scrollTrigger", e)) &&
            mt.ScrollTrigger.create(e, t)
          );
        },
        ce = function (t, e, n, r, i) {
          return (
            mn(t, e, i),
            t._initted
              ? !n &&
                t._pt &&
                !M &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                D !== Ze.frame
                ? (Mt.push(t), (t._lazy = [i, r]), 1)
                : void 0
              : 1
          );
        },
        he = function t(e) {
          var n = e.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          );
        },
        de = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        fe = function (t, e, n, r) {
          var i = t._repeat,
            a = It(e) || 0,
            s = t._tTime / t._tDur;
          return (
            s && !r && (t._time *= a / t._dur),
            (t._dur = a),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : It(a * (i + 1) + t._rDelay * i)
              : a),
            s > 0 && !r && se(t, (t._tTime = t._tDur * s)),
            t.parent && ae(t),
            n || Kt(t.parent, t),
            t
          );
        },
        pe = function (t) {
          return t instanceof ln ? Kt(t) : fe(t, t._dur);
        },
        me = { _start: 0, endTime: xt, totalDuration: xt },
        _e = function t(e, n, r) {
          var i,
            a,
            s,
            o = e.labels,
            u = e._recent || me,
            l = e.duration() >= $ ? u.endTime(!1) : e._dur;
          return J(n) && (isNaN(n) || n in o)
            ? ((a = n.charAt(0)),
              (s = "%" === n.substr(-1)),
              (i = n.indexOf("=")),
              "<" === a || ">" === a
                ? (i >= 0 && (n = n.replace(/=/, "")),
                  ("<" === a ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (s ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                : i < 0
                  ? (n in o || (o[n] = l), o[n])
                  : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                    s &&
                      r &&
                      (a = (a / 100) * (ot(r) ? r[0] : r).totalDuration()),
                    i > 1 ? t(e, n.substr(0, i - 1), r) + a : l + a))
            : null == n
              ? l
              : +n;
        },
        ge = function (t, e, n) {
          var r,
            i,
            a = tt(e[1]),
            s = (a ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[s];
          if ((a && (o.duration = e[1]), (o.parent = n), t)) {
            for (r = o, i = n; i && !("immediateRender" in r); )
              (r = i.vars.defaults || {}), (i = rt(i.vars.inherit) && i.parent);
            (o.immediateRender = rt(r.immediateRender)),
              t < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
          }
          return new bn(e[0], o, e[s + 1]);
        },
        ve = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        ye = function (t, e, n) {
          return n < t ? t : n > e ? e : n;
        },
        be = function (t, e) {
          return J(t) && (e = pt.exec(t)) ? e[1] : "";
        },
        xe = [].slice,
        we = function (t, e) {
          return (
            t &&
            nt(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && nt(t[0]))) &&
            !t.nodeType &&
            t !== S
          );
        },
        Te = function (t, e, n) {
          return E && !e && E.selector
            ? E.selector(t)
            : !J(t) || n || (!O && Ge())
              ? ot(t)
                ? (function (t, e, n) {
                    return (
                      void 0 === n && (n = []),
                      t.forEach(function (t) {
                        var r;
                        return (J(t) && !e) || we(t, 1)
                          ? (r = n).push.apply(r, Te(t))
                          : n.push(t);
                      }) || n
                    );
                  })(t, n)
                : we(t)
                  ? xe.call(t, 0)
                  : t
                    ? [t]
                    : []
              : xe.call((e || z).querySelectorAll(t), 0);
        },
        ke = function (t) {
          return (
            (t = Te(t)[0] || yt("Invalid scope") || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return Te(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                    ? yt("Invalid scope") || z.createElement("div")
                    : t,
              );
            }
          );
        },
        Ae = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        Me = function (t) {
          if (K(t)) return t;
          var e = nt(t) ? t : { each: t },
            n = en(e.ease),
            r = e.from || 0,
            i = parseFloat(e.base) || 0,
            a = {},
            s = r > 0 && r < 1,
            o = isNaN(r) || s,
            u = e.axis,
            l = r,
            c = r;
          return (
            J(r)
              ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !s && o && ((l = r[0]), (c = r[1])),
            function (t, s, h) {
              var d,
                f,
                p,
                m,
                _,
                g,
                v,
                y,
                b,
                x = (h || e).length,
                w = a[x];
              if (!w) {
                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, $])[1])) {
                  for (
                    v = -$;
                    v < (v = h[b++].getBoundingClientRect().left) && b < x;

                  );
                  b < x && b--;
                }
                for (
                  w = a[x] = [],
                    d = o ? Math.min(b, x) * l - 0.5 : r % b,
                    f = b === $ ? 0 : o ? (x * c) / b - 0.5 : (r / b) | 0,
                    v = 0,
                    y = $,
                    g = 0;
                  g < x;
                  g++
                )
                  (p = (g % b) - d),
                    (m = f - ((g / b) | 0)),
                    (w[g] = _ =
                      u ? Math.abs("y" === u ? m : p) : V(p * p + m * m)),
                    _ > v && (v = _),
                    _ < y && (y = _);
                "random" === r && Ae(w),
                  (w.max = v - y),
                  (w.min = y),
                  (w.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (b > x
                          ? x - 1
                          : u
                            ? "y" === u
                              ? x / b
                              : b
                            : Math.max(b, x / b)) ||
                      0) * ("edges" === r ? -1 : 1)),
                  (w.b = x < 0 ? i - x : i),
                  (w.u = be(e.amount || e.each) || 0),
                  (n = n && x < 0 ? Ke(n) : n);
              }
              return (
                (x = (w[t] - w.min) / w.max || 0),
                It(w.b + (n ? n(x) : x) * w.v) + w.u
              );
            }
          );
        },
        Ee = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (n) {
            var r = It(Math.round(parseFloat(n) / t) * t * e);
            return (r - (r % 1)) / e + (tt(n) ? 0 : be(n));
          };
        },
        Ce = function (t, e) {
          var n,
            r,
            i = ot(t);
          return (
            !i &&
              nt(t) &&
              ((n = i = t.radius || $),
              t.values
                ? ((t = Te(t.values)), (r = !tt(t[0])) && (n *= n))
                : (t = Ee(t.increment))),
            ve(
              e,
              i
                ? K(t)
                  ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          a,
                          s = parseFloat(r ? e.x : e),
                          o = parseFloat(r ? e.y : 0),
                          u = $,
                          l = 0,
                          c = t.length;
                        c--;

                      )
                        (i = r
                          ? (i = t[c].x - s) * i + (a = t[c].y - o) * a
                          : Math.abs(t[c] - s)) < u && ((u = i), (l = c));
                      return (
                        (l = !n || u <= n ? t[l] : e),
                        r || l === e || tt(e) ? l : l + be(e)
                      );
                    }
                : Ee(t),
            )
          );
        },
        Se = function (t, e, n, r) {
          return ve(ot(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
            return ot(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n,
                    ) *
                      n *
                      r,
                  ) / r;
          });
        },
        Oe = function (t, e, n) {
          return ve(n, function (n) {
            return t[~~e(n)];
          });
        },
        ze = function (t) {
          for (var e, n, r, i, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            (r = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (n = t.substr(e + 7, r - e - 7).match(i ? ft : ut)),
              (s +=
                t.substr(a, e - a) +
                Se(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
              (a = r + 1);
          return s + t.substr(a, t.length - a);
        },
        Le = function (t, e, n, r, i) {
          var a = e - t,
            s = r - n;
          return ve(i, function (e) {
            return n + (((e - t) / a) * s || 0);
          });
        },
        De = function (t, e, n) {
          var r,
            i,
            a,
            s = t.labels,
            o = $;
          for (r in s)
            (i = s[r] - e) < 0 == !!n &&
              i &&
              o > (i = Math.abs(i)) &&
              ((a = r), (o = i));
          return a;
        },
        Pe = function (t, e, n) {
          var r,
            i,
            a,
            s = t.vars,
            o = s[e],
            u = E,
            l = t._ctx;
          if (o)
            return (
              (r = s[e + "Params"]),
              (i = s.callbackScope || t),
              n && Mt.length && jt(),
              l && (E = l),
              (a = r ? o.apply(i, r) : o.call(i)),
              (E = u),
              a
            );
        },
        Re = function (t) {
          return (
            Jt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!M),
            t.progress() < 1 && Pe(t, "onInterrupt"),
            t
          );
        },
        Fe = [],
        Be = function (t) {
          if (t)
            if (((t = (!t.name && t.default) || t), it() || t.headless)) {
              var e = t.name,
                n = K(t),
                r =
                  e && !n && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                i = {
                  init: xt,
                  render: Sn,
                  add: fn,
                  kill: zn,
                  modifier: On,
                  rawVars: 0,
                },
                a = {
                  targetTest: 0,
                  get: 0,
                  getSetter: An,
                  aliases: {},
                  register: 0,
                };
              if ((Ge(), t !== r)) {
                if (Ct[e]) return;
                Ht(r, Ht(Gt(t, i), a)),
                  Xt(r.prototype, Xt(i, Gt(t, a))),
                  (Ct[(r.prop = e)] = r),
                  t.targetTest && (zt.push(r), (At[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              bt(e, r), t.register && t.register(Zn, r, Pn);
            } else Fe.push(t);
        },
        Ie = 255,
        Ne = {
          aqua: [0, Ie, Ie],
          lime: [0, Ie, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Ie],
          navy: [0, 0, 128],
          white: [Ie, Ie, Ie],
          olive: [128, 128, 0],
          yellow: [Ie, Ie, 0],
          orange: [Ie, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Ie, 0, 0],
          pink: [Ie, 192, 203],
          cyan: [0, Ie, Ie],
          transparent: [Ie, Ie, Ie, 0],
        },
        qe = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
                ? n
                : 3 * t < 2
                  ? e + (n - e) * (2 / 3 - t) * 6
                  : e) *
              Ie +
              0.5) |
            0
          );
        },
        je = function (t, e, n) {
          var r,
            i,
            a,
            s,
            o,
            u,
            l,
            c,
            h,
            d,
            f = t ? (tt(t) ? [t >> 16, (t >> 8) & Ie, t & Ie] : 0) : Ne.black;
          if (!f) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ne[t])
            )
              f = Ne[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((r = t.charAt(1)),
                  (i = t.charAt(2)),
                  (a = t.charAt(3)),
                  (t =
                    "#" +
                    r +
                    r +
                    i +
                    i +
                    a +
                    a +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (f = parseInt(t.substr(1, 6), 16)) >> 16,
                  (f >> 8) & Ie,
                  f & Ie,
                  parseInt(t.substr(7), 16) / 255,
                ];
              f = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & Ie,
                t & Ie,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((f = d = t.match(ut)), e)) {
                if (~t.indexOf("="))
                  return (f = t.match(lt)), n && f.length < 4 && (f[3] = 1), f;
              } else
                (s = (+f[0] % 360) / 360),
                  (o = +f[1] / 100),
                  (r =
                    2 * (u = +f[2] / 100) -
                    (i = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
                  f.length > 3 && (f[3] *= 1),
                  (f[0] = qe(s + 1 / 3, r, i)),
                  (f[1] = qe(s, r, i)),
                  (f[2] = qe(s - 1 / 3, r, i));
            else f = t.match(ut) || Ne.transparent;
            f = f.map(Number);
          }
          return (
            e &&
              !d &&
              ((r = f[0] / Ie),
              (i = f[1] / Ie),
              (a = f[2] / Ie),
              (u = ((l = Math.max(r, i, a)) + (c = Math.min(r, i, a))) / 2),
              l === c
                ? (s = o = 0)
                : ((h = l - c),
                  (o = u > 0.5 ? h / (2 - l - c) : h / (l + c)),
                  (s =
                    l === r
                      ? (i - a) / h + (i < a ? 6 : 0)
                      : l === i
                        ? (a - r) / h + 2
                        : (r - i) / h + 4),
                  (s *= 60)),
              (f[0] = ~~(s + 0.5)),
              (f[1] = ~~(100 * o + 0.5)),
              (f[2] = ~~(100 * u + 0.5))),
            n && f.length < 4 && (f[3] = 1),
            f
          );
        },
        Ue = function (t) {
          var e = [],
            n = [],
            r = -1;
          return (
            t.split($e).forEach(function (t) {
              var i = t.match(ct) || [];
              e.push.apply(e, i), n.push((r += i.length + 1));
            }),
            (e.c = n),
            e
          );
        },
        Ye = function (t, e, n) {
          var r,
            i,
            a,
            s,
            o = "",
            u = (t + o).match($e),
            l = e ? "hsla(" : "rgba(",
            c = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = je(t, e, 1)) &&
                l +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            n && ((a = Ue(t)), (r = n.c).join(o) !== a.c.join(o)))
          )
            for (s = (i = t.replace($e, "1").split(ct)).length - 1; c < s; c++)
              o +=
                i[c] +
                (~r.indexOf(c)
                  ? u.shift() || l + "0,0,0,0)"
                  : (a.length ? a : u.length ? u : n).shift());
          if (!i)
            for (s = (i = t.split($e)).length - 1; c < s; c++) o += i[c] + u[c];
          return o + i[s];
        },
        $e = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in Ne) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        He = /hsl[a]?\(/,
        Xe = function (t) {
          var e,
            n = t.join(" ");
          if ((($e.lastIndex = 0), $e.test(n)))
            return (
              (e = He.test(n)),
              (t[1] = Ye(t[1], e)),
              (t[0] = Ye(t[0], e, Ue(t[1]))),
              !0
            );
        },
        Ze = (function () {
          var t,
            e,
            n,
            r,
            i,
            a,
            s = Date.now,
            o = 500,
            u = 33,
            l = s(),
            c = l,
            h = 1e3 / 240,
            d = h,
            f = [],
            p = function n(p) {
              var m,
                _,
                g,
                v,
                y = s() - c,
                b = !0 === p;
              if (
                ((y > o || y < 0) && (l += y - u),
                ((m = (g = (c += y) - l) - d) > 0 || b) &&
                  ((v = ++r.frame),
                  (i = g - 1e3 * r.time),
                  (r.time = g /= 1e3),
                  (d += m + (m >= h ? 4 : h - m)),
                  (_ = 1)),
                b || (t = e(n)),
                _)
              )
                for (a = 0; a < f.length; a++) f[a](g, i, v, p);
            };
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              p(!0);
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60));
            },
            wake: function () {
              L &&
                (!O &&
                  it() &&
                  ((S = O = window),
                  (z = S.document || {}),
                  (mt.gsap = Zn),
                  (S.gsapVersions || (S.gsapVersions = [])).push(Zn.version),
                  gt(_t || S.GreenSockGlobals || (!S.gsap && S) || {}),
                  Fe.forEach(Be)),
                (n =
                  "undefined" != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                t && r.sleep(),
                (e =
                  n ||
                  function (t) {
                    return setTimeout(t, (d - 1e3 * r.time + 1) | 0);
                  }),
                (R = 1),
                p(2));
            },
            sleep: function () {
              (n ? cancelAnimationFrame : clearTimeout)(t), (R = 0), (e = xt);
            },
            lagSmoothing: function (t, e) {
              (o = t || 1 / 0), (u = Math.min(e || 33, o));
            },
            fps: function (t) {
              (h = 1e3 / (t || 240)), (d = 1e3 * r.time + h);
            },
            add: function (t, e, n) {
              var i = e
                ? function (e, n, a, s) {
                    t(e, n, a, s), r.remove(i);
                  }
                : t;
              return r.remove(t), f[n ? "unshift" : "push"](i), Ge(), i;
            },
            remove: function (t, e) {
              ~(e = f.indexOf(t)) && f.splice(e, 1) && a >= e && a--;
            },
            _listeners: f,
          });
        })(),
        Ge = function () {
          return !R && Ze.wake();
        },
        Ve = {},
        We = /^[\d.\-M][\d.\-,\s]/,
        Qe = /["']/g,
        Je = function (t) {
          for (
            var e,
              n,
              r,
              i = {},
              a = t.substr(1, t.length - 3).split(":"),
              s = a[0],
              o = 1,
              u = a.length;
            o < u;
            o++
          )
            (n = a[o]),
              (e = o !== u - 1 ? n.lastIndexOf(",") : n.length),
              (r = n.substr(0, e)),
              (i[s] = isNaN(r) ? r.replace(Qe, "").trim() : +r),
              (s = n.substr(e + 1).trim());
          return i;
        },
        Ke = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        tn = function t(e, n) {
          for (var r, i = e._first; i; )
            i instanceof ln
              ? t(i, n)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? t(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
              (i = i._next);
        },
        en = function (t, e) {
          return (
            (t &&
              (K(t)
                ? t
                : Ve[t] ||
                  (function (t) {
                    var e,
                      n,
                      r,
                      i,
                      a = (t + "").split("("),
                      s = Ve[a[0]];
                    return s && a.length > 1 && s.config
                      ? s.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [Je(a[1])]
                            : ((e = t),
                              (n = e.indexOf("(") + 1),
                              (r = e.indexOf(")")),
                              (i = e.indexOf("(", n)),
                              e.substring(
                                n,
                                ~i && i < r ? e.indexOf(")", r + 1) : r,
                              ))
                                .split(",")
                                .map(Yt),
                        )
                      : Ve._CE && We.test(t)
                        ? Ve._CE("", t)
                        : s;
                  })(t))) ||
            e
          );
        },
        nn = function (t, e, n, r) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var i,
            a = { easeIn: e, easeOut: n, easeInOut: r };
          return (
            Ft(t, function (t) {
              for (var e in ((Ve[t] = mt[t] = a),
              (Ve[(i = t.toLowerCase())] = n),
              a))
                Ve[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                ] = Ve[t + "." + e] = a[e];
            }),
            a
          );
        },
        rn = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        an = function t(e, n, r) {
          var i = n >= 1 ? n : 1,
            a = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            s = (a / X) * (Math.asin(1 / i) || 0),
            o = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * Q((t - s) * a) + 1;
            },
            u =
              "out" === e
                ? o
                : "in" === e
                  ? function (t) {
                      return 1 - o(1 - t);
                    }
                  : rn(o);
          return (
            (a = X / a),
            (u.config = function (n, r) {
              return t(e, n, r);
            }),
            u
          );
        },
        sn = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var r = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
            i =
              "out" === e
                ? r
                : "in" === e
                  ? function (t) {
                      return 1 - r(1 - t);
                    }
                  : rn(r);
          return (
            (i.config = function (n) {
              return t(e, n);
            }),
            i
          );
        };
      Ft("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e;
        nn(
          t + ",Power" + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, n);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2;
          },
        );
      }),
        (Ve.Linear.easeNone = Ve.none = Ve.Linear.easeIn),
        nn("Elastic", an("in"), an("out"), an()),
        (F = 7.5625),
        (N = 2 * (I = 1 / (B = 2.75))),
        (q = 2.5 * I),
        nn(
          "Bounce",
          function (t) {
            return 1 - j(1 - t);
          },
          (j = function (t) {
            return t < I
              ? F * t * t
              : t < N
                ? F * Math.pow(t - 1.5 / B, 2) + 0.75
                : t < q
                  ? F * (t -= 2.25 / B) * t + 0.9375
                  : F * Math.pow(t - 2.625 / B, 2) + 0.984375;
          }),
        ),
        nn("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        nn("Circ", function (t) {
          return -(V(1 - t * t) - 1);
        }),
        nn("Sine", function (t) {
          return 1 === t ? 1 : 1 - W(t * Z);
        }),
        nn("Back", sn("in"), sn("out"), sn()),
        (Ve.SteppedEase =
          Ve.steps =
          mt.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  r = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((r * ye(0, 0.99999999, t)) | 0) + i) * n;
                };
              },
            }),
        (Y.ease = Ve["quad.out"]),
        Ft(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (Lt += t + "," + t + "Params,");
          },
        );
      var on = function (t, e) {
          (this.id = G++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : Rt),
            (this.set = e ? e.getSetter : An);
        },
        un = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              fe(this, +t.duration, 1, 1),
              (this.data = t.data),
              E && ((this._ctx = E), E.data.push(this)),
              R || Ze.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0
                      ? t + (t + this._rDelay) * this._repeat
                      : t,
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  fe(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((Ge(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  se(this, t), !n._dp || n.parent || oe(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  ue(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === H) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Ut(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + ne(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e,
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      ne(this),
                    e,
                  )
                : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                  ? re(this._tTime, n) + 1
                  : 1;
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var n =
                this.parent && this._ts
                  ? ie(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(
                  ye(-Math.abs(this._delay), this._tDur, n),
                  !1 !== e,
                ),
                ae(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent);
                  return t;
                })(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Ge(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== H &&
                            (this._tTime -= H),
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    ue(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (rt(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                    ? ie(e.rawTime(t), this)
                    : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = kt);
              var e = M;
              return (
                (M = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (M = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (Math.abs(e._ts) || 1)), (e = e._dp);
              return !this.parent && this._sat ? this._sat.globalTime(t) : n;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), pe(this))
                : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), pe(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(_e(this, t), rt(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, rt(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - H
                )
              );
            }),
            (e.eventCallback = function (t, e, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((r[t] = e),
                      n && (r[t + "Params"] = n),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete r[t],
                  this)
                : r[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (n) {
                var r = K(t) ? t : $t,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      K(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                      n(r),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              Re(this);
            }),
            t
          );
        })();
      Ht(un.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var ln = (function (t) {
        function e(e, n) {
          var r;
          return (
            void 0 === e && (e = {}),
            ((r = t.call(this, e) || this).labels = {}),
            (r.smoothChildTiming = !!e.smoothChildTiming),
            (r.autoRemoveChildren = !!e.autoRemoveChildren),
            (r._sort = rt(e.sortChildren)),
            C && ue(e.parent || C, T(r), n),
            e.reversed && r.reverse(),
            e.paused && r.paused(!0),
            e.scrollTrigger && le(T(r), e.scrollTrigger),
            r
          );
        }
        k(e, t);
        var n = e.prototype;
        return (
          (n.to = function (t, e, n) {
            return ge(0, arguments, this), this;
          }),
          (n.from = function (t, e, n) {
            return ge(1, arguments, this), this;
          }),
          (n.fromTo = function (t, e, n, r) {
            return ge(2, arguments, this), this;
          }),
          (n.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Vt(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new bn(t, e, _e(this, n), 1),
              this
            );
          }),
          (n.call = function (t, e, n) {
            return ue(this, bn.delayedCall(0, t, e), n);
          }),
          (n.staggerTo = function (t, e, n, r, i, a, s) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || r),
              (n.onComplete = a),
              (n.onCompleteParams = s),
              (n.parent = this),
              new bn(t, n, _e(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (t, e, n, r, i, a, s) {
            return (
              (n.runBackwards = 1),
              (Vt(n).immediateRender = rt(n.immediateRender)),
              this.staggerTo(t, e, n, r, i, a, s)
            );
          }),
          (n.staggerFromTo = function (t, e, n, r, i, a, s, o) {
            return (
              (r.startAt = n),
              (Vt(r).immediateRender = rt(r.immediateRender)),
              this.staggerTo(t, e, r, i, a, s, o)
            );
          }),
          (n.render = function (t, e, n) {
            var r,
              i,
              a,
              s,
              o,
              u,
              l,
              c,
              h,
              d,
              f,
              p,
              m = this._time,
              _ = this._dirty ? this.totalDuration() : this._tDur,
              g = this._dur,
              v = t <= 0 ? 0 : It(t),
              y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (
              (this !== C && v > _ && t >= 0 && (v = _),
              v !== this._tTime || n || y)
            ) {
              if (
                (m !== this._time &&
                  g &&
                  ((v += this._time - m), (t += this._time - m)),
                (r = v),
                (h = this._start),
                (u = !(c = this._ts)),
                y && (g || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((f = this._yoyo),
                  (o = g + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * o + t, e, n);
                if (
                  ((r = It(v % o)),
                  v === _
                    ? ((s = this._repeat), (r = g))
                    : ((s = ~~(v / o)) && s === v / o && ((r = g), s--),
                      r > g && (r = g)),
                  (d = re(this._tTime, o)),
                  !m &&
                    this._tTime &&
                    d !== s &&
                    this._tTime - d * o - this._dur <= 0 &&
                    (d = s),
                  f && 1 & s && ((r = g - r), (p = 1)),
                  s !== d && !this._lock)
                ) {
                  var b = f && 1 & d,
                    x = b === (f && 1 & s);
                  if (
                    (s < d && (b = !b),
                    (m = b ? 0 : v % g ? g : v),
                    (this._lock = 1),
                    (this.render(m || (p ? 0 : It(s * o)), e, !g)._lock = 0),
                    (this._tTime = v),
                    !e && this.parent && Pe(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !p &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      u !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((g = this._dur),
                    (_ = this._tDur),
                    x &&
                      ((this._lock = 2),
                      (m = b ? g : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !p && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !u)
                  )
                    return this;
                  tn(this, p);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((l = (function (t, e, n) {
                    var r;
                    if (n > e)
                      for (r = t._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > e) return r;
                        r = r._next;
                      }
                    else
                      for (r = t._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < e) return r;
                        r = r._prev;
                      }
                  })(this, It(m), It(r))),
                  l && (v -= r - (r = l._start))),
                (this._tTime = v),
                (this._time = r),
                (this._act = !c),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (m = 0)),
                !m && r && !e && !s && (Pe(this, "onStart"), this._tTime !== v))
              )
                return this;
              if (r >= m && t >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((a = i._next),
                    (i._act || r >= i._start) && i._ts && l !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (r - i._start) * i._ts,
                        e,
                        n,
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (l = 0), a && (v += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = a;
                }
              else {
                i = this._last;
                for (var w = t < 0 ? t : r; i; ) {
                  if (
                    ((a = i._prev), (i._act || w <= i._end) && i._ts && l !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (w - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (w - i._start) * i._ts,
                        e,
                        n || (M && (i._initted || i._startAt)),
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (l = 0), a && (v += this._zTime = w ? -1e-8 : H);
                      break;
                    }
                  }
                  i = a;
                }
              }
              if (
                l &&
                !e &&
                (this.pause(),
                (l.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = h), ae(this), this.render(t, e, n);
              this._onUpdate && !e && Pe(this, "onUpdate", !0),
                ((v === _ && this._tTime >= this.totalDuration()) ||
                  (!v && m)) &&
                  ((h !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !g) &&
                      ((v === _ && this._ts > 0) || (!v && this._ts < 0)) &&
                      Jt(this, 1),
                    e ||
                      (t < 0 && !m) ||
                      (!v && !m && _) ||
                      (Pe(
                        this,
                        v === _ && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0,
                      ),
                      this._prom &&
                        !(v < _ && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (t, e) {
            var n = this;
            if ((tt(e) || (e = _e(this, e, t)), !(t instanceof un))) {
              if (ot(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e);
                  }),
                  this
                );
              if (J(t)) return this.addLabel(t, e);
              if (!K(t)) return this;
              t = bn.delayedCall(0, t);
            }
            return this !== t ? ue(this, t, e) : this;
          }),
          (n.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -$);
            for (var i = [], a = this._first; a; )
              a._start >= r &&
                (a instanceof bn
                  ? e && i.push(a)
                  : (n && i.push(a),
                    t && i.push.apply(i, a.getChildren(!0, e, n)))),
                (a = a._next);
            return i;
          }),
          (n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n];
          }),
          (n.remove = function (t) {
            return J(t)
              ? this.removeLabel(t)
              : K(t)
                ? this.killTweensOf(t)
                : (Qt(this, t),
                  t === this._recent && (this._recent = this._last),
                  Kt(this));
          }),
          (n.totalTime = function (e, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = It(
                    Ze.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts),
                  )),
                t.prototype.totalTime.call(this, e, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (t, e) {
            return (this.labels[t] = _e(this, e)), this;
          }),
          (n.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (n.addPause = function (t, e, n) {
            var r = bn.delayedCall(0, e || xt, n);
            return (
              (r.data = "isPause"),
              (this._hasPause = 1),
              ue(this, r, _e(this, t))
            );
          }),
          (n.removePause = function (t) {
            var e = this._first;
            for (t = _e(this, t); e; )
              e._start === t && "isPause" === e.data && Jt(e), (e = e._next);
          }),
          (n.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--; )
              cn !== r[i] && r[i].kill(t, e);
            return this;
          }),
          (n.getTweensOf = function (t, e) {
            for (var n, r = [], i = Te(t), a = this._first, s = tt(e); a; )
              a instanceof bn
                ? qt(a._targets, i) &&
                  (s
                    ? (!cn || (a._initted && a._ts)) &&
                      a.globalTime(0) <= e &&
                      a.globalTime(a.totalDuration()) > e
                    : !e || a.isActive()) &&
                  r.push(a)
                : (n = a.getTweensOf(i, e)).length && r.push.apply(r, n),
                (a = a._next);
            return r;
          }),
          (n.tweenTo = function (t, e) {
            e = e || {};
            var n,
              r = this,
              i = _e(r, t),
              a = e,
              s = a.startAt,
              o = a.onStart,
              u = a.onStartParams,
              l = a.immediateRender,
              c = bn.to(
                r,
                Ht(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (s && "time" in s ? s.time : r._time)) /
                          r.timeScale(),
                      ) ||
                      H,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (s && "time" in s ? s.time : r._time)) /
                              r.timeScale(),
                          );
                        c._dur !== t && fe(c, t, 0, 1).render(c._time, !0, !0),
                          (n = 1);
                      }
                      o && o.apply(c, u || []);
                    },
                  },
                  e,
                ),
              );
            return l ? c.render(0) : c;
          }),
          (n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, Ht({ startAt: { time: _e(this, t) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), De(this, _e(this, t));
          }),
          (n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), De(this, _e(this, t), 1);
          }),
          (n.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + H);
          }),
          (n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, a = this.labels; i; )
              i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (r in a) a[r] >= n && (a[r] += t);
            return Kt(this);
          }),
          (n.invalidate = function (e) {
            var n = this._first;
            for (this._lock = 0; n; ) n.invalidate(e), (n = n._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Kt(this)
            );
          }),
          (n.totalDuration = function (t) {
            var e,
              n,
              r,
              i = 0,
              a = this,
              s = a._last,
              o = $;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                  (a.reversed() ? -t : t),
              );
            if (a._dirty) {
              for (r = a.parent; s; )
                (e = s._prev),
                  s._dirty && s.totalDuration(),
                  (n = s._start) > o && a._sort && s._ts && !a._lock
                    ? ((a._lock = 1), (ue(a, s, n - s._delay, 1)._lock = 0))
                    : (o = n),
                  n < 0 &&
                    s._ts &&
                    ((i -= n),
                    ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                      ((a._start += n / a._ts),
                      (a._time -= n),
                      (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -Infinity),
                    (o = 0)),
                  s._end > i && s._ts && (i = s._end),
                  (s = e);
              fe(a, a === C && a._time > i ? a._time : i, 1, 1), (a._dirty = 0);
            }
            return a._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((C._ts && (Ut(C, ie(t, C)), (D = Ze.frame)), Ze.frame >= Ot)) {
              Ot += U.autoSleep || 120;
              var e = C._first;
              if ((!e || !e._ts) && U.autoSleep && Ze._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || Ze.sleep();
              }
            }
          }),
          e
        );
      })(un);
      Ht(ln.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var cn,
        hn,
        dn = function (t, e, n, r, i, a, s) {
          var o,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            m = new Pn(this._pt, t, e, 0, 1, Cn, null, i),
            _ = 0,
            g = 0;
          for (
            m.b = n,
              m.e = r,
              n += "",
              (f = ~(r += "").indexOf("random(")) && (r = ze(r)),
              a && (a((p = [n, r]), t, e), (n = p[0]), (r = p[1])),
              u = n.match(ht) || [];
            (o = ht.exec(r));

          )
            (c = o[0]),
              (h = r.substring(_, o.index)),
              l ? (l = (l + 1) % 5) : "rgba(" === h.substr(-5) && (l = 1),
              c !== u[g++] &&
                ((d = parseFloat(u[g - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: h || 1 === g ? h : ",",
                  s: d,
                  c: "=" === c.charAt(1) ? Nt(d, c) - d : parseFloat(c) - d,
                  m: l && l < 4 ? Math.round : 0,
                }),
                (_ = ht.lastIndex));
          return (
            (m.c = _ < r.length ? r.substring(_, r.length) : ""),
            (m.fp = s),
            (dt.test(r) || f) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        fn = function (t, e, n, r, i, a, s, o, u, l) {
          K(r) && (r = r(i || 0, t, a));
          var c,
            h = t[e],
            d =
              "get" !== n
                ? n
                : K(h)
                  ? u
                    ? t[
                        e.indexOf("set") || !K(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](u)
                    : t[e]()
                  : h,
            f = K(h) ? (u ? Tn : wn) : xn;
          if (
            (J(r) &&
              (~r.indexOf("random(") && (r = ze(r)),
              "=" === r.charAt(1) &&
                ((c = Nt(d, r) + (be(d) || 0)) || 0 === c) &&
                (r = c)),
            !l || d !== r || hn)
          )
            return isNaN(d * r) || "" === r
              ? (!h && !(e in t) && vt(e, r),
                dn.call(this, t, e, d, r, f, o || U.stringFilter, u))
              : ((c = new Pn(
                  this._pt,
                  t,
                  e,
                  +d || 0,
                  r - (d || 0),
                  "boolean" == typeof h ? En : Mn,
                  0,
                  f,
                )),
                u && (c.fp = u),
                s && c.modifier(s, this, t),
                (this._pt = c));
        },
        pn = function (t, e, n, r, i, a) {
          var s, o, u, l;
          if (
            Ct[t] &&
            !1 !==
              (s = new Ct[t]()).init(
                i,
                s.rawVars
                  ? e[t]
                  : (function (t, e, n, r, i) {
                      if (
                        (K(t) && (t = gn(t, i, e, n, r)),
                        !nt(t) || (t.style && t.nodeType) || ot(t) || st(t))
                      )
                        return J(t) ? gn(t, i, e, n, r) : t;
                      var a,
                        s = {};
                      for (a in t) s[a] = gn(t[a], i, e, n, r);
                      return s;
                    })(e[t], r, i, a, n),
                n,
                r,
                a,
              ) &&
            ((n._pt = o =
              new Pn(n._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
            n !== P)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(i)], l = s._props.length;
              l--;

            )
              u[s._props[l]] = o;
          return s;
        },
        mn = function t(e, n, r) {
          var i,
            a,
            s,
            o,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            m,
            _,
            g = e.vars,
            v = g.ease,
            y = g.startAt,
            b = g.immediateRender,
            x = g.lazy,
            w = g.onUpdate,
            T = g.runBackwards,
            k = g.yoyoEase,
            E = g.keyframes,
            S = g.autoRevert,
            O = e._dur,
            z = e._startAt,
            L = e._targets,
            D = e.parent,
            P = D && "nested" === D.data ? D.vars.targets : L,
            R = "auto" === e._overwrite && !A,
            F = e.timeline;
          if (
            (F && (!E || !v) && (v = "none"),
            (e._ease = en(v, Y.ease)),
            (e._yEase = k ? Ke(en(!0 === k ? v : k, Y.ease)) : 0),
            k &&
              e._yoyo &&
              !e._repeat &&
              ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
            (e._from = !F && !!g.runBackwards),
            !F || (E && !g.stagger))
          ) {
            if (
              ((m = (h = L[0] ? Pt(L[0]).harness : 0) && g[h.prop]),
              (i = Gt(g, At)),
              z &&
                (z._zTime < 0 && z.progress(1),
                n < 0 && T && b && !S
                  ? z.render(-1, !0)
                  : z.revert(T && O ? Tt : wt),
                (z._lazy = 0)),
              y)
            ) {
              if (
                (Jt(
                  (e._startAt = bn.set(
                    L,
                    Ht(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: D,
                        immediateRender: !0,
                        lazy: !z && rt(x),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          w &&
                          function () {
                            return Pe(e, "onUpdate");
                          },
                        stagger: 0,
                      },
                      y,
                    ),
                  )),
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 && (M || (!b && !S)) && e._startAt.revert(Tt),
                b && O && n <= 0 && r <= 0)
              )
                return void (n && (e._zTime = n));
            } else if (T && O && !z)
              if (
                (n && (b = !1),
                (s = Ht(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && !z && rt(x),
                    immediateRender: b,
                    stagger: 0,
                    parent: D,
                  },
                  i,
                )),
                m && (s[h.prop] = m),
                Jt((e._startAt = bn.set(L, s))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 &&
                  (M ? e._startAt.revert(Tt) : e._startAt.render(-1, !0)),
                (e._zTime = n),
                b)
              ) {
                if (!n) return;
              } else t(e._startAt, H, H);
            for (
              e._pt = e._ptCache = 0, x = (O && rt(x)) || (x && !O), a = 0;
              a < L.length;
              a++
            ) {
              if (
                ((c = (u = L[a])._gsap || Dt(L)[a]._gsap),
                (e._ptLookup[a] = f = {}),
                Et[c.id] && Mt.length && jt(),
                (p = P === L ? a : P.indexOf(u)),
                h &&
                  !1 !== (d = new h()).init(u, m || i, e, p, P) &&
                  ((e._pt = o =
                    new Pn(e._pt, u, d.name, 0, 1, d.render, d, 0, d.priority)),
                  d._props.forEach(function (t) {
                    f[t] = o;
                  }),
                  d.priority && (l = 1)),
                !h || m)
              )
                for (s in i)
                  Ct[s] && (d = pn(s, i, e, p, u, P))
                    ? d.priority && (l = 1)
                    : (f[s] = o =
                        fn.call(e, u, s, "get", i[s], p, P, 0, g.stringFilter));
              e._op && e._op[a] && e.kill(u, e._op[a]),
                R &&
                  e._pt &&
                  ((cn = e),
                  C.killTweensOf(u, f, e.globalTime(n)),
                  (_ = !e.parent),
                  (cn = 0)),
                e._pt && x && (Et[c.id] = 1);
            }
            l && Dn(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = w),
            (e._initted = (!e._op || e._pt) && !_),
            E && n <= 0 && F.render($, !0, !0);
        },
        _n = function (t, e, n, r) {
          var i,
            a,
            s = e.ease || r || "power1.inOut";
          if (ot(e))
            (a = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return a.push({ t: (n / (e.length - 1)) * 100, v: t, e: s });
              });
          else
            for (i in e)
              (a = n[i] || (n[i] = [])),
                "ease" === i || a.push({ t: parseFloat(t), v: e[i], e: s });
        },
        gn = function (t, e, n, r, i) {
          return K(t)
            ? t.call(e, n, r, i)
            : J(t) && ~t.indexOf("random(")
              ? ze(t)
              : t;
        },
        vn = Lt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        yn = {};
      Ft(vn + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (yn[t] = 1);
      });
      var bn = (function (t) {
        function e(e, n, r, i) {
          var a;
          "number" == typeof n && ((r.duration = n), (n = r), (r = null));
          var s,
            o,
            u,
            l,
            c,
            h,
            d,
            f,
            p = (a = t.call(this, i ? n : Vt(n)) || this).vars,
            m = p.duration,
            _ = p.delay,
            g = p.immediateRender,
            v = p.stagger,
            y = p.overwrite,
            b = p.keyframes,
            x = p.defaults,
            w = p.scrollTrigger,
            k = p.yoyoEase,
            M = n.parent || C,
            E = (ot(e) || st(e) ? tt(e[0]) : "length" in n) ? [e] : Te(e);
          if (
            ((a._targets = E.length
              ? Dt(E)
              : yt(
                  "GSAP target " + e + " not found. https://gsap.com",
                  !U.nullTargetWarn,
                ) || []),
            (a._ptLookup = []),
            (a._overwrite = y),
            b || v || at(m) || at(_))
          ) {
            if (
              ((n = a.vars),
              (s = a.timeline =
                new ln({
                  data: "nested",
                  defaults: x || {},
                  targets: M && "nested" === M.data ? M.vars.targets : E,
                })).kill(),
              (s.parent = s._dp = T(a)),
              (s._start = 0),
              v || at(m) || at(_))
            ) {
              if (((l = E.length), (d = v && Me(v)), nt(v)))
                for (c in v) ~vn.indexOf(c) && (f || (f = {}), (f[c] = v[c]));
              for (o = 0; o < l; o++)
                ((u = Gt(n, yn)).stagger = 0),
                  k && (u.yoyoEase = k),
                  f && Xt(u, f),
                  (h = E[o]),
                  (u.duration = +gn(m, T(a), o, h, E)),
                  (u.delay = (+gn(_, T(a), o, h, E) || 0) - a._delay),
                  !v &&
                    1 === l &&
                    u.delay &&
                    ((a._delay = _ = u.delay), (a._start += _), (u.delay = 0)),
                  s.to(h, u, d ? d(o, h, E) : 0),
                  (s._ease = Ve.none);
              s.duration() ? (m = _ = 0) : (a.timeline = 0);
            } else if (b) {
              Vt(Ht(s.vars.defaults, { ease: "none" })),
                (s._ease = en(b.ease || n.ease || "none"));
              var S,
                O,
                z,
                L = 0;
              if (ot(b))
                b.forEach(function (t) {
                  return s.to(E, t, ">");
                }),
                  s.duration();
              else {
                for (c in ((u = {}), b))
                  "ease" === c ||
                    "easeEach" === c ||
                    _n(c, b[c], u, b.easeEach);
                for (c in u)
                  for (
                    S = u[c].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      L = 0,
                      o = 0;
                    o < S.length;
                    o++
                  )
                    ((z = {
                      ease: (O = S[o]).e,
                      duration: ((O.t - (o ? S[o - 1].t : 0)) / 100) * m,
                    })[c] = O.v),
                      s.to(E, z, L),
                      (L += z.duration);
                s.duration() < m && s.to({}, { duration: m - s.duration() });
              }
            }
            m || a.duration((m = s.duration()));
          } else a.timeline = 0;
          return (
            !0 !== y || A || ((cn = T(a)), C.killTweensOf(E), (cn = 0)),
            ue(M, T(a), r),
            n.reversed && a.reverse(),
            n.paused && a.paused(!0),
            (g ||
              (!m &&
                !b &&
                a._start === It(M._time) &&
                rt(g) &&
                ee(T(a)) &&
                "nested" !== M.data)) &&
              ((a._tTime = -1e-8), a.render(Math.max(0, -_) || 0)),
            w && le(T(a), w),
            a
          );
        }
        k(e, t);
        var n = e.prototype;
        return (
          (n.render = function (t, e, n) {
            var r,
              i,
              a,
              s,
              o,
              u,
              l,
              c,
              h,
              d = this._time,
              f = this._tDur,
              p = this._dur,
              m = t < 0,
              _ = t > f - H && !m ? f : t < H ? 0 : t;
            if (p) {
              if (
                _ !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((r = _), (c = this.timeline), this._repeat)) {
                  if (((s = p + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * s + t, e, n);
                  if (
                    ((r = It(_ % s)),
                    _ === f
                      ? ((a = this._repeat), (r = p))
                      : ((a = ~~(_ / s)) && a === It(_ / s) && ((r = p), a--),
                        r > p && (r = p)),
                    (u = this._yoyo && 1 & a) &&
                      ((h = this._yEase), (r = p - r)),
                    (o = re(this._tTime, s)),
                    r === d && !n && this._initted && a === o)
                  )
                    return (this._tTime = _), this;
                  a !== o &&
                    (c && this._yEase && tn(c, u),
                    this.vars.repeatRefresh &&
                      !u &&
                      !this._lock &&
                      this._time !== s &&
                      this._initted &&
                      ((this._lock = n = 1),
                      (this.render(It(s * a), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (ce(this, m ? t : r, n, e, _))
                    return (this._tTime = 0), this;
                  if (
                    !(
                      d === this._time ||
                      (n && this.vars.repeatRefresh && a !== o)
                    )
                  )
                    return this;
                  if (p !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = _),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (h || this._ease)(r / p)),
                  this._from && (this.ratio = l = 1 - l),
                  r &&
                    !d &&
                    !e &&
                    !a &&
                    (Pe(this, "onStart"), this._tTime !== _))
                )
                  return this;
                for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
                (c &&
                  c.render(
                    t < 0 ? t : c._dur * c._ease(r / this._dur),
                    e,
                    n,
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && te(this, t, 0, n), Pe(this, "onUpdate")),
                  this._repeat &&
                    a !== o &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    Pe(this, "onRepeat"),
                  (_ !== this._tDur && _) ||
                    this._tTime !== _ ||
                    (m && !this._onUpdate && te(this, t, 0, !0),
                    (t || !p) &&
                      ((_ === this._tDur && this._ts > 0) ||
                        (!_ && this._ts < 0)) &&
                      Jt(this, 1),
                    e ||
                      (m && !d) ||
                      !(_ || d || u) ||
                      (Pe(
                        this,
                        _ === f ? "onComplete" : "onReverseComplete",
                        !0,
                      ),
                      this._prom &&
                        !(_ < f && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, r) {
                var i,
                  a,
                  s,
                  o = t.ratio,
                  u =
                    e < 0 ||
                    (!e &&
                      ((!t._start && he(t) && (t._initted || !de(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !de(t))))
                      ? 0
                      : 1,
                  l = t._rDelay,
                  c = 0;
                if (
                  (l &&
                    t._repeat &&
                    ((c = ye(0, t._tDur, e)),
                    (a = re(c, l)),
                    t._yoyo && 1 & a && (u = 1 - u),
                    a !== re(t._tTime, l) &&
                      ((o = 1 - u),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  u !== o || M || r || t._zTime === H || (!e && t._zTime))
                ) {
                  if (!t._initted && ce(t, e, r, n, c)) return;
                  for (
                    s = t._zTime,
                      t._zTime = e || (n ? H : 0),
                      n || (n = e && !s),
                      t.ratio = u,
                      t._from && (u = 1 - u),
                      t._time = 0,
                      t._tTime = c,
                      i = t._pt;
                    i;

                  )
                    i.r(u, i.d), (i = i._next);
                  e < 0 && te(t, e, 0, !0),
                    t._onUpdate && !n && Pe(t, "onUpdate"),
                    c && t._repeat && !n && t.parent && Pe(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === u &&
                      (u && Jt(t, 1),
                      n ||
                        M ||
                        (Pe(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (n.resetTo = function (t, e, n, r, i) {
            R || Ze.wake(), this._ts || this.play();
            var a = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts,
            );
            return (
              this._initted || mn(this, a),
              (function (t, e, n, r, i, a, s, o) {
                var u,
                  l,
                  c,
                  h,
                  d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!d)
                  for (
                    d = t._ptCache[e] = [],
                      c = t._ptLookup,
                      h = t._targets.length;
                    h--;

                  ) {
                    if ((u = c[h][e]) && u.d && u.d._pt)
                      for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                        u = u._next;
                    if (!u)
                      return (
                        (hn = 1),
                        (t.vars[e] = "+=0"),
                        mn(t, s),
                        (hn = 0),
                        o ? yt(e + " not eligible for reset") : 1
                      );
                    d.push(u);
                  }
                for (h = d.length; h--; )
                  ((u = (l = d[h])._pt || l).s =
                    (!r && 0 !== r) || i ? u.s + (r || 0) + a * u.c : r),
                    (u.c = n - u.s),
                    l.e && (l.e = Bt(n) + be(l.e)),
                    l.b && (l.b = u.s + be(l.b));
              })(this, t, e, n, r, this._ease(a / this._dur), a, i)
                ? this.resetTo(t, e, n, r, 1)
                : (se(this, 0),
                  this.parent ||
                    Wt(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0,
                    ),
                  this.render(0))
            );
          }),
          (n.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? Re(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, cn && !0 !== cn.vars.overwrite)
                  ._first || Re(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  fe(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              a,
              s,
              o,
              u,
              l,
              c = this._targets,
              h = t ? Te(t) : c,
              d = this._ptLookup,
              f = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var n = t.length, r = n === e.length;
                  r && n-- && t[n] === e[n];

                );
                return n < 0;
              })(c, h)
            )
              return "all" === e && (this._pt = 0), Re(this);
            for (
              r = this._op = this._op || [],
                "all" !== e &&
                  (J(e) &&
                    ((o = {}),
                    Ft(e, function (t) {
                      return (o[t] = 1);
                    }),
                    (e = o)),
                  (e = (function (t, e) {
                    var n,
                      r,
                      i,
                      a,
                      s = t[0] ? Pt(t[0]).harness : 0,
                      o = s && s.aliases;
                    if (!o) return e;
                    for (r in ((n = Xt({}, e)), o))
                      if ((r in n))
                        for (i = (a = o[r].split(",")).length; i--; )
                          n[a[i]] = n[r];
                    return n;
                  })(c, e))),
                l = c.length;
              l--;

            )
              if (~h.indexOf(c[l]))
                for (o in ((i = d[l]),
                "all" === e
                  ? ((r[l] = e), (s = i), (a = {}))
                  : ((a = r[l] = r[l] || {}), (s = e)),
                s))
                  (u = i && i[o]) &&
                    (("kill" in u.d && !0 !== u.d.kill(o)) ||
                      Qt(this, u, "_pt"),
                    delete i[o]),
                    "all" !== a && (a[o] = 1);
            return this._initted && !this._pt && f && Re(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, e) {
            return ge(1, arguments);
          }),
          (e.delayedCall = function (t, n, r, i) {
            return new e(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, e, n) {
            return ge(2, arguments);
          }),
          (e.set = function (t, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
            );
          }),
          (e.killTweensOf = function (t, e, n) {
            return C.killTweensOf(t, e, n);
          }),
          e
        );
      })(un);
      Ht(bn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        Ft("staggerTo,staggerFrom,staggerFromTo", function (t) {
          bn[t] = function () {
            var e = new ln(),
              n = xe.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            );
          };
        });
      var xn = function (t, e, n) {
          return (t[e] = n);
        },
        wn = function (t, e, n) {
          return t[e](n);
        },
        Tn = function (t, e, n, r) {
          return t[e](r.fp, n);
        },
        kn = function (t, e, n) {
          return t.setAttribute(e, n);
        },
        An = function (t, e) {
          return K(t[e]) ? wn : et(t[e]) && t.setAttribute ? kn : xn;
        },
        Mn = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        En = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Cn = function (t, e) {
          var n = e._pt,
            r = "";
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                r),
                (n = n._next);
            r += e.c;
          }
          e.set(e.t, e.p, r, e);
        },
        Sn = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        On = function (t, e, n, r) {
          for (var i, a = this._pt; a; )
            (i = a._next), a.p === r && a.modifier(t, e, n), (a = i);
        },
        zn = function (t) {
          for (var e, n, r = this._pt; r; )
            (n = r._next),
              (r.p === t && !r.op) || r.op === t
                ? Qt(this, r, "_pt")
                : r.dep || (e = 1),
              (r = n);
          return !e;
        },
        Ln = function (t, e, n, r) {
          r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
        },
        Dn = function (t) {
          for (var e, n, r, i, a = t._pt; a; ) {
            for (e = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
            (a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a),
              (a._next = n) ? (n._prev = a) : (i = a),
              (a = e);
          }
          t._pt = r;
        },
        Pn = (function () {
          function t(t, e, n, r, i, a, s, o, u) {
            (this.t = e),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = a || Mn),
              (this.d = s || this),
              (this.set = o || xn),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = Ln),
                (this.m = t),
                (this.mt = n),
                (this.tween = e);
            }),
            t
          );
        })();
      Ft(
        Lt +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (At[t] = 1);
        },
      ),
        (mt.TweenMax = mt.TweenLite = bn),
        (mt.TimelineLite = mt.TimelineMax = ln),
        (C = new ln({
          sortChildren: !1,
          defaults: Y,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (U.stringFilter = Xe);
      var Rn = [],
        Fn = {},
        Bn = [],
        In = 0,
        Nn = 0,
        qn = function (t) {
          return (Fn[t] || Bn).map(function (t) {
            return t();
          });
        },
        jn = function () {
          var t = Date.now(),
            e = [];
          t - In > 2 &&
            (qn("matchMediaInit"),
            Rn.forEach(function (t) {
              var n,
                r,
                i,
                a,
                s = t.queries,
                o = t.conditions;
              for (r in s)
                (n = S.matchMedia(s[r]).matches) && (i = 1),
                  n !== o[r] && ((o[r] = n), (a = 1));
              a && (t.revert(), i && e.push(t));
            }),
            qn("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e);
              });
            }),
            (In = t),
            qn("matchMedia"));
        },
        Un = (function () {
          function t(t, e) {
            (this.selector = e && ke(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = Nn++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              K(t) && ((n = e), (e = t), (t = K));
              var r = this,
                i = function () {
                  var t,
                    i = E,
                    a = r.selector;
                  return (
                    i && i !== r && i.data.push(r),
                    n && (r.selector = ke(n)),
                    (E = r),
                    (t = e.apply(r, arguments)),
                    K(t) && r._r.push(t),
                    (E = i),
                    (r.selector = a),
                    (r.isReverted = !1),
                    t
                  );
                };
              return (
                (r.last = i),
                t === K
                  ? i(r, function (t) {
                      return r.add(null, t);
                    })
                  : t
                    ? (r[t] = i)
                    : i
              );
            }),
            (e.ignore = function (t) {
              var e = E;
              (E = null), t(this), (E = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (n) {
                  return n instanceof t
                    ? e.push.apply(e, n.getTweens())
                    : n instanceof bn &&
                        !(n.parent && "nested" === n.parent.data) &&
                        e.push(n);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var n = this;
              if (
                (t
                  ? (function () {
                      for (var e, r = n.getTweens(), i = n.data.length; i--; )
                        "isFlip" === (e = n.data[i]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return r.splice(r.indexOf(t), 1);
                          }));
                      for (
                        r
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t,
                            };
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0;
                          })
                          .forEach(function (e) {
                            return e.t.revert(t);
                          }),
                          i = n.data.length;
                        i--;

                      )
                        (e = n.data[i]) instanceof ln
                          ? "nested" !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : !(e instanceof bn) && e.revert && e.revert(t);
                      n._r.forEach(function (e) {
                        return e(t, n);
                      }),
                        (n.isReverted = !0);
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill();
                    }),
                this.clear(),
                e)
              )
                for (var r = Rn.length; r--; )
                  Rn[r].id === this.id && Rn.splice(r, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        Yn = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t), E && E.data.push(this);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              nt(t) || (t = { matches: t });
              var r,
                i,
                a,
                s = new Un(0, n || this.scope),
                o = (s.conditions = {});
              for (i in (E && !s.selector && (s.selector = E.selector),
              this.contexts.push(s),
              (e = s.add("onMatch", e)),
              (s.queries = t),
              t))
                "all" === i
                  ? (a = 1)
                  : (r = S.matchMedia(t[i])) &&
                    (Rn.indexOf(s) < 0 && Rn.push(s),
                    (o[i] = r.matches) && (a = 1),
                    r.addListener
                      ? r.addListener(jn)
                      : r.addEventListener("change", jn));
              return (
                a &&
                  e(s, function (t) {
                    return s.add(null, t);
                  }),
                this
              );
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        $n = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            e.forEach(function (t) {
              return Be(t);
            });
          },
          timeline: function (t) {
            return new ln(t);
          },
          getTweensOf: function (t, e) {
            return C.getTweensOf(t, e);
          },
          getProperty: function (t, e, n, r) {
            J(t) && (t = Te(t)[0]);
            var i = Pt(t || {}).get,
              a = n ? $t : Yt;
            return (
              "native" === n && (n = ""),
              t
                ? e
                  ? a(((Ct[e] && Ct[e].get) || i)(t, e, n, r))
                  : function (e, n, r) {
                      return a(((Ct[e] && Ct[e].get) || i)(t, e, n, r));
                    }
                : t
            );
          },
          quickSetter: function (t, e, n) {
            if ((t = Te(t)).length > 1) {
              var r = t.map(function (t) {
                  return Zn.quickSetter(t, e, n);
                }),
                i = r.length;
              return function (t) {
                for (var e = i; e--; ) r[e](t);
              };
            }
            t = t[0] || {};
            var a = Ct[e],
              s = Pt(t),
              o = (s.harness && (s.harness.aliases || {})[e]) || e,
              u = a
                ? function (e) {
                    var r = new a();
                    (P._pt = 0),
                      r.init(t, n ? e + n : e, P, 0, [t]),
                      r.render(1, r),
                      P._pt && Sn(1, P);
                  }
                : s.set(t, o);
            return a
              ? u
              : function (e) {
                  return u(t, o, n ? e + n : e, s, 1);
                };
          },
          quickTo: function (t, e, n) {
            var r,
              i = Zn.to(
                t,
                Xt((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {}),
              ),
              a = function (t, n, r) {
                return i.resetTo(e, t, n, r);
              };
            return (a.tween = i), a;
          },
          isTweening: function (t) {
            return C.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = en(t.ease, Y.ease)), Zt(Y, t || {});
          },
          config: function (t) {
            return Zt(U, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              n = t.effect,
              r = t.plugins,
              i = t.defaults,
              a = t.extendTimeline;
            (r || "").split(",").forEach(function (t) {
              return (
                t &&
                !Ct[t] &&
                !mt[t] &&
                yt(e + " effect requires " + t + " plugin.")
              );
            }),
              (St[e] = function (t, e, r) {
                return n(Te(t), Ht(e || {}, i), r);
              }),
              a &&
                (ln.prototype[e] = function (t, n, r) {
                  return this.add(St[e](t, nt(n) ? n : (r = n) && {}, this), r);
                });
          },
          registerEase: function (t, e) {
            Ve[t] = en(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? en(t, e) : Ve;
          },
          getById: function (t) {
            return C.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n,
              r,
              i = new ln(t);
            for (
              i.smoothChildTiming = rt(t.smoothChildTiming),
                C.remove(i),
                i._dp = 0,
                i._time = i._tTime = C._time,
                n = C._first;
              n;

            )
              (r = n._next),
                (!e &&
                  !n._dur &&
                  n instanceof bn &&
                  n.vars.onComplete === n._targets[0]) ||
                  ue(i, n, n._start - n._delay),
                (n = r);
            return ue(C, i, 0), i;
          },
          context: function (t, e) {
            return t ? new Un(t, e) : E;
          },
          matchMedia: function (t) {
            return new Yn(t);
          },
          matchMediaRefresh: function () {
            return (
              Rn.forEach(function (t) {
                var e,
                  n,
                  r = t.conditions;
                for (n in r) r[n] && ((r[n] = !1), (e = 1));
                e && t.revert();
              }) || jn()
            );
          },
          addEventListener: function (t, e) {
            var n = Fn[t] || (Fn[t] = []);
            ~n.indexOf(e) || n.push(e);
          },
          removeEventListener: function (t, e) {
            var n = Fn[t],
              r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          },
          utils: {
            wrap: function t(e, n, r) {
              var i = n - e;
              return ot(e)
                ? Oe(e, t(0, e.length), n)
                : ve(r, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, n, r) {
              var i = n - e,
                a = 2 * i;
              return ot(e)
                ? Oe(e, t(0, e.length - 1), n)
                : ve(r, function (t) {
                    return (
                      e + ((t = (a + ((t - e) % a)) % a || 0) > i ? a - t : t)
                    );
                  });
            },
            distribute: Me,
            random: Se,
            snap: Ce,
            normalize: function (t, e, n) {
              return Le(t, e, 0, 1, n);
            },
            getUnit: be,
            clamp: function (t, e, n) {
              return ve(n, function (n) {
                return ye(t, e, n);
              });
            },
            splitColor: je,
            toArray: Te,
            selector: ke,
            mapRange: Le,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (n) {
                return t(parseFloat(n)) + (e || be(n));
              };
            },
            interpolate: function t(e, n, r, i) {
              var a = isNaN(e + n)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * n;
                  };
              if (!a) {
                var s,
                  o,
                  u,
                  l,
                  c,
                  h = J(e),
                  d = {};
                if ((!0 === r && (i = 1) && (r = null), h))
                  (e = { p: e }), (n = { p: n });
                else if (ot(e) && !ot(n)) {
                  for (u = [], l = e.length, c = l - 2, o = 1; o < l; o++)
                    u.push(t(e[o - 1], e[o]));
                  l--,
                    (a = function (t) {
                      t *= l;
                      var e = Math.min(c, ~~t);
                      return u[e](t - e);
                    }),
                    (r = n);
                } else i || (e = Xt(ot(e) ? [] : {}, e));
                if (!u) {
                  for (s in n) fn.call(d, e, s, "get", n[s]);
                  a = function (t) {
                    return Sn(t, d) || (h ? e.p : e);
                  };
                }
              }
              return ve(r, a);
            },
            shuffle: Ae,
          },
          install: gt,
          effects: St,
          ticker: Ze,
          updateRoot: ln.updateRoot,
          plugins: Ct,
          globalTimeline: C,
          core: {
            PropTween: Pn,
            globals: bt,
            Tween: bn,
            Timeline: ln,
            Animation: un,
            getCache: Pt,
            _removeLinkedListItem: Qt,
            reverting: function () {
              return M;
            },
            context: function (t) {
              return t && E && (E.data.push(t), (t._ctx = E)), E;
            },
            suppressOverwrites: function (t) {
              return (A = t);
            },
          },
        };
      Ft("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return ($n[t] = bn[t]);
      }),
        Ze.add(ln.updateRoot),
        (P = $n.to({}, { duration: 0 }));
      var Hn = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
          return n;
        },
        Xn = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, r) {
              r._onInit = function (t) {
                var r, i;
                if (
                  (J(n) &&
                    ((r = {}),
                    Ft(n, function (t) {
                      return (r[t] = 1);
                    }),
                    (n = r)),
                  e)
                ) {
                  for (i in ((r = {}), n)) r[i] = e(n[i]);
                  n = r;
                }
                !(function (t, e) {
                  var n,
                    r,
                    i,
                    a = t._targets;
                  for (n in e)
                    for (r = a.length; r--; )
                      (i = t._ptLookup[r][n]) &&
                        (i = i.d) &&
                        (i._pt && (i = Hn(i, n)),
                        i && i.modifier && i.modifier(e[n], t, a[r], n));
                })(t, n);
              };
            },
          };
        },
        Zn =
          $n.registerPlugin(
            {
              name: "attr",
              init: function (t, e, n, r, i) {
                var a, s, o;
                for (a in ((this.tween = n), e))
                  (o = t.getAttribute(a) || ""),
                    ((s = this.add(
                      t,
                      "setAttribute",
                      (o || 0) + "",
                      e[a],
                      r,
                      i,
                      0,
                      0,
                      a,
                    )).op = a),
                    (s.b = o),
                    this._props.push(a);
              },
              render: function (t, e) {
                for (var n = e._pt; n; )
                  M ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var n = e.length; n--; )
                  this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
              },
            },
            Xn("roundProps", Ee),
            Xn("modifiers"),
            Xn("snap", Ce),
          ) || $n;
      (bn.version = ln.version = Zn.version = "3.12.5"),
        (L = 1),
        it() && Ge(),
        Ve.Power0,
        Ve.Power1,
        Ve.Power2,
        Ve.Power3,
        Ve.Power4,
        Ve.Linear,
        Ve.Quad,
        Ve.Cubic,
        Ve.Quart,
        Ve.Quint,
        Ve.Strong,
        Ve.Elastic,
        Ve.Back,
        Ve.SteppedEase,
        Ve.Bounce,
        Ve.Sine,
        Ve.Expo,
        Ve.Circ;
      var Gn,
        Vn,
        Wn,
        Qn,
        Jn,
        Kn,
        tr,
        er,
        nr = {},
        rr = 180 / Math.PI,
        ir = Math.PI / 180,
        ar = Math.atan2,
        sr = /([A-Z])/g,
        or = /(left|right|width|margin|padding|x)/i,
        ur = /[\s,\(]\S/,
        lr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        cr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e,
          );
        },
        hr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e,
          );
        },
        dr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e,
          );
        },
        fr = function (t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        pr = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        mr = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        _r = function (t, e, n) {
          return (t.style[e] = n);
        },
        gr = function (t, e, n) {
          return t.style.setProperty(e, n);
        },
        vr = function (t, e, n) {
          return (t._gsap[e] = n);
        },
        yr = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        br = function (t, e, n, r, i) {
          var a = t._gsap;
          (a.scaleX = a.scaleY = n), a.renderTransform(i, a);
        },
        xr = function (t, e, n, r, i) {
          var a = t._gsap;
          (a[e] = n), a.renderTransform(i, a);
        },
        wr = "transform",
        Tr = wr + "Origin",
        kr = function t(e, n) {
          var r = this,
            i = this.target,
            a = i.style,
            s = i._gsap;
          if (e in nr && a) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return lr.transform.split(",").forEach(function (e) {
                return t.call(r, e, n);
              });
            if (
              (~(e = lr[e] || e).indexOf(",")
                ? e.split(",").forEach(function (t) {
                    return (r.tfm[t] = Ur(i, t));
                  })
                : (this.tfm[e] = s.x ? s[e] : Ur(i, e)),
              e === Tr && (this.tfm.zOrigin = s.zOrigin),
              this.props.indexOf(wr) >= 0)
            )
              return;
            s.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(Tr, n, "")),
              (e = wr);
          }
          (a || n) && this.props.push(e, n, a[e]);
        },
        Ar = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        Mr = function () {
          var t,
            e,
            n = this.props,
            r = this.target,
            i = r.style,
            a = r._gsap;
          for (t = 0; t < n.length; t += 3)
            n[t + 1]
              ? (r[n[t]] = n[t + 2])
              : n[t + 2]
                ? (i[n[t]] = n[t + 2])
                : i.removeProperty(
                    "--" === n[t].substr(0, 2)
                      ? n[t]
                      : n[t].replace(sr, "-$1").toLowerCase(),
                  );
          if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg &&
              (a.renderTransform(),
              r.setAttribute("data-svg-origin", this.svgo || "")),
              ((t = tr()) && t.isStart) ||
                i[wr] ||
                (Ar(i),
                a.zOrigin &&
                  i[Tr] &&
                  ((i[Tr] += " " + a.zOrigin + "px"),
                  (a.zOrigin = 0),
                  a.renderTransform()),
                (a.uncache = 1));
          }
        },
        Er = function (t, e) {
          var n = { target: t, props: [], revert: Mr, save: kr };
          return (
            t._gsap || Zn.core.getCache(t),
            e &&
              e.split(",").forEach(function (t) {
                return n.save(t);
              }),
            n
          );
        },
        Cr = function (t, e) {
          var n = Vn.createElementNS
            ? Vn.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t,
              )
            : Vn.createElement(t);
          return n && n.style ? n : Vn.createElement(t);
        },
        Sr = function t(e, n, r) {
          var i = getComputedStyle(e);
          return (
            i[n] ||
            i.getPropertyValue(n.replace(sr, "-$1").toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && t(e, zr(n) || n, 1)) ||
            ""
          );
        },
        Or = "O,Moz,ms,Ms,Webkit".split(","),
        zr = function (t, e, n) {
          var r = (e || Jn).style,
            i = 5;
          if (t in r && !n) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(Or[i] + t in r);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Or[i] : "") + t;
        },
        Lr = function () {
          "undefined" != typeof window &&
            window.document &&
            ((Gn = window),
            (Vn = Gn.document),
            (Wn = Vn.documentElement),
            (Jn = Cr("div") || { style: {} }),
            Cr("div"),
            (wr = zr(wr)),
            (Tr = wr + "Origin"),
            (Jn.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (er = !!zr("perspective")),
            (tr = Zn.core.reverting),
            (Qn = 1));
        },
        Dr = function t(e) {
          var n,
            r = Cr(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg",
            ),
            i = this.parentNode,
            a = this.nextSibling,
            s = this.style.cssText;
          if (
            (Wn.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            i && (a ? i.insertBefore(this, a) : i.appendChild(this)),
            Wn.removeChild(r),
            (this.style.cssText = s),
            n
          );
        },
        Pr = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        Rr = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (n) {
            e = Dr.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === Dr ||
              (e = Dr.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +Pr(t, ["x", "cx", "x1"]) || 0,
                  y: +Pr(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Fr = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Rr(t));
        },
        Br = function (t, e) {
          if (e) {
            var n,
              r = t.style;
            e in nr && e !== Tr && (e = wr),
              r.removeProperty
                ? (("ms" !== (n = e.substr(0, 2)) &&
                    "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(
                    "--" === n ? e : e.replace(sr, "-$1").toLowerCase(),
                  ))
                : r.removeAttribute(e);
          }
        },
        Ir = function (t, e, n, r, i, a) {
          var s = new Pn(t._pt, e, n, 0, 1, a ? mr : pr);
          return (t._pt = s), (s.b = r), (s.e = i), t._props.push(n), s;
        },
        Nr = { deg: 1, rad: 1, turn: 1 },
        qr = { grid: 1, flex: 1 },
        jr = function t(e, n, r, i) {
          var a,
            s,
            o,
            u,
            l = parseFloat(r) || 0,
            c = (r + "").trim().substr((l + "").length) || "px",
            h = Jn.style,
            d = or.test(n),
            f = "svg" === e.tagName.toLowerCase(),
            p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
            m = 100,
            _ = "px" === i,
            g = "%" === i;
          if (i === c || !l || Nr[i] || Nr[c]) return l;
          if (
            ("px" !== c && !_ && (l = t(e, n, r, "px")),
            (u = e.getCTM && Fr(e)),
            (g || "%" === c) && (nr[n] || ~n.indexOf("adius")))
          )
            return (
              (a = u ? e.getBBox()[d ? "width" : "height"] : e[p]),
              Bt(g ? (l / a) * m : (l / 100) * a)
            );
          if (
            ((h[d ? "width" : "height"] = m + (_ ? c : i)),
            (s =
              ~n.indexOf("adius") || ("em" === i && e.appendChild && !f)
                ? e
                : e.parentNode),
            u && (s = (e.ownerSVGElement || {}).parentNode),
            (s && s !== Vn && s.appendChild) || (s = Vn.body),
            (o = s._gsap) &&
              g &&
              o.width &&
              d &&
              o.time === Ze.time &&
              !o.uncache)
          )
            return Bt((l / o.width) * m);
          if (!g || ("height" !== n && "width" !== n))
            (g || "%" === c) &&
              !qr[Sr(s, "display")] &&
              (h.position = Sr(e, "position")),
              s === e && (h.position = "static"),
              s.appendChild(Jn),
              (a = Jn[p]),
              s.removeChild(Jn),
              (h.position = "absolute");
          else {
            var v = e.style[n];
            (e.style[n] = m + i), (a = e[p]), v ? (e.style[n] = v) : Br(e, n);
          }
          return (
            d && g && (((o = Pt(s)).time = Ze.time), (o.width = s[p])),
            Bt(_ ? (a * l) / m : a && l ? (m / a) * l : 0)
          );
        },
        Ur = function (t, e, n, r) {
          var i;
          return (
            Qn || Lr(),
            e in lr &&
              "transform" !== e &&
              ~(e = lr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            nr[e] && "transform" !== e
              ? ((i = Kr(t, r)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                      ? i.origin
                      : ti(Sr(t, Tr)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  r ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (Xr[e] && Xr[e](t, e, n)) ||
                  Sr(t, e) ||
                  Rt(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? jr(t, e, i, n) + n : i
          );
        },
        Yr = function (t, e, n, r) {
          if (!n || "none" === n) {
            var i = zr(e, t, 1),
              a = i && Sr(t, i, 1);
            a && a !== n
              ? ((e = i), (n = a))
              : "borderColor" === e && (n = Sr(t, "borderTopColor"));
          }
          var s,
            o,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            m,
            _,
            g = new Pn(this._pt, t.style, e, 0, 1, Cn),
            v = 0,
            y = 0;
          if (
            ((g.b = n),
            (g.e = r),
            (n += ""),
            "auto" == (r += "") &&
              ((h = t.style[e]),
              (t.style[e] = r),
              (r = Sr(t, e) || r),
              h ? (t.style[e] = h) : Br(t, e)),
            Xe((s = [n, r])),
            (r = s[1]),
            (u = (n = s[0]).match(ct) || []),
            (r.match(ct) || []).length)
          ) {
            for (; (o = ct.exec(r)); )
              (d = o[0]),
                (p = r.substring(v, o.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                    (c = 1),
                d !== (h = u[y++] || "") &&
                  ((l = parseFloat(h) || 0),
                  (_ = h.substr((l + "").length)),
                  "=" === d.charAt(1) && (d = Nt(l, d) + _),
                  (f = parseFloat(d)),
                  (m = d.substr((f + "").length)),
                  (v = ct.lastIndex - m.length),
                  m ||
                    ((m = m || U.units[e] || _),
                    v === r.length && ((r += m), (g.e += m))),
                  _ !== m && (l = jr(t, e, h, m) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: p || 1 === y ? p : ",",
                    s: l,
                    c: f - l,
                    m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            g.c = v < r.length ? r.substring(v, r.length) : "";
          } else g.r = "display" === e && "none" === r ? mr : pr;
          return dt.test(r) && (g.e = 0), (this._pt = g), g;
        },
        $r = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        Hr = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              r,
              i,
              a = e.t,
              s = a.style,
              o = e.u,
              u = a._gsap;
            if ("all" === o || !0 === o) (s.cssText = ""), (r = 1);
            else
              for (i = (o = o.split(",")).length; --i > -1; )
                (n = o[i]),
                  nr[n] && ((r = 1), (n = "transformOrigin" === n ? Tr : wr)),
                  Br(a, n);
            r &&
              (Br(a, wr),
              u &&
                (u.svg && a.removeAttribute("transform"),
                Kr(a, 1),
                (u.uncache = 1),
                Ar(s)));
          }
        },
        Xr = {
          clearProps: function (t, e, n, r, i) {
            if ("isFromStart" !== i.data) {
              var a = (t._pt = new Pn(t._pt, e, n, 0, 0, Hr));
              return (
                (a.u = r), (a.pr = -10), (a.tween = i), t._props.push(n), 1
              );
            }
          },
        },
        Zr = [1, 0, 0, 1, 0, 0],
        Gr = {},
        Vr = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        Wr = function (t) {
          var e = Sr(t, wr);
          return Vr(e) ? Zr : e.substr(7).match(lt).map(Bt);
        },
        Qr = function (t, e) {
          var n,
            r,
            i,
            a,
            s = t._gsap || Pt(t),
            o = t.style,
            u = Wr(t);
          return s.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? Zr
              : u
            : (u !== Zr ||
                t.offsetParent ||
                t === Wn ||
                s.svg ||
                ((i = o.display),
                (o.display = "block"),
                ((n = t.parentNode) && t.offsetParent) ||
                  ((a = 1), (r = t.nextElementSibling), Wn.appendChild(t)),
                (u = Wr(t)),
                i ? (o.display = i) : Br(t, "display"),
                a &&
                  (r
                    ? n.insertBefore(t, r)
                    : n
                      ? n.appendChild(t)
                      : Wn.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        Jr = function (t, e, n, r, i, a) {
          var s,
            o,
            u,
            l = t._gsap,
            c = i || Qr(t, !0),
            h = l.xOrigin || 0,
            d = l.yOrigin || 0,
            f = l.xOffset || 0,
            p = l.yOffset || 0,
            m = c[0],
            _ = c[1],
            g = c[2],
            v = c[3],
            y = c[4],
            b = c[5],
            x = e.split(" "),
            w = parseFloat(x[0]) || 0,
            T = parseFloat(x[1]) || 0;
          n
            ? c !== Zr &&
              (o = m * v - _ * g) &&
              ((u = w * (-_ / o) + T * (m / o) - (m * b - _ * y) / o),
              (w = w * (v / o) + T * (-g / o) + (g * b - v * y) / o),
              (T = u))
            : ((w =
                (s = Rr(t)).x + (~x[0].indexOf("%") ? (w / 100) * s.width : w)),
              (T =
                s.y +
                (~(x[1] || x[0]).indexOf("%") ? (T / 100) * s.height : T))),
            r || (!1 !== r && l.smooth)
              ? ((y = w - h),
                (b = T - d),
                (l.xOffset = f + (y * m + b * g) - y),
                (l.yOffset = p + (y * _ + b * v) - b))
              : (l.xOffset = l.yOffset = 0),
            (l.xOrigin = w),
            (l.yOrigin = T),
            (l.smooth = !!r),
            (l.origin = e),
            (l.originIsAbsolute = !!n),
            (t.style[Tr] = "0px 0px"),
            a &&
              (Ir(a, l, "xOrigin", h, w),
              Ir(a, l, "yOrigin", d, T),
              Ir(a, l, "xOffset", f, l.xOffset),
              Ir(a, l, "yOffset", p, l.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + T);
        },
        Kr = function (t, e) {
          var n = t._gsap || new on(t);
          if ("x" in n && !e && !n.uncache) return n;
          var r,
            i,
            a,
            s,
            o,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            m,
            _,
            g,
            v,
            y,
            b,
            x,
            w,
            T,
            k,
            A,
            M,
            E,
            C,
            S,
            O,
            z,
            L,
            D,
            P,
            R = t.style,
            F = n.scaleX < 0,
            B = "px",
            I = "deg",
            N = getComputedStyle(t),
            q = Sr(t, Tr) || "0";
          return (
            (r = i = a = u = l = c = h = d = f = 0),
            (s = o = 1),
            (n.svg = !(!t.getCTM || !Fr(t))),
            N.translate &&
              (("none" === N.translate &&
                "none" === N.scale &&
                "none" === N.rotate) ||
                (R[wr] =
                  ("none" !== N.translate
                    ? "translate3d(" +
                      (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") +
                  ("none" !== N.scale
                    ? "scale(" + N.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== N[wr] ? N[wr] : "")),
              (R.scale = R.rotate = R.translate = "none")),
            (_ = Qr(t, n.svg)),
            n.svg &&
              (n.uncache
                ? ((E = t.getBBox()),
                  (q = n.xOrigin - E.x + "px " + (n.yOrigin - E.y) + "px"),
                  (M = ""))
                : (M = !e && t.getAttribute("data-svg-origin")),
              Jr(t, M || q, !!M || n.originIsAbsolute, !1 !== n.smooth, _)),
            (p = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            _ !== Zr &&
              ((b = _[0]),
              (x = _[1]),
              (w = _[2]),
              (T = _[3]),
              (r = k = _[4]),
              (i = A = _[5]),
              6 === _.length
                ? ((s = Math.sqrt(b * b + x * x)),
                  (o = Math.sqrt(T * T + w * w)),
                  (u = b || x ? ar(x, b) * rr : 0),
                  (h = w || T ? ar(w, T) * rr + u : 0) &&
                    (o *= Math.abs(Math.cos(h * ir))),
                  n.svg &&
                    ((r -= p - (p * b + m * w)), (i -= m - (p * x + m * T))))
                : ((P = _[6]),
                  (L = _[7]),
                  (S = _[8]),
                  (O = _[9]),
                  (z = _[10]),
                  (D = _[11]),
                  (r = _[12]),
                  (i = _[13]),
                  (a = _[14]),
                  (l = (g = ar(P, z)) * rr),
                  g &&
                    ((M = k * (v = Math.cos(-g)) + S * (y = Math.sin(-g))),
                    (E = A * v + O * y),
                    (C = P * v + z * y),
                    (S = k * -y + S * v),
                    (O = A * -y + O * v),
                    (z = P * -y + z * v),
                    (D = L * -y + D * v),
                    (k = M),
                    (A = E),
                    (P = C)),
                  (c = (g = ar(-w, z)) * rr),
                  g &&
                    ((v = Math.cos(-g)),
                    (D = T * (y = Math.sin(-g)) + D * v),
                    (b = M = b * v - S * y),
                    (x = E = x * v - O * y),
                    (w = C = w * v - z * y)),
                  (u = (g = ar(x, b)) * rr),
                  g &&
                    ((M = b * (v = Math.cos(g)) + x * (y = Math.sin(g))),
                    (E = k * v + A * y),
                    (x = x * v - b * y),
                    (A = A * v - k * y),
                    (b = M),
                    (k = E)),
                  l &&
                    Math.abs(l) + Math.abs(u) > 359.9 &&
                    ((l = u = 0), (c = 180 - c)),
                  (s = Bt(Math.sqrt(b * b + x * x + w * w))),
                  (o = Bt(Math.sqrt(A * A + P * P))),
                  (g = ar(k, A)),
                  (h = Math.abs(g) > 2e-4 ? g * rr : 0),
                  (f = D ? 1 / (D < 0 ? -D : D) : 0)),
              n.svg &&
                ((M = t.getAttribute("transform")),
                (n.forceCSS =
                  t.setAttribute("transform", "") || !Vr(Sr(t, wr))),
                M && t.setAttribute("transform", M))),
            Math.abs(h) > 90 &&
              Math.abs(h) < 270 &&
              (F
                ? ((s *= -1),
                  (h += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((o *= -1), (h += h <= 0 ? 180 : -180))),
            (e = e || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!e && n.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              B),
            (n.y =
              i -
              ((n.yPercent =
                i &&
                ((!e && n.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              B),
            (n.z = a + B),
            (n.scaleX = Bt(s)),
            (n.scaleY = Bt(o)),
            (n.rotation = Bt(u) + I),
            (n.rotationX = Bt(l) + I),
            (n.rotationY = Bt(c) + I),
            (n.skewX = h + I),
            (n.skewY = d + I),
            (n.transformPerspective = f + B),
            (n.zOrigin =
              parseFloat(q.split(" ")[2]) || (!e && n.zOrigin) || 0) &&
              (R[Tr] = ti(q)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = U.force3D),
            (n.renderTransform = n.svg ? oi : er ? si : ni),
            (n.uncache = 0),
            n
          );
        },
        ti = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        ei = function (t, e, n) {
          var r = be(e);
          return Bt(parseFloat(e) + parseFloat(jr(t, "x", n + "px", r))) + r;
        },
        ni = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            si(t, e);
        },
        ri = "0deg",
        ii = "0px",
        ai = ") ",
        si = function (t, e) {
          var n = e || this,
            r = n.xPercent,
            i = n.yPercent,
            a = n.x,
            s = n.y,
            o = n.z,
            u = n.rotation,
            l = n.rotationY,
            c = n.rotationX,
            h = n.skewX,
            d = n.skewY,
            f = n.scaleX,
            p = n.scaleY,
            m = n.transformPerspective,
            _ = n.force3D,
            g = n.target,
            v = n.zOrigin,
            y = "",
            b = ("auto" === _ && t && 1 !== t) || !0 === _;
          if (v && (c !== ri || l !== ri)) {
            var x,
              w = parseFloat(l) * ir,
              T = Math.sin(w),
              k = Math.cos(w);
            (w = parseFloat(c) * ir),
              (x = Math.cos(w)),
              (a = ei(g, a, T * x * -v)),
              (s = ei(g, s, -Math.sin(w) * -v)),
              (o = ei(g, o, k * x * -v + v));
          }
          m !== ii && (y += "perspective(" + m + ai),
            (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
            (b || a !== ii || s !== ii || o !== ii) &&
              (y +=
                o !== ii || b
                  ? "translate3d(" + a + ", " + s + ", " + o + ") "
                  : "translate(" + a + ", " + s + ai),
            u !== ri && (y += "rotate(" + u + ai),
            l !== ri && (y += "rotateY(" + l + ai),
            c !== ri && (y += "rotateX(" + c + ai),
            (h === ri && d === ri) || (y += "skew(" + h + ", " + d + ai),
            (1 === f && 1 === p) || (y += "scale(" + f + ", " + p + ai),
            (g.style[wr] = y || "translate(0, 0)");
        },
        oi = function (t, e) {
          var n,
            r,
            i,
            a,
            s,
            o = e || this,
            u = o.xPercent,
            l = o.yPercent,
            c = o.x,
            h = o.y,
            d = o.rotation,
            f = o.skewX,
            p = o.skewY,
            m = o.scaleX,
            _ = o.scaleY,
            g = o.target,
            v = o.xOrigin,
            y = o.yOrigin,
            b = o.xOffset,
            x = o.yOffset,
            w = o.forceCSS,
            T = parseFloat(c),
            k = parseFloat(h);
          (d = parseFloat(d)),
            (f = parseFloat(f)),
            (p = parseFloat(p)) && ((f += p = parseFloat(p)), (d += p)),
            d || f
              ? ((d *= ir),
                (f *= ir),
                (n = Math.cos(d) * m),
                (r = Math.sin(d) * m),
                (i = Math.sin(d - f) * -_),
                (a = Math.cos(d - f) * _),
                f &&
                  ((p *= ir),
                  (s = Math.tan(f - p)),
                  (i *= s = Math.sqrt(1 + s * s)),
                  (a *= s),
                  p &&
                    ((s = Math.tan(p)),
                    (n *= s = Math.sqrt(1 + s * s)),
                    (r *= s))),
                (n = Bt(n)),
                (r = Bt(r)),
                (i = Bt(i)),
                (a = Bt(a)))
              : ((n = m), (a = _), (r = i = 0)),
            ((T && !~(c + "").indexOf("px")) ||
              (k && !~(h + "").indexOf("px"))) &&
              ((T = jr(g, "x", c, "px")), (k = jr(g, "y", h, "px"))),
            (v || y || b || x) &&
              ((T = Bt(T + v - (v * n + y * i) + b)),
              (k = Bt(k + y - (v * r + y * a) + x))),
            (u || l) &&
              ((s = g.getBBox()),
              (T = Bt(T + (u / 100) * s.width)),
              (k = Bt(k + (l / 100) * s.height))),
            (s =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              i +
              "," +
              a +
              "," +
              T +
              "," +
              k +
              ")"),
            g.setAttribute("transform", s),
            w && (g.style[wr] = s);
        },
        ui = function (t, e, n, r, i) {
          var a,
            s,
            o = 360,
            u = J(i),
            l = parseFloat(i) * (u && ~i.indexOf("rad") ? rr : 1) - r,
            c = r + l + "deg";
          return (
            u &&
              ("short" === (a = i.split("_")[1]) &&
                (l %= o) != l % 180 &&
                (l += l < 0 ? o : -360),
              "cw" === a && l < 0
                ? (l = ((l + 36e9) % o) - ~~(l / o) * o)
                : "ccw" === a &&
                  l > 0 &&
                  (l = ((l - 36e9) % o) - ~~(l / o) * o)),
            (t._pt = s = new Pn(t._pt, e, n, r, l, hr)),
            (s.e = c),
            (s.u = "deg"),
            t._props.push(n),
            s
          );
        },
        li = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        ci = function (t, e, n) {
          var r,
            i,
            a,
            s,
            o,
            u,
            l,
            c = li({}, n._gsap),
            h = n.style;
          for (i in (c.svg
            ? ((a = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (h[wr] = e),
              (r = Kr(n, 1)),
              Br(n, wr),
              n.setAttribute("transform", a))
            : ((a = getComputedStyle(n)[wr]),
              (h[wr] = e),
              (r = Kr(n, 1)),
              (h[wr] = a)),
          nr))
            (a = c[i]) !== (s = r[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((o = be(a) !== (l = be(s)) ? jr(n, i, a, l) : parseFloat(a)),
              (u = parseFloat(s)),
              (t._pt = new Pn(t._pt, r, i, o, u - o, cr)),
              (t._pt.u = l || 0),
              t._props.push(i));
          li(r, c);
        };
      Ft("padding,margin,Width,Radius", function (t, e) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          a = "Left",
          s = (e < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(
            function (n) {
              return e < 2 ? t + n : "border" + n + t;
            },
          );
        Xr[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
          var a, o;
          if (arguments.length < 4)
            return (
              (a = s.map(function (e) {
                return Ur(t, e, n);
              })),
              5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o
            );
          (a = (r + "").split(" ")),
            (o = {}),
            s.forEach(function (t, e) {
              return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
            }),
            t.init(e, o, i);
        };
      });
      var hi,
        di,
        fi = {
          name: "css",
          register: Lr,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, r, i) {
            var a,
              s,
              o,
              u,
              l,
              c,
              h,
              d,
              f,
              p,
              m,
              _,
              g,
              v,
              y,
              b,
              x,
              w,
              T,
              k,
              A = this._props,
              M = t.style,
              E = n.vars.startAt;
            for (h in (Qn || Lr(),
            (this.styles = this.styles || Er(t)),
            (b = this.styles.props),
            (this.tween = n),
            e))
              if (
                "autoRound" !== h &&
                ((s = e[h]), !Ct[h] || !pn(h, e, n, r, t, i))
              )
                if (
                  ((l = typeof s),
                  (c = Xr[h]),
                  "function" === l && (l = typeof (s = s.call(n, r, t, i))),
                  "string" === l && ~s.indexOf("random(") && (s = ze(s)),
                  c)
                )
                  c(this, t, h, s, n) && (y = 1);
                else if ("--" === h.substr(0, 2))
                  (a = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                    (s += ""),
                    ($e.lastIndex = 0),
                    $e.test(a) || ((d = be(a)), (f = be(s))),
                    f ? d !== f && (a = jr(t, h, a, f) + f) : d && (s += d),
                    this.add(M, "setProperty", a, s, r, i, 0, 0, h),
                    A.push(h),
                    b.push(h, 0, M[h]);
                else if ("undefined" !== l) {
                  if (
                    (E && h in E
                      ? ((a =
                          "function" == typeof E[h]
                            ? E[h].call(n, r, t, i)
                            : E[h]),
                        J(a) && ~a.indexOf("random(") && (a = ze(a)),
                        be(a + "") ||
                          "auto" === a ||
                          (a += U.units[h] || be(Ur(t, h)) || ""),
                        "=" === (a + "").charAt(1) && (a = Ur(t, h)))
                      : (a = Ur(t, h)),
                    (u = parseFloat(a)),
                    (p =
                      "string" === l &&
                      "=" === s.charAt(1) &&
                      s.substr(0, 2)) && (s = s.substr(2)),
                    (o = parseFloat(s)),
                    h in lr &&
                      ("autoAlpha" === h &&
                        (1 === u &&
                          "hidden" === Ur(t, "visibility") &&
                          o &&
                          (u = 0),
                        b.push("visibility", 0, M.visibility),
                        Ir(
                          this,
                          M,
                          "visibility",
                          u ? "inherit" : "hidden",
                          o ? "inherit" : "hidden",
                          !o,
                        )),
                      "scale" !== h &&
                        "transform" !== h &&
                        ~(h = lr[h]).indexOf(",") &&
                        (h = h.split(",")[0])),
                    (m = h in nr))
                  )
                    if (
                      (this.styles.save(h),
                      _ ||
                        (((g = t._gsap).renderTransform && !e.parseTransform) ||
                          Kr(t, e.parseTransform),
                        (v = !1 !== e.smoothOrigin && g.smooth),
                        ((_ = this._pt =
                          new Pn(
                            this._pt,
                            M,
                            wr,
                            0,
                            1,
                            g.renderTransform,
                            g,
                            0,
                            -1,
                          )).dep = 1)),
                      "scale" === h)
                    )
                      (this._pt = new Pn(
                        this._pt,
                        g,
                        "scaleY",
                        g.scaleY,
                        (p ? Nt(g.scaleY, p + o) : o) - g.scaleY || 0,
                        cr,
                      )),
                        (this._pt.u = 0),
                        A.push("scaleY", h),
                        (h += "X");
                    else {
                      if ("transformOrigin" === h) {
                        b.push(Tr, 0, M[Tr]),
                          (w = void 0),
                          (T = void 0),
                          (k = void 0),
                          (T = (w = (x = s).split(" "))[0]),
                          (k = w[1] || "50%"),
                          ("top" !== T &&
                            "bottom" !== T &&
                            "left" !== k &&
                            "right" !== k) ||
                            ((x = T), (T = k), (k = x)),
                          (w[0] = $r[T] || T),
                          (w[1] = $r[k] || k),
                          (s = w.join(" ")),
                          g.svg
                            ? Jr(t, s, 0, v, 0, this)
                            : ((f = parseFloat(s.split(" ")[2]) || 0) !==
                                g.zOrigin &&
                                Ir(this, g, "zOrigin", g.zOrigin, f),
                              Ir(this, M, h, ti(a), ti(s)));
                        continue;
                      }
                      if ("svgOrigin" === h) {
                        Jr(t, s, 1, v, 0, this);
                        continue;
                      }
                      if (h in Gr) {
                        ui(this, g, h, u, p ? Nt(u, p + s) : s);
                        continue;
                      }
                      if ("smoothOrigin" === h) {
                        Ir(this, g, "smooth", g.smooth, s);
                        continue;
                      }
                      if ("force3D" === h) {
                        g[h] = s;
                        continue;
                      }
                      if ("transform" === h) {
                        ci(this, s, t);
                        continue;
                      }
                    }
                  else h in M || (h = zr(h) || h);
                  if (
                    m ||
                    ((o || 0 === o) && (u || 0 === u) && !ur.test(s) && h in M)
                  )
                    o || (o = 0),
                      (d = (a + "").substr((u + "").length)) !==
                        (f = be(s) || (h in U.units ? U.units[h] : d)) &&
                        (u = jr(t, h, a, f)),
                      (this._pt = new Pn(
                        this._pt,
                        m ? g : M,
                        h,
                        u,
                        (p ? Nt(u, p + o) : o) - u,
                        m ||
                        ("px" !== f && "zIndex" !== h) ||
                        !1 === e.autoRound
                          ? cr
                          : fr,
                      )),
                      (this._pt.u = f || 0),
                      d !== f &&
                        "%" !== f &&
                        ((this._pt.b = a), (this._pt.r = dr));
                  else if (h in M) Yr.call(this, t, h, a, p ? p + s : s);
                  else if (h in t)
                    this.add(t, h, a || t[h], p ? p + s : s, r, i);
                  else if ("parseTransform" !== h) {
                    vt(h, s);
                    continue;
                  }
                  m || (h in M ? b.push(h, 0, M[h]) : b.push(h, 1, a || t[h])),
                    A.push(h);
                }
            y && Dn(this);
          },
          render: function (t, e) {
            if (e.tween._time || !tr())
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
            else e.styles.revert();
          },
          get: Ur,
          aliases: lr,
          getSetter: function (t, e, n) {
            var r = lr[e];
            return (
              r && r.indexOf(",") < 0 && (e = r),
              e in nr && e !== Tr && (t._gsap.x || Ur(t, "x"))
                ? n && Kn === n
                  ? "scale" === e
                    ? yr
                    : vr
                  : (Kn = n || {}) && ("scale" === e ? br : xr)
                : t.style && !et(t.style[e])
                  ? _r
                  : ~e.indexOf("-")
                    ? gr
                    : An(t, e)
            );
          },
          core: { _removeProperty: Br, _getMatrix: Qr },
        };
      (Zn.utils.checkPrefix = zr),
        (Zn.core.getStyleSaver = Er),
        (di = Ft(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
            "," +
            (hi = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            nr[t] = 1;
          },
        )),
        Ft(hi, function (t) {
          (U.units[t] = "deg"), (Gr[t] = 1);
        }),
        (lr[di[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + hi),
        Ft(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            lr[e[1]] = di[e[0]];
          },
        ),
        Ft(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            U.units[t] = "px";
          },
        ),
        Zn.registerPlugin(fi);
      var pi = Zn.registerPlugin(fi) || Zn;
      pi.core.Tween,
        window.addEventListener("DOMContentLoaded", async () => {
          try {
            document.querySelector("note-list").updateList(),
              pi.from("app-bar", {
                opacity: 0,
                y: -50,
                duration: 0,
                ease: "power2.inOut",
              }),
              pi.from("note-list", {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: "power2.inOut",
                onComplete: function () {
                  console.log("Animation completed!");
                },
              });
          } catch (t) {
            console.error(t);
          }
        });
    })();
})();
