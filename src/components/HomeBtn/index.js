import {Link} from "react-router-dom";

export function HomeBtn () {
    return (
        <div className="d-flex p-3">
            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
        </div>
    )
}