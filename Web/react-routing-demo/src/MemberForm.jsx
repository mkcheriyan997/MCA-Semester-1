import React, { useState, useEffect } from "react";

export default function MemberForm({ initial = {}, onSubmit, submitLabel = "Add Member" }) {
  const [name, setName] = useState(initial.name || "");
  const [email, setEmail] = useState(initial.email || "");

  useEffect(() => { setName(initial.name || ""); setEmail(initial.email || ""); }, [initial]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name: name.trim(), email: email.trim() });
    setName(""); setEmail("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />

      <label>Email</label>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email (optional)" />

      <div className="form-actions">
        <button className="btn-primary" type="submit">{submitLabel}</button>
      </div>
    </form>
  );
}
