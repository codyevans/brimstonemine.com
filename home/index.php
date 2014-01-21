<?php 
    // title tag
    $title = 'Brimstone Mining, Inc.';
?>
<?php include '../parts/_doctype.php'; ?>

        <body id="home-page">
            <!--[if lt IE 7]>
                <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
            <![endif]-->

        <?php include '../parts/_main-nav.php'; ?>

         <div class="grid">
            <div class="col-1-3 push-right">
                   
                 <div class="contained">
                    <h2>Brimstone Mining, Inc.</h2>
                 <!-- // INFO BUTTON FOR QUICK CONTACT - STILL NEEDS WORK
                    <a href="#0" class="quick-contact" id="quick-contact" title="contact info">i</a> 
                -->
                    <hr>
                    <p>
                        <strong>Brimstone Mining, Inc.</strong> (BMI) is a Montana Corporation formed in January 1996. The Company was formed specifically to acquire the Mayflower Mine and associated assets. Some of the claims and all of the equipment and supplies at the Mayflower are owned directly by BMI. The rest of the claims are owned by West Mayflower Mining Co. and Mayflower Mining Co. which are both Montana corporations formed in the early 1900’s and owned by BMI..
                    </p>
                </div>

            </div> <!-- /col -->
        </div> <!-- /grid -->

        <footer>

            <div class="logo"></div>
            <div class="copyright">
                <p>©<?php echo date('Y'); ?> brimstone Mining, Inc.</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/mayflower-mine/">Mayflower Mine</a>
                    </li>
                    <li>
                        <a href="/maps/">Maps</a>
                    </li>
                    <li>
                        <a href="/press/">Press</a>
                    </li>
                    <li>
                        <a href="/contact/">Contact</a>
                    </li>
                </ul>
            </nav>
       
        </footer>

        <div id="mobilOverlay">
            <div class="grid">
            <div class="col-1-1">
            <div class="mobileContain">
                <h2>Coming Soon</h2>
                <hr>
                <p>
                    We are working hard to bring you a better mobile viewing experience.
                    Please check back with us soon.
                </p>
            </div>
            </div>
            </div>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="../js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="/js/build/production.min.js"></script>
        <script>
             $.backstretch("/img/home/test.jpg");
        </script>
    </body>
</html>









