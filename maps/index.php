<?php 
    require_once ('../includes/config.php');
    $title = 'Brimstone Maps | Brimstone Mining, Inc.';
    include (ROOT_PATH . '/parts/_doctype.php');
?>

    <body id="maps-page">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
    
        <?php include (ROOT_PATH . '/parts/_main-nav.php'); ?>

        <div class="subnav-contain">
            <header></header>
            <a href="#montana" class="subnav">
                <div class="subnav-section">
                    <p>
                        Montana
                    </p>
                </div>
            </a>
            <a href="#swMontana" class="subnav">
                <div class="subnav-section">
                    <p>
                        SW Montana                               
                    </p>
                </div>
            </a>
            <a href="#mineArea" class="subnav">
                <div class="subnav-section">
                    <p>
                        Mine Area
                    </p>
                </div>
            </a>
            <a href="#mineDrawings" class="subnav">
                <div class="subnav-section">
                    <p>
                        Mine Drawings
                    </p>
                </div>
            </a>
            <a href="#mineAnimation" class="subnav">
                <div class="subnav-section">
                    <p>
                        Mine Model Animation
                    </p>
                </div>
            </a>
        </div>
        
         <div class="grid-template">
            <div class="col-1-1">
                <div class="hero">
                     <div class="hero-contain">
                        <!-- <img src="../img/hero/mayflower-headframe.jpg" alt="the mayflower mine headframe"> -->
                        <h1>Brimstone Maps</h1>
                         <div class="description">
                            <p>
                                  The maps listed in the Drawings section are in DWF (Drawing Web Format) and  are designed to be viewed with AutoDesk's (tm) <a href="ftp://ftp.autodesk.com/pub/whip/whip31.exe" target="blank">Whip!</a> driver. Before viewing these drawings, you must first download the correct drivers from the Internet and install them on your computer. This will take several minutes depending on the speed of your modem and network traffic.  Once loaded, you will not have to load them again. For more information visit the AutoDesk Whip site at <a href="ftp://ftp-2.autodesk.com/pub/whip/readme/uguide.htm" target="blank">ftp://ftp-2.autodesk.com/pub/whip/readme/uguide.htm</a>
                            </p>
                        </div>
                    </div>
                </div>               

                <div class="contained" id="montana">
                    <h2>Montana</h2>
                    <hr>
                    <img src="../img/maps/small/Mtmed.gif">
                    <p>
                        This is a general map of Montana showing the major roads, cities and the location of Mayflower Mine.
                         <a href="../img/maps/downloads/Mtbig.gif" class="download" target="blank">Download Map</a>
                    </p>
                </div>

                <div class="contained" id="swMontana">
                    <h2>SW Montana</h2>
                    <hr>
                    <img src="../img/maps/small/Locatmed.jpg">
                    <p>
                        A more detailed map of SW Montana with major roads, rivers, county boundaries and the locations of major mines, including Mayflower Mine.
                         <a href="../img/maps/downloads/Locatbig.gif" class="download" target="blank">Download Map</a>
                    </p>
                </div>

                <div class="contained" id="mineArea">
                    <h2>Mine Area</h2>
                    <hr>
                    <img src="../img/maps/small/Det-med.gif">
                    <p>
                        A regional map showing the town of Whitehall and the route to Mayflower Mine.
                         <a href="../img/maps/downloads/Detailbig.gif" class="download" target="blank">Download Map</a>
                    </p>
                </div>

                <div class="contained" id="mineDrawings">
                    <h2>Mine Drawings</h2>
                    <hr>
                    <p>
                       This area contains links to CAD drawings, including: 3-dimensional mine model showing drillhole locations and intercepts, typical cross sections of the east and west ore shoots, and current reserve polygon calculations for the east ore shoot.
                    </p>
                    <ul>
                        <li>
                            <a href="../img/drawings/drillhole_status.dwf">Mine Model showing drillhole status</a>
                        </li>
                         <li>
                            <a href="../img/drawings/model_and_section_East.dwf">Typical Cross Section Through the Eastern Ore Shoot</a>
                        </li>
                         <li>
                            <a href="../img/drawings/model_and_section_West.dwf">Typical Cross Section Through the Western Ore Shoot</a>
                        </li>
                         <li>
                            <a href="../img/drawings/reserve_plys.dwf">Reserve Polygons - Eastern Ore Shoot</a>
                        </li>
                    </ul>
                </div>

                <div class="contained" id="mineAnimation">
                    <h2>Mine Model Animation</h2>
                    <hr>
                    <img src="../img/maps/mine-model-ani.gif">
                    <h4 style="text-align: left">
                        Animation of Mayflower Mine Showing Mapped Ore and Mineralized Zones Below the 900 Level
                    </h4>
                    <p>
                        <span style="color: blue">Blue</span> = Workings
                        <br>
                        <span>Green</span> = Shafts and Winzes
                        <br>
                        <span style="color: red">Red</span> = Ore Grade Mineralization
                        <br>
                        <span style="color: orange">Orange</span> = Other Mineralized Zones
                    </p>
                    <p>
                        (animation was produced in ESRI's  3D-Analyst by DTM Consulting, LLC; Bozeman, Montana)
                    </p>
                </div>

            </div>
        </div> <!-- /grid -->

        <?php include (ROOT_PATH . '/parts/_footer.php'); ?>