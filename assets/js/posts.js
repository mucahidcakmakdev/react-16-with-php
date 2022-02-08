class LikeButton extends React.Component {

    state = {
        likes: this.props.likes || 0,
        isLiked: this.props.isLiked || false
    }
    handleClick = () => {
        const isLiked = this.state.isLiked;
        const likes = this.state.likes + (isLiked ? -1 : 1);
        this.setState({ likes, isLiked: !isLiked });
    }
    render() {
        return <button className="btn btn-link" onClick={this.handleClick}>
            <span className="badge badge-success">{this.state.likes}</span>&nbsp;
            <i className={(this.state.isLiked ? 'fas' : 'far') + ' fa-thumbs-up'}></i>
            {this.state.isLiked ? "Je n'aime plus !" : "J'aime !"}
        </button>
        // return React.createElement('button',
        //     { className: 'btn btn-link', onClick: this.handleClick },
        //     // this.state.likes, 
        //     React.createElement('i', { className: (this.state.isLiked ? 'fas' : 'far') + ' fa-thumbs-up' }), " "
        //     , this.state.isLiked ? "Je n'aime plus !" : "J'aime !");
    }
}


document.querySelectorAll('span.react-like').forEach(function (span) {
    const likes = +span.dataset.likes;
    const isLiked = +span.dataset.isLiked === 1;
    ReactDOM.render(<LikeButton likes={likes} isLiked={isLiked}></LikeButton>, span);
});