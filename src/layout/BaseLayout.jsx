import Header from "../containers/Header/Header";

const BaseLayOut = ({ children }) => {

    return (
        <>
        <Header />
        { children }
        <footer>

        </footer>
        </>
    )
};

export default BaseLayOut;