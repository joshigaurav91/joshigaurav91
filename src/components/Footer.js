import { getByPlaceholderText } from "@testing-library/react"
import { getyear } from "../utilities/date"

function Footer(props) {
    return (
        <footer>
            <h3>&copy; {props.copyright} {props.author}</h3>
        </footer>
    )
}

Footer.defaultProps = {
    copyright: getYear(),
    author: 'SSD'
}
export default Footer
