return (
  <div className="page">

    {/* HERO SECTION */}
    <section className="hero">
      <div className="hero-content">
        <h1>Dwight</h1>
        <p className="hero-subtitle">Information Technology Student</p>
        <p className="hero-description">
          I build modern web applications using React, NestJS, and Supabase.
          Passionate about sports, fitness, and continuous self-improvement.
        </p>
      </div>
    </section>

    {/* SKILLS SECTION */}
    <section className="skills">
      <h2>Tech Stack</h2>
      <div className="skills-grid">
        <div className="skill-card">React</div>
        <div className="skill-card">NestJS</div>
        <div className="skill-card">Supabase</div>
        <div className="skill-card">PostgreSQL</div>
      </div>
    </section>

    {/* GUESTBOOK SECTION */}
    <section className="guestbook-section">
      <h2 className="section-title">Guestbook</h2>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Leave a message..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
              rows={3}
            />
          </div>
          <div className="actions">
            <button type="submit">Sign Guestbook</button>
          </div>
        </form>
      </div>

      <div className="entries">
        {entries.map(entry => (
          <div key={entry.id} className="entry-card">
            <div className="entry-header">
              <strong>{entry.name}</strong>
              <span className="date">
                {new Date(entry.created_at).toLocaleDateString()}
              </span>
            </div>
            <p className="entry-message">{entry.message}</p>
          </div>
        ))}
      </div>
    </section>

    <footer className="footer">
      © 2026 Dwight Fernandez | Personal Profile Website
    </footer>

  </div>
);