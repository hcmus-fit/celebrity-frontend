import React from "react";

class CelebrityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/celebrities")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="row">
                    {items.map(item => (
                        <div className="col-md-4" key={item.id}>
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top"
                                     src={item.image_url}
                                     alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">{item.name}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Delete
                                                </button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        ))
                        }
                </div>
            );
        }
    }
}

export default CelebrityList;