import "../styles/LoadingIndicator.css";

const LoadingIndicator = () => {
    return (
        <div className="d-flex justify-content-center align-items-center m-3">
            <div className="loading-container">
                <div className="loader"></div>
            </div>
        </div>
    );
}

export default LoadingIndicator;
