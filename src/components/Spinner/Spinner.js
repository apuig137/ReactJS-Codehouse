let Spinner = () => {
    return (
        <div className="d-flex justify-content-center" style={{ position: "relative", top: "50vh", left: "60vw" }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner