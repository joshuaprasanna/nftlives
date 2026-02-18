import React, { useState } from "react";

export default function ContactFooter() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [modal, setModal] = useState({
    open: false,
    text: "",
    type: "success", // success | error
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // simulate sending
      await new Promise((res) => setTimeout(res, 800));

      setModal({
        open: true,
        text: "🙏 Your prayer request was sent successfully!",
        type: "success",
      });

      setForm({ name: "", email: "", mobile: "", message: "" });
    } catch {
      setModal({
        open: true,
        text: "❌ Something went wrong. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <>
      <footer style={footer}>
        <h2 style={title}>📩 Contact / Prayer</h2>

        <form onSubmit={handleSubmit} style={formBox}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            style={input}
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={input}
          />
          <input
            name="mobile"
            placeholder="Mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            style={input}
          />
          <textarea
            name="message"
            placeholder="Prayer Request"
            value={form.message}
            onChange={handleChange}
            required
            style={{ ...input, height: 110 }}
          />
          <button style={btn}>Send Prayer</button>
        </form>
      </footer>

      {/* MODAL POPUP */}
      {modal.open && (
        <div style={overlay} onClick={() => setModal({ ...modal, open: false })}>
          <div
            style={modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={closeBtn}
              onClick={() => setModal({ ...modal, open: false })}
            >
              ✖
            </button>

            <div
              style={{
                ...icon,
                background:
                  modal.type === "success" ? "#00e6c3" : "#ff4d4d",
              }}
            >
              {modal.type === "success" ? "✓" : "!"}
            </div>

            <h3 style={{ marginBottom: 10 }}>
              {modal.type === "success" ? "Success" : "Error"}
            </h3>
            <p style={{ color: "#444" }}>{modal.text}</p>

            <button
              style={modalBtn}
              onClick={() => setModal({ ...modal, open: false })}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <style>{animation}</style>
    </>
  );
}

/* ================= STYLES ================= */

const footer = {
  background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
  padding: 60,
  textAlign: "center",
  color: "#fff",
};

const title = {
  color: "#00ffe0",
  fontSize: "2.4rem",
  marginBottom: 30,
};

const formBox = {
  maxWidth: 420,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 15,
};

const input = {
  padding: 14,
  borderRadius: 10,
  border: "none",
  background: "#1f1f1f",
  color: "#fff",
  fontSize: "1rem",
};

const btn = {
  padding: 14,
  borderRadius: 30,
  border: "none",
  background: "linear-gradient(135deg,#00ffe0,#00b8a9)",
  fontWeight: "bold",
  cursor: "pointer",
};

/* MODAL */
const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modalBox = {
  background: "#fff",
  padding: 35,
  width: 340,
  borderRadius: 16,
  textAlign: "center",
  position: "relative",
  animation: "slideFade .4s ease",
  boxShadow: "0 30px 60px rgba(0,0,0,.4)",
};

const closeBtn = {
  position: "absolute",
  top: 12,
  right: 14,
  background: "transparent",
  border: "none",
  fontSize: 18,
  cursor: "pointer",
};

const icon = {
  width: 60,
  height: 60,
  borderRadius: "50%",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 28,
  margin: "0 auto 15px",
};

const modalBtn = {
  marginTop: 20,
  padding: "10px 34px",
  borderRadius: 22,
  border: "none",
  background: "#00e6c3",
  fontWeight: "bold",
  cursor: "pointer",
};

/* ANIMATION */
const animation = `
@keyframes slideFade {
  from { transform: translateY(-30px); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
}
`;
