import newsCoverImage from '../assets/news-cover.jpg'


const NewsItem = (props) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "340px"}}>
            <img src={props.src ? props.src : newsCoverImage} className="card-img-top" alt="Article image..." style={{height: "100%", width: "100%"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title.slice(0, 50)}</h5>
                    <p className="card-text">{props.description ? props.description.slice(0.100) : "This articles contains full narration of the event that occurred recently as seen in the title above."}</p>
                    <a href={props.url} className="btn text-light" style={{background: '#6660ff'}}>Read More</a>
                </div>
        </div>
    )
}


export default NewsItem;