function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}
Header.defaultProps = {
    title: 'React App'
}
export default Header
