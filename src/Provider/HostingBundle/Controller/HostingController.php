<?php

namespace Provider\HostingBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HostingController extends Controller
{
    public function priceAction()
    {
        return $this->render('ProviderHostingBundle:Hosting:price.html.twig');
    }
}
