<template>
  <div id="app">
    <div class=routes>
        <router-link  class="my-route" to='/'>ბილეთბი</router-link>
        <router-link class="my-route" to='/learn'>თეორია</router-link>
        <a href="" class="category-mobile">
            <svg
                enable-background="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32"/></g><g id="category"><polygon points="20,20 20,12 12,12 12,14 8,14 8,10 10,10 10,2 2,2 2,10 6,10 6,26 12,26 12,30 20,30 20,22 12,22 12,24.001 8,24    8,16 12,16 12,20  "/></g>
            </svg>
        </a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
    /* http://meyerweb.com/eric/tools/css/reset/
       v2.0 | 20110126
       License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    html {
        font-family: Verdana;
        font-size: 16px;
    }

    #app{
        width:89%;
        max-width:1600px;
        margin:0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .page {
        padding: 6px;
        color: #e4e6eb;
        margin-top: 22px;
        font-size: 22px;
        max-width: 1200px
    }
    .routes{
        margin-top: 22px;
        display:flex;
    }
    .my-route {
        background: #3a3b3c;
        color: #e4e6eb;
        text-decoration: none;
        padding: 6px;
        margin-right: 3px;
        font-size: 1.6rem;
        width: 200px;
        height: 2rem;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-bottom:0.8rem;
    }
    .my-route.router-link-exact-active {
        background: #263951;
    }
    .category-mobile{
        display:none;
    }
    .page {
        padding-bottom:12rem;

            h2{
                font-weight:600;
                font-size:1.8rem;
                margin-bottom:1.25rem;
                margin-top:1.125rem;
            }
            p{
                line-height:140%;
                margin-bottom: 1rem;
            }
        }
    @media screen and (max-width:960px){
        #app{
            width: calc(100% - 30px);
            max-width: calc(100% - 30px);
        }
        .routes{
            display: flex;
            align-items:center;
            grid-column-gap: 4px;
            width: calc(100% - 30px);
        }
        .my-route{
            display:flex;
            align-items: center;
            justify-content: center;
            font-size:1rem;
            height:30px;
            width: calc(50% - 23px);
            margin-right:3px;
            padding:0;

        }
        .category-mobile{
            display: flex;
            align-items:center;
            justify-content:center;
            width: 40px!important;
            height: 30px!important;
            // margin-left:auto!important;
            background: #3a3b3c;
            padding:0!important;
            svg{
                fill:white;
                width: 22px;
                height: 24px;
                margin-left: 4px;

            }
        }
        .page {
            padding: 0;
            color: #e4e6eb;
            margin-top: 1.5rem;
            font-size: 1rem;
            width: calc(100% - 30px);
            padding-bottom:6rem;

            h2{
                margin-top:2rem;
                font-weight:600;
                font-size:1.125rem;
                margin-bottom:1rem;
            }
            p{
                line-height:140%;
                margin-bottom:1rem;
            }
        }
        iframe{
            width:300px!important;
            height:172px!important;
        }
    }

</style>
