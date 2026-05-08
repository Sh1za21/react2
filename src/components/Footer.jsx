import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="footer">
        <div class="container">
            <nav class="fooer__nav">
                <form class="footer__nav-form">
                    <input class="footer__nav-form_input" type="text" placeholder="First Name"/>
                    <input class="footer__nav-form_input" type="text" placeholder="Last Name"/>
                    <input class="footer__nav-form_input" type="email" placeholder="Email address"/>
                    <button class="footer__nav-form_btn">SUBMIT</button>
                </form>
                <div class="footer__nav-right">
                    <ul class="footer__nav-list">
                        <h3 class="footer__nav-list_title">CONTACT</h3>
                        <li class="footer__nav-list_item">
                            <a class="footer__nav-list_item-link" href="tel:+998 98 888 98 98">998 98 888 98 98</a>
                        </li>
                        <li class="footer__nav-list_item">
                            <a class="footer__nav-list_item-link" href="mailto:porshe@gmail.com">porshe@gmail.com</a>
                        </li>
                        <li class="footer__nav-list_item">
                            <a class="footer__nav-list_item-link" href="sms:32323232">zipcode 32323232</a>
                        </li>
                    </ul>
                    <ul class="footer__nav-list">
                        <h3 class="footer__nav-list_title">SOCIAL</h3>
                        <li class="footer__nav-list_item">
                            <a class="footer__nav-list_item-link" href="#">Instagram</a>
                        </li>
                        <li class="footer__nav-list_item">
                            <a class="footer__nav-list_item-link" href="#">Facebook</a>
                        </li>
                        <li class="footer__nav-list_item">
                            <a class="footer__nav-list_item-link" href="#">Telegram</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </footer>
    </>
  )
}

export default Footer