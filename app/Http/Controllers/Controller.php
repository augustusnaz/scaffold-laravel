<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Artesaos\SEOTools\Traits\SEOTools as HasSEOTools;
use Artesaos\SEOTools\JsonLd;
use SEOMeta;
use View;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, HasSEOTools;

    protected $site_country;
    protected $locale;
    protected $lang = 'en';
    protected $url;

    protected $title;
    protected $description;
    protected $keywords;
    protected $image;
    protected $og_type = 'website';

    protected $show_site_country = false;

    protected $sticky_header = true;

    protected $preload = false;


    function __construct(){

        $this->image = asset('icon/logo.png');

        $this->title = config('app.name');
        $this->locale = 'AU';
        $this->site_country = 'Australia';

        $this->url = url()->current();

        /**
         * Manually set url to current for WebSite json-ld
         * WebSite is the default in config.seotools
         * Setting the config url to null should set url to current but does not
         */
        $this->seo()->jsonLd()->setUrl( $this->url );

    }


    /**
     * Share site-wide blade variables
     * 
     * All attributes are provided to be modifiable per controller per page
     */
    protected function share(){

        SEOMeta::addMeta('Description', $this->description);
        SEOMeta::addMeta('keywords', $this->keywords);
        SEOMeta::addMeta('locale', $this->locale);
        SEOMeta::addMeta('og:type', $this->og_type);

        SEOMeta::addMeta('og:description', $this->description);
        SEOMeta::addMeta('og:keywords', $this->keywords);
        SEOMeta::addMeta('og:image', $this->image);
        SEOMeta::setRobots('index, follow');

        View::share([
            'site_country' => $this->site_country,
            'locale' => $this->locale,
            'lang' => $this->lang,
            'title' => $this->title,
            'show_site_country' => $this->show_site_country,
            'sticky_header' => $this->sticky_header,
            'preload' => $this->preload,
            'url' => $this->url,
        ]);
    }

    /**
     * Use this method to create views to auto share site-wide blade variables
     * 
     * @return \Illuminate\View\View
     */
    public function view(){
        $this->share();

        $args = func_get_args();

        return call_user_func_array('view', $args);
    }

}
