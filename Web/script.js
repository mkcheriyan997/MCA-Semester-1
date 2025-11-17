// script.js
const $ = id => document.getElementById(id);

const form = $('regForm');
const validators = {
  name: v => v.trim().length >= 3 || "Enter at least 3 characters",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Invalid email",
  pwd: v => v.length >= 6 || "Password must be 6+ chars",
  cpwd: (v, all) => v === all.pwd.value || "Passwords do not match",
  phone: v => /^\d{10}$/.test(v) || "Phone must be 10 digits",
  age: v => {
    const n = Number(v); return (n >= 13 && n <= 120) || "Enter valid age";
  },
  role: v => v !== "" || "Select a role",
  tos: v => v === true || "You must agree to terms"
};

function validateAll() {
  const data = {
    name: $('name').value,
    email: $('email').value,
    pwd: $('pwd').value,
    cpwd: $('cpwd').value,
    phone: $('phone').value.trim(),
    age: $('age').value,
    role: $('role').value,
    tos: $('tos').checked
  };

  let ok = true;
  for (const key in validators) {
    const res = validators[key](data[key], { pwd: $('pwd') });
    const elErr = $('e_' + key);
    if (res === true) {
      elErr.textContent = '';
    } else {
      elErr.textContent = res;
      ok = false;
    }
  }
  return { ok, data };
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const { ok, data } = validateAll();
  const out = $('result');
  if (!ok) {
    out.textContent = 'Fix validation errors above.';
    out.className = 'small';
    return;
  }
  // Simulate success (replace with actual submission)
  out.innerHTML = `<span class="success">Registered ✓</span> — Welcome, ${escapeHtml(data.name)}`;
  form.reset();
});

function escapeHtml(s){ return s.replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]); }

// Optional: live validation on blur
['name','email','pwd','cpwd','phone','age','role','tos'].forEach(id=>{
  const el = $(id);
  if(!el) return;
  el.addEventListener('blur', () => validateAll());
});

