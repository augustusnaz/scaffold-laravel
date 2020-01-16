<footer class="footer grey lighten-4 blue-grey--text text--darken-4">
    <div class="container">
        <breadcrumbs ref="breadcrumbs"></breadcrumbs>
        <v-divider class="blue-grey lighten-4"></v-divider>
        <div class="row mt-5 mb-10">
            <div class="col-12 footer-des-col-md">
                <div class="pr-4">
                    <p><img src="{{ asset('img/logo.png') }}"></p>
                    <p>
                        <a class="no-style headline" href="tel:0412345678">0412345678</a><br/>
                        <a class="no-style subtitle-1" href="mailto:hello@moirei.com">hello@moirei.com</a>
                    </p>
                    <p>MOIREI is a young, tech-driven brand that designs and markets quality, necessary and accessible technologies for mobile consumers.</p>
                    <p><small><a href="#">Learn more</a></small></p>
                </div>
            </div>
            <div class="col-12 footer-link-col-md">
                <div class="footer-links">
                    <h4 class="footer-link-header">Company</h4>
                    <ul class="mt-3">
                        <li><a class="no-style" href="#">Contact</a></li>
                        <li><a class="no-style" href="#">Locations</a></li>
                        <li><a class="no-style" href="#">FAQs</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 footer-link-col-md">
                <div class="footer-links">
                    <h4 class="footer-link-header">Products</h4>
                    <ul class="mt-3">
                        <li><a class="no-style" href="#">Jambis</a></li>
                        <li><a class="no-style" href="#">Three Lwon</a></li>
                        <li><a class="no-style" href="#">Customer Reviews</a></li>
                        <li><a class="no-style" href="#">Where To Buy</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 footer-link-col-md">
                <div class="footer-links">
                    <h4 class="footer-link-header">About</h4>
                    <ul class="mt-3">
                        <li><a class="no-style" href="#">About Us</a></li>
                        <li><a class="no-style" href="#">Product quality policy</a></li>
                        <li><a class="no-style" href="#">Blog & News</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <v-divider class="blue-grey lighten-4"></v-divider>
        <div class="row">
            <div class="col-12 col-md-3">
                <small class="footer-text grey--text">
                    Copyright &copy; <script>document.write(new Date().getFullYear());</script>
                    <a class="no-style" href="https://www.moirei.com">MOIREI</a>. All rights reserved.
                </small>
            </div>
            <div class="col-12 col-md-9">
                <small>
                    <a class="no-style" href="#">Privacy Policy</a> <span class="mx-2">|</span>
                    <a class="no-style" href="#">Terms of Use</a> <span class="mx-2">|</span>
                    <a class="no-style" href="#">Legal</a> <span class="mx-2">|</span>
                    <a class="no-style" href="#">Site Map</a>
                </small>
            </div>
        </div>
    </div>
    @yield('footer')
</footer>