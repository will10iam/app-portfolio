export default function SocialIcons() {
    const styles = {
        icon: {
            textDecoration: "none",
            fontSize: "22px",
            padding: "10px",
            transition: "0.2s ease-in",
        },
    };

    return (
        <div className="socialIcons" style={styles.socialIcons}>
            <a className="icon" style={styles.icon} href="https://github.com/will10iam">
                <i className="fa-brands fa-github" aria-hidden="true" title="William Github Profile"></i>
            </a>
            <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/william-berbet/">
                <i className="fa-brands fa-linkedin" aria-hidden="true" title="William LinkedIn Profile"></i>
            </a>
            <a className="icon" style={styles.icon} href="https://www.instagram.com/willnasredes/">
                <i className="fa-brands fa-instagram" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
            </a>
            <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates">
                <i className="fa-brands fa-twitter" aria-hidden="true" title="Michael Yeates' Twitter Profile"></i>
            </a>
        </div>
    );
};