import Nav from "react-bootstrap/Nav"

function NavTop(params) {
    return (
        <>
            <Nav
                variant="navbar navbar-dark bg-dark"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link
                        className="text-light" href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        className="text-light"
                        eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        className="text-light"
                        eventKey="link-2">Browse</Nav.Link>

                </Nav.Item>
            </Nav>
        </>

    )

}
export default NavTop