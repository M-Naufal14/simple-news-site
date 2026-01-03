function NewsItem({ news }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm news-card">
                <img
                    src={news.urlToImage}
                    className="card-img-top"
                    alt={news.title}
                />
                <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                        <span className="badge rounded-pill me-2">{news.category}</span>
                        <small className="text-muted">{news.date}</small>
                    </div>
                    <h5 className="card-title fw-bold">{news.title}</h5>
                    <p className="card-text flex-grow-1">{news.description}</p>
                    <a href="#" className="btn btn-custom mt-auto">
                        Baca Selengkapnya
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
