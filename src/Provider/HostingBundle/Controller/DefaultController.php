<?php

namespace Provider\HostingBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ProviderHostingBundle:Default:index.html.twig', array('name' => $name));
    }
}
