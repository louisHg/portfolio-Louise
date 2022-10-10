"use strict";
// Sweet Alert CDN through JS
let script = document.createElement("script");
script.type = 'text/javascript';
script.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js";
document.body.appendChild(script);

// Header
// Navbar composant js fixe ici

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top light-theme" id="navbar">
<a class="navbar-brand" href="index.html">Louise Vanrechem </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Page d'accueil </a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="design.html">Projets</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="techstack.html">Mes compétence</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">Parcours</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="https://hashnode.com/" target="_blank">Blogs</a></li>
   <li class="nav-item">
   </li>
  </ul>
</div>
</nav>`);

// Footer
// Ici est a faire le form js pour envoyer un email

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes"    style="text-align:center;">
      <!--SVG code for quote-left icon-->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5em" height="1.5em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 21a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2L7 13a4 4 0 1 1 0 8zm10 0a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2l-2 10a4 4 0 1 1 0 8z" fill="#fff" fill-rule="evenodd"/></svg>
      </div>
      <p class="tag" >Develop a passion for learning. If you do, you will never cease to grow.</p>
    </div>

    
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" id="b26bef22-1f65-4f25-beb8-c3985f2c0abb" width="100%" height="350" data-name="Layer 1" viewBox="0 0 856.363 548.704"><rect id="aea5e876-5b18-4677-ac52-565f186c2754" width="855.997" height="548.219" x=".366" y=".485" fill="#e6e6e6" data-name="Rectangle 1"/><rect id="aeed2be9-3178-4cee-b478-9db2d7f97a20" width="807.043" height="447.026" x="24.843" y="69.246" fill="#fff" data-name="Rectangle 2"/><rect id="b3ae8885-9a9e-4403-9d49-07bff8102aa7" width="855.997" height="36.366" fill="green" data-name="Rectangle 9"/><rect id="b27f3643-394f-4790-b443-091b1b383c54" width="293.762" height="283.55" x="468.794" y="118.164" fill="#e6e6e6" data-name="Rectangle 10"/><circle id="e395ce2b-339a-464a-b2a8-2798fb0dfcd4" cx="27.024" cy="18.592" r="6.74" fill="#fff" data-name="Ellipse 12"/><circle id="ba9fbbde-097d-4714-9aa4-a15d83836bc3" cx="52.608" cy="18.592" r="6.74" fill="#fff" data-name="Ellipse 13"/><circle id="ab9aef1c-a9cb-4a01-bb5b-9a91a857f5fb" cx="78.192" cy="18.592" r="6.74" fill="#fff" data-name="Ellipse 14"/><rect id="e493c728-f703-42a2-881c-386585883b73" width="78.336" height="78.336" x="86.904" y="117.581" fill="green" data-name="Rectangle 13"/><rect id="fef75a5d-72e7-4f52-be39-ca98924ebad3" width="78.336" height="78.336" x="195.841" y="118.03" fill="#e6e6e6" data-name="Rectangle 14"/><rect id="b42a9be3-8096-4c9f-95c4-e18278a3579e" width="78.336" height="260.658" x="196.152" y="225.635" fill="green" data-name="Rectangle 15"/><rect id="e3bd9f8a-f01d-48ae-a6f1-3d5ac6753111" width="78.336" height="133.362" x="84.767" y="225.054" fill="#e6e6e6" data-name="Rectangle 16"/><path id="b03a159e-94f4-480c-9a5d-9f23eb0385fc" fill="#2f2e41" d="M785.50752,338.6c-12.9-21.792-38.412-22.807-38.412-22.807s-24.863-3.179-40.813,30.009c-14.866,30.935-35.384,60.8-3.3,68.044l5.795-18.036,3.589,19.378a125.5385,125.5385,0,0,0,13.726.235c34.356-1.109,67.074.325,66.021-12C790.70949,387.031,797.91652,359.567,785.50752,338.6Z" data-name="Path 4" transform="translate(-171.8185 -175.648)"/><path id="edc5401e-f5b9-4166-9a45-6d9296a0e0c2" fill="#ffb8b8" d="M697.46451,545.527l-43.494,30.2s-25.372,26.58-7.249,26.58,25.372-22.955,25.372-22.955l55.576-24.163Z" data-name="Path 5" transform="translate(-171.8185 -175.648)"/><path id="a1145783-9ad9-4920-9c36-7da703d314d6" fill="#2f2e41" d="M714.9825,427.731s-38.057,117.8-25.976,123.838,38.661,9.665,38.661,9.665Z" data-name="Path 6" transform="translate(-171.8185 -175.648)"/><path id="a69c490e-693f-4e62-8a32-5b49f335d225" d="M714.9825,427.731s-38.057,117.8-25.976,123.838,38.661,9.665,38.661,9.665Z" data-name="Path 7" opacity=".1" transform="translate(-171.8185 -175.648)" style="isolation:isolate"/><path id="e424da1a-71ea-46da-8962-7b7b116f82e2" fill="#2f2e41" d="M834.62849,576.339h-85.672l60.868-30.808a38.7974,38.7974,0,0,1,3.854,2.851A77.279,77.279,0,0,1,834.62849,576.339Z" data-name="Path 8" transform="translate(-171.8185 -175.648)"/><circle id="e1ba790b-7394-4885-ab4c-2c84c77f3e7f" cx="567.328" cy="190.465" r="31.412" fill="#ffb8b8" data-name="Ellipse 1"/><path id="f3be7be2-223c-4c9b-8b5e-90f6ae9f04e0" fill="#ffb8b8" d="M738.54251,392.089s7.249,22.955,0,31.413,39.87-12.082,39.87-12.082-16.914-24.163-12.082-35.037Z" data-name="Path 9" transform="translate(-171.8185 -175.648)"/><path id="b8fe7dc2-df95-4ac5-a3bc-1c8e36bb8e76" fill="#2f2e41" d="M808.13052,496.971l-2.537,16.54s1.281,3.757,2.839,9.231c2.03,7.14,4.531,17.2,5.243,25.637.737,8.554-.375,15.44-5.666,15.875-7.587.628-11.538,5.231-15.477,12.082h-87.4c.23-3.769.507-7.684.834-11.707q.272-3.625.6-7.346c.242-2.851,8.8-56.409,2.368-67.935-13.286-23.8,3.625-37.453,3.625-37.453s2.416-18.123,2.416-24.163c0-4.736,18.557-10.209,26.58-12.36.52-.133.979-.266,1.4-.362,1.389-.362,2.223-.568,2.223-.568l6.343-2.6s17.82-3.443,19.029-5.86a6.139,6.139,0,0,1,3.093-2.2c2.549-1.087,5.8-1.861,6.573-2.634a30.801,30.801,0,0,0,2.984-4.06,16.14792,16.14792,0,0,1,8.892-5.2c12.976-3.274,31.618,3.214,31.618,3.214l-6.524,42.588Z" data-name="Path 10" transform="translate(-171.8185 -175.648)"/><path id="b7b1d332-0442-4c4a-aa9d-2d666bd52d71" fill="#ffb8b8" d="M846.07048,470.621l-43.494,30.2s-25.372,26.58-7.249,26.58,25.36609-22.951,25.36609-22.951l55.576-24.163Z" data-name="Path 11" transform="translate(-171.8185 -175.648)"/><path id="faae9d8a-2ade-475e-8bc6-8f0e7b87a797" fill="#2f2e41" d="M771.34851,336.499l-25.208-13.2-15.81,2.45a28.274,28.274,0,0,0-23.24,21.7l-2.96,13.058,17.929-.69,5.009-11.687v11.494l8.273-.318,4.8-18.606,3,19.806,29.409-.6Z" data-name="Path 12" transform="translate(-171.8185 -175.648)"/><path id="ba178fc8-375d-4438-9c01-c19893b0df8a" fill="#2f2e41" d="M815.26147,397.526l8.457-2.416s85.78,35.037,83.364,65.241,1.208,30.2-13.29,31.412-56.78-13.29-55.58-15.706,9.665-14.5,9.665-14.5l-32.621-25.372Z" data-name="Path 13" transform="translate(-171.8185 -175.648)"/><circle id="b052f10f-e5c3-45aa-968a-35c6c5894796" cx="598.741" cy="190.466" r="4.833" fill="#ffb8b8" data-name="Ellipse 2"/><rect id="aa772a43-ca79-434e-998e-525da0608a2b" width="293.762" height="39.168" x="468.794" y="447.288" fill="#e6e6e6" data-name="Rectangle 17"/><rect id="b869959f-3b5e-4542-9dd3-67ec9d40b083" width="78.336" height="97.865" x="84.767" y="387.847" fill="#e6e6e6" data-name="Rectangle 18"/><rect id="ed8504c8-ba55-4496-b946-b31fe66f24a3" width="78.336" height="239.85" x="307.537" y="118.565" fill="#e6e6e6" data-name="Rectangle 19"/><rect id="af23db80-e058-4986-866a-292ebf8abb10" width="78.336" height="97.921" x="307.226" y="388.086" fill="#e6e6e6" data-name="Rectangle 20"/></svg>        </div>
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 form-comtainer">
          <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Restons en contact</h6>
              </div>
                <form name="form1" action="https://script.google.com/macros/s/AKfycbxj2qw8HnlVAZ61AZAUj9I8HMmUsPflBBA14NM7gRgO19Z7U29uXtkFKqSRw0oQz_rk_w/exec" method="POST" accept-charset="UTF-8" >
                  <input id="nom" type="text" name="nom" placeholder="Votre nom" required/>
                  <input id="email" type="email" name="email" placeholder="Votre adresse mail" required/>                  
                  <textarea id="textArea" name="message" placeholder="Entrer votre message" required></textarea>
              
                  <div id="main">
                    <button id="lnch" type="button" value="Send" >Send</button>
                    <div id="lnch_btn"><i class="fas fa-space-shuttle"></i></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>


    

    <div class="rounded-social-buttons tag">
    <a class="social-button twitter" href="#" target="_blank">
    <!-- SVG code for twitter icon -->
    <svg class="twitter-icon-footer" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500"
        xml:space="preserve">
        <!-- bird body -->
        <path id="body" fill="#5DA8DC" d="M142.9,364.1c-1.6,1-3,1.7-4,2.3c-3,1.5-7.9,3.8-14.9,6.9c-7,3.1-14.7,5.7-23.1,7.9
                          c-8.4,2.2-15.6,3.8-21.8,4.7c-6.2,0.9-12.2,1.5-18.1,1.8s-11.4,0.3-16.7,0c-5.2-0.3-8.5-0.5-9.6-0.6l-1.8-0.2l-0.4-0.1l-0.4-0.1v0.8
                          h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H33l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l3.6,2.2c2.4,1.5,4.5,2.6,6.4,3.6
                          s6.6,3.3,14.1,7.1c7.6,3.7,16.6,7.4,27.2,11.1s18.6,6.2,24,7.4c5.4,1.3,12.8,2.6,22.2,3.9s14.9,2.1,16.3,2.2
                          c1.5,0.1,3.3,0.3,5.5,0.4l3.3,0.2v0.2h25.6v-0.2l14-1.3c9.3-0.9,17.6-2.1,25-3.3c7.3-1.3,14.9-3.1,22.8-5.5
                          c7.9-2.4,15.3-4.9,22.4-7.7c7.1-2.8,13.7-5.7,19.7-9c6.1-3.2,11.3-6,15.6-8.5c4.3-2.5,9.1-5.6,14.2-9.3c5.2-3.7,10-7.5,14.6-11.2
                          s7.1-5.9,7.7-6.4c0.6-0.6,4-4,10.2-10.2c6.2-6.3,11.3-11.9,15.4-16.8c4-5,8-10.3,12-15.9c3.9-5.6,8.3-12.5,13-20.6
                          s9.2-17.3,13.5-27.5s8-20.7,11-31.5c3-10.7,5.2-20.4,6.7-28.9s2.4-16.5,3-23.8c0.5-7.3,0.8-13.9,0.9-19.7s2.5-10.8,7.4-14.8
                          s9.9-8.5,15-13.7c5.1-5.1,7.9-8,8.3-8.7c0.5-0.7,0.9-1.1,1.1-1.2c0.3-0.1,2.1-2.3,5.3-6.7c3.3-4.4,5-6.6,5-6.7l0.1-0.1l0.2-0.4
                          l0.2-0.4l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.2-0.1l0.2-0.1V115l-1,0.3l-0.8,0.1
                          l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.6,0.2l-1.2,0.4l-10.6,3.6c-6.7,2.2-13.7,4.1-21,5.7l-11,2.4h-1.9l0.1-0.1l0.1-0.1l0.1-0.1
                          l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l1.9-1.3
                          c1.3-0.9,2.4-1.8,3.3-2.8s2.8-2.7,5.6-5.1c2.8-2.4,6-6,9.5-10.7s6.5-9.4,8.8-14s3.6-7.2,3.7-7.9c0.1-0.6,0.3-1.2,0.4-1.6l0.2-0.6
                          l0.2-0.4l0.2-0.4l0.2-0.6l0.2-0.6l0.1-0.6l0.1-0.6l-0.4,0.1l-0.4,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.4,0.2l-0.4,0.2
                          l-0.4,0.2l-0.4,0.2l-0.1,0.1c-0.1,0.1-0.8,0.4-1.9,1.2c-1.2,0.7-4.7,2.4-10.5,5s-11.6,5-17.5,7.1s-11.4,3.7-16.5,4.9
                          s-8.8,0.5-11.3-1.9c-2.4-2.4-5.2-4.7-8.3-6.9c-3.1-2.2-6.5-4.3-10.4-6.4c-3.8-2.1-7.7-3.9-11.8-5.5c-4-1.6-8.6-2.9-13.5-3.8
                          l-7.4-1.5h-20.5v0.1c0,0.1-1.7,0.4-5.1,0.9s-7.6,1.6-12.6,3.3c-5,1.7-10.4,4.2-16.3,7.4c-5.9,3.3-11.1,7-15.7,11.2
                          s-8.3,8.3-11.2,12.2c-2.9,3.9-5.2,7.4-7,10.5C221.5,163.3,231.3,307,142.9,364.1z" />

        <!-- wing1 -->
        <path id="wing1" fill="#5DA8DC" d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                          c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                          c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                          l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                          c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                          c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                          l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                          c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                          c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                          c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                          l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                          l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                          c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                          c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z" />
        <!-- wing2 -->
        <path id="wing2" fill="#5DA8DC" d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                          c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                          c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                          l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                          c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                          c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                          l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                          c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                          c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                          c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                          l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                          l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                          c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                          c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z" />
    </svg>
    </a>

    <a class="social-button linkedin" href="" target="_blank" >
    <!-- svg code for linkedin icon -->
      <svg class="linkedin-icon-footer" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8"
        stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>



    <a class="social-button instagram" href="" target="_blank" >
    <!-- svg code for instagram icon -->
      <svg class="instagram-icon-footer" x="0px" y="0px" viewBox="0 0 202.5 202.5"
        style="enable-background:new 0 0 202.5 202.5;">
        <circle id="littleCircle" class="st0" cx="101" cy="101.5" r="18.9" />
        <circle id="shutter" class="st0" cx="101" cy="101.5" r="8" />
        <circle id="lens" class="st0" cx="125.5" cy="78.6" r="2.9" />
        <path id="camera" class="st0" d="M79,60.5h44c10.5,0,19,8.5,19,19v44c0,10.5-8.5,19-19,19H79c-10.5,0-19-8.5-19-19v-44                                                                            C60,69,68.5,60.5,79,60.5z" />
      </svg>
    </a>

    <a class="social-button github" href="#" target="_blank">
    <!-- SVG code for Github icon -->
    <svg class="github-icon-footer" width="45px" height="45px" viewBox="0 0 300 300">
        <!-- body -->
        <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                    c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                    C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                    c-5,4.7-8.1,11.1-8.6,18" />
        <!-- arm                             -->
        <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                    c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
    </svg>
    </a>


    
    </div>
    </div>
</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

//function to scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Window Loads
$(function() {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
    bodyElement.append(upArrow);
    $("#btnScrollToTop").css("visibility", "hidden");

    //toggler hamburger functions
    const menuBtn = document.querySelector(".navbar-toggler");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
        if (!menuOpen) {
            menuBtn.classList.add("open");
            menuOpen = true;
        } else {
            menuBtn.classList.remove("open");
            menuOpen = false;
        }
    });
});

// function for toggling hamburger is-active class

$(function() {
    $("#js-hamburger").on("click", function() {
        $(this).toggleClass("is-active");
    });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear");
}
$(function() {
    $("a.nav-link").each(function() {
        if ($(this).prop("href") == window.location.href) {
            $(this).addClass("current-link");
        }
    });
});

//function to remove underline on hover

$(document).ready(function() {
    $("a.nav-link").hover(
        function() {
            $(this).removeClass("current-link");
        },
        function() {
            if ($(this).prop("href") == window.location.href) {
                $(this).addClass("current-link");
            }
        }
    );
});

// Function to remove scroll bar during preload
$(window).on("load", function() {
    setTimeout(function() {
        $(".no-scroll-preload").css("overflow", "visible");
    }, 1000);
    $(".loader-container").fadeOut(2500);
});

//send button animation
//if an error on somethings else

$(function submitAnimation() {
    const nom = document.querySelector("#nom")
    const emailAdress = document.querySelector("#email")
    const text = document.querySelector("#textArea")
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    $("#lnch").on("click", function() {

        // Check if the name field is empty or contains a number
        if (nom.value == "" || (/\d/.test(nom.value))) {
            swal("Erreur !", "Merci d'entrer un nom valide !", "error");
            return;
        }
        // Check if the email field is empty or email is not valid ex: test@@email.com
        else if (emailAdress.value == "" || !(emailPattern.test(emailAdress.value))) {
            swal("Erreur !", "Merci d'entrer un email valide !", "error");
            return;
        }
        // Check if the message field is empty
        else if (text.value == "") {
            swal("Erreur !", "Merci d'entrer un message valide !", "error");
            return;
        } else {

            setTimeout(function() {
                $("#lnch").addClass("launching").text("Sending");
                $("#lnch_btn").addClass("launching");
            }, 0);
            setTimeout(function() {
                $("#lnch").addClass("launched").text("SENT");
                $("#lnch_btn").addClass("launched");
            }, 1500);
            // Wait for 1.2 seconds so that the send button animation can be fully played before submitting the form
            setTimeout(() => {
                document.querySelector('form').submit();
            }, 1200);
        }
    });
});