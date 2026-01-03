function NewsItem({ news }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img
                    src={news.urlToImage}
                    className="card-img-top"
                    alt={news.title}
                />
                <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                        <span className="badge bg-primary me-2">{news.category}</span>
                        <small className="text-muted">{news.date}</small>
                    </div>
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text flex-grow-1">{news.description}</p>
                    <a href="#" className="btn btn-outline-primary mt-auto">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
