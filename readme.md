RCE Doorzoeker
==============

Introduction
------------
RCE Doorzoeker is a search front-end developed for the [Cultural Heritage Agency of the Netherlands](http://culturalheritageagency.nl/en).

RCE Doorzoeker was developed by [Fubineva](http://www.fubineva.nl) in 2013/2014. Interaction design was done by Enference.

The application user interface is in dutch.

About the code
--------------
The source code distribution is a provided as is, no documentation is currently available. 

The back-end is build with ASP.NET Web API 2. It operates against the Trezorix RNA Toolset through 
a C# connector called "RnaRemote" which is owned by Trezorix bv. It also works directly with the Apache SOLR index the RNA Toolset provides access to. 
Additionally it accesses an Adlib API to acquire literature and image references.

The front-end was initially build with Durandal and then ported to AngularJS. Most of the styling comes through Twitter's Bootstrap v3. The search box makes use of Twitter's typeahead. 
The application also includes Google Maps views and Google Analytics connectivity.
ASP.NET MVC is used to provide the SPA's application shell and item details views are rendered with some Razor templates.

The source code is Apache 2.0 licensed.
