import {Footer} from "../components";

export function FooterContainer ()  {
    return (
        <Footer>
            <Footer.Title> Questions? Contact Us.</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href='#'>FAQ</Footer.Link>
                    <Footer.Link href='#'>Investor Relations</Footer.Link>
                    <Footer.Link href='#'>Ways to Watch</Footer.Link>
                    <Footer.Link href='#'>Coporate Information</Footer.Link>
                    <Footer.Link href='#'>Netflix Original</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Helps Center</Footer.Link>
                    <Footer.Link href='#'>Jobs</Footer.Link>
                    <Footer.Link href='#'>Terms of Use</Footer.Link>
                    <Footer.Link href='#'>Contact us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Account</Footer.Link>
                    <Footer.Link href='#'>Reedem Gift Cards</Footer.Link>
                    <Footer.Link href='#'>Privacy</Footer.Link>
                    <Footer.Link href='#'>Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Media Center</Footer.Link>
                    <Footer.Link href='#'>Buy Gift Cards</Footer.Link>
                    <Footer.Link href='#'>Cookie Preferences</Footer.Link>
                    <Footer.Link href='#'>Legal Notices</Footer.Link>
                </Footer.Column>
                <Footer.Text>Netflix Ukraine</Footer.Text>
            </Footer.Row>
        </Footer>
    )
}
console.log('footer')