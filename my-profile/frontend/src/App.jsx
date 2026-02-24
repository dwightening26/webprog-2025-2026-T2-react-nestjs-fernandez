return (
  <div className="container">
    {/* Profile Section */}
    <div className="profile-card">
      <div className="profile-content">
        <h1>Dwight's Personal Profile</h1>
        <p className="subtitle">Information Technology Student</p>
        <p className="bio">
          Passionate about sports, fitness, and technology.
          I enjoy building web applications and learning new tools.
        </p>
      </div>
    </div>

    {/* Guestbook Section */}
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

    <footer className="footer">
      © 2026 Dwight Fernandez | Built with React & NestJS
    </footer>
  </div>
);