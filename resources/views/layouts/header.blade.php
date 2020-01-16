<header id="header" class="{{ $sticky_header? 'sticky':'' }}">
    <div class="container">
        <div class="flex-wrap d-flex justify-space-between">
            <div id="logo">
                <a href="{{ route('home') }}"><img src="{{ asset('img/logo.png') }}" alt="{{ config('app.name') }}" title="" /></a>
            </div>
            <nav id="nav-menu-container" class="pa-0">
                <ul class="nav-menu">
                    <li class="nav-item"><a href="#">Products</a></li>
                    <li class="nav-item"><a href="#">Brands</a></li>
                    <li class="nav-item"><a href="#">Where to Buy</a></li>
                    <li class="nav-item"><a href="#">FAQs</a></li>
                    <li class="nav-item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="mobile-nav d-md-none">

        <div class="b-nav">
            <ul>
                <li class="nav-item"><a href="#">Products</a></li>
                <li class="nav-item"><a href="#">Brands</a></li>
                <li class="nav-item"><a href="#">Where to Buy</a></li>
                <li class="nav-item"><a href="#">FAQs</a></li>
                <li class="nav-item"><a href="#">Contact</a></li>
            </ul>
        </div>

        <!-- Burger-Icon -->
        <div class="b-container">
          <div class="b-menu">
            <div class="b-bun b-bun--top"></div>
            <div class="b-bun b-bun--mid"></div>
            <div class="b-bun b-bun--bottom"></div>
          </div>
        </div>

  </div>
</header>

@push('foot-scripts')
<script>
document.addEventListener('DOMContentLoaded', function() {
    
    /*************************************************************** 
     * 
     * Handle scroll
     * 
    ***************************************************************/
    window.onscroll = function() {handleScroll()};
    var header = document.getElementById('header');
    var sticky = header.offsetTop;
    function handleScroll() {
        if (window.pageYOffset > sticky) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    /*************************************************************** 
     * 
     * Mobile menu
     * 
    ***************************************************************/
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];
    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerContain, burgerNav].forEach(function (el) {
            el.classList.toggle('open');
        });
    }, false);
});
</script>
@endpush
