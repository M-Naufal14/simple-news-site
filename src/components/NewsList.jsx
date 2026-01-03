import NewsItem from './NewsItem'

function NewsList({ news }) {
    return (
        <div className="row">
            {news.map((item) => (
                <NewsItem key={item.id} news={item} />
            ))}
        </div>
    )
}

export default NewsList
