const LinkButton = ({ className, label, href= '#' }) => {

    return (
        <>
        <a className= {`link-button ${className}_link-button`} href={href}>{ label }</a>
        </>
    )
};

export default LinkButton;