function ResourceCard({ resource, onDelete }) {
  return (
    <div className="neon-card mb-3 d-flex justify-content-between align-items-center flex-wrap">
      <div>
        <h5 className="glow-text">{resource.title}</h5>
        <p className="text-white fw-semibold">{resource.subject}</p>
      </div>
      <div>
        <a
          href={`http://localhost:3003/uploads/${resource.file}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary me-2"
        >
          <i className="bi bi-eye"></i>
        </a>
        <button
          onClick={() => onDelete(resource._id)}
          className="btn btn-danger"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default ResourceCard;
