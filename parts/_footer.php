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
        <script src="/js/build/production.min.js"></script>
        <?php
            if ($_SERVER['PHP_SELF'] == '/home/index.php') {
                
                echo '<script>';
                echo '$.backstretch([';
                echo '"/img/home/four.jpg",';
                echo '"/img/home/two.jpg",';
                echo '"/img/home/one.jpg",';
                echo '"/img/home/three.jpg"';
                echo ' ], {duration: 3000, fade: 750});';
                echo '</script>';
            
            }
        ?>

    </body>
</html>