<!DOCTYPE html>
<html lang="{{ $lang }}-{{ $locale }}" xml:lang="{{ $lang }}-{{ $locale }}">
<head>

    <!-- Google Tag Manager DataLayer -->
    <script>
    window.dataLayer = window.dataLayer || [];
    </script>
    <!-- End Google Tag Manager DataLayer -->

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '{{ config("services.gtm.cid", "") }}');</script>
    <!-- End Google Tag Manager -->

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @stack('links')

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $title }}{{ $show_site_country? '('.$locale.')':''}}</title>

    <meta property="og:title" content="{{ config('app.name') }}{{ $show_site_country? ' ('.$site_country.')':''}}">
    <meta property="og:url" content="{{ $url }}">
    <meta property="og:locale" content="{{ $lang }}_{{ $locale }}">
    <meta property="og:site_name" content="{{ config('app.name') }}{{ $show_site_country? ' ('.$site_country.')':''}}">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    {!! SEOMeta::generate() !!}

    <!-- Scripts -->
    @stack('scripts')


    @stack('head')

    <style>
        .no-js .loader{
            display: none
        }
        .loader {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #F5F8FA;
            z-index: 9998;
            text-align: center;
            align-items: center
        }
        .plane-container{
            position: relative;
            top: calc(50% - 40px);
        }
    </style>

</head>

<body class="no-js-" data-theme="dark">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ config('services.gtm.cid') }}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

@if($preload)
    @include('layouts.preloader')
@endif

<v-app id="app">
    @include('layouts.header', [$sticky_header])

    @stack('headers')

    @yield('content')

    @include('layouts.footer')
</v-app>

@stack('foot-scripts')

{!! JsonLd::generate() !!}

</body>

</html>
