var base = `<div class="application-main " data-commit-hovercards-enabled>
    <main>
        <div class="container-xl clearfix px-3 mt-4">
            <div class="h-card col-lg-3 col-md-4 col-12 float-md-left pr-md-3 pr-xl-6" itemscope
    itemtype="http://schema.org/Person">
    <div class="user-profile-sticky-bar js-user-profile-sticky-bar">
    </div>
    <div class="clearfix mb-2">
        <div class="float-left col-3 col-md-12 pr-3 pr-md-0"><img id= "avatar" alt="" width="260" height="260"
                    class="avatar width-full height-full avatar-user" src="https://drthomas246.github.io/images/17758220.png" /></div>
        <div class="float-left col-9 col-md-12 pl-2 pl-md-0">

            <div id="vcard-names-container" class="vcard-names-container pt-1 pt-md-3 pb-1 pb-md-3 js-sticky js-user-profile-sticky-fields">
                <h1 class="vcard-names">
                    <span class="p-name vcard-fullname d-block overflow-hidden"
                        itemprop="name">HoBoFoTo</span>
                    <span class="p-nickname vcard-username d-block"
                        itemprop="additionalName">Dr?Thomas</span>
                </h1>
            </div>
            <div class="d-none d-md-block">
                <div class="js-profile-editable-area">
                    <div class="p-note user-profile-bio js-user-profile-bio">
                        <div>Hobo everyday foto.</div>
                    </div>
                    <ul class="vcard-details mb-3"><li itemprop="country" aria-label="Country: Japan"
                            class="vcard-detail pt-1 css-truncate css-truncate-target"><svg class="octicon octicon-country"
                                viewBox="0 0 18 16" version="1.1" width="18" height="16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" />
                            </svg>
                            Japan
                        </li><li itemprop="location" aria-label="Email: Osaka"
                            class="vcard-detail pt-1 css-truncate css-truncate-target"><svg class="octicon octicon-location"
                                viewBox="0 0 18 16" version="1.1" width="18" height="16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            Osaka
                        </li><li itemprop="email" aria-label="Email: yoshihiro@yamahara.email"
                            class="vcard-detail pt-1 css-truncate css-truncate-target"><svg class="octicon octicon-mail"
                                viewBox="0 0 18 16" version="1.1" width="18" height="16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z" />
                            </svg>
                            <a class="u-email " href="mailto:yoshihiro@yamahara.email">yoshihiro@yamahara.email</a>
                        </li><li itemprop="url" data-test-selector="profile-website-url"
                            class="vcard-detail pt-1 css-truncate css-truncate-target"><svg class="octicon octicon-link"
                                viewBox="0 0 18 16" version="1.1" width="18" height="16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" />
                            </svg><a rel="nofollow me" href="http://hobofoto.s205.xrea.com/">http://hobofoto.s205.xrea.com/</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-top py-3 clearfix hide-sm hide-md">
                <h2 class="mb-1 h4">Organizations</h2><a class="avatar-group-item" data-hovercard-type="organization"
                    href="https://github.com/drthomas246">
                    <svg width="35" height="35" class="avatar github-octicon" viewBox="0 0 16 16" version="1.1"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                        </path>
                    </svg>
                </a><a class="avatar-group-item" data-hovercard-type="organization"
                    href="https://facebook.com/hobofoto.net">
                    <img src='https://drthomas246.github.io/images/facebook.png' class="avatar" width="35" height="35">
                </a><a class="avatar-group-item" data-hovercard-type="organization"
                    href="https://twitter.com/hobofoto_net">
                    <img src='https://drthomas246.github.io/images/twitter.png' class="avatar" width="35" height="35">
                </a><a class="avatar-group-item" data-hovercard-type="organization"
                                             href='https://drthomas246.github.io/index.xml'>
                    <img src='https://drthomas246.github.io/images/rss.png' class="avatar" width="38" height="38">
                </a>
            </div>
            <div data-test-selector="profile-sponsorships">
            </div>
        </div>
    </div>
</div>

<div class="col-lg-9 col-md-8 col-12 float-md-left pl-md-2">
    <div id="navDmy" style="display:none;"></div>
    <div id="UnderlineNav" class="UnderlineNav width-full user-profile-nav js-sticky top-0"
        style="position: static; top: 0px; left: 330.5px; width: 911.5px;">
        <nav id="UnderlineNav-body" class="UnderlineNav-body" aria-label="User profile">
            <a aria-current="page" class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 " href="https://drthomas246.github.io/"><svg class="octicon octicon-book UnderlineNav-octicon hide-lg hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z" />&lt;</svg>
                Overview
            </a><a class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 " href='https://drthomas246.github.io/blog/'><svg class="octicon octicon-repo UnderlineNav-octicon hide-lg hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" /></svg>
                Blogs
                <span class="Counter hide-lg hide-md hide-sm">
                    13
                </span>
            </a>
            <a class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 " href='https://drthomas246.github.io/math/'><svg class="octicon octicon-repo UnderlineNav-octicon hide-lg hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" /></svg>
                Math
                <span class="Counter hide-lg hide-md hide-sm">
                    8
                </span>
            </a>
            <a class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 " href='https://drthomas246.github.io/review/'><svg class="octicon octicon-repo UnderlineNav-octicon hide-lg hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" /></svg>
                Review
                <span class="Counter hide-lg hide-md hide-sm">
                    1
                </span>
            </a>
            <a class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 " href='https://drthomas246.github.io/novel/'><svg class="octicon octicon-project UnderlineNav-octicon hide-lg hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z" /></svg>
                Novel
            </a>
            <a class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 " href='https://drthomas246.github.io/software/'><svg class="octicon octicon-package UnderlineNav-octicon hide-lg hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z" /></svg>
                Software
            </a>
            <a class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 " href='https://drthomas246.github.io/contact/'><svg class="octicon octicon-package  UnderlineNav-octicon hide-lg hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z" /></svg>
                Contact
            </a>
            <a class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 " href='https://drthomas246.github.io/about/'><svg class="octicon octicon-package UnderlineNav-octicon hide-lg hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z" /></svg>
                About
            </a>
        </nav>
    </div>

    <div class="position-relative">
        <div id="user-repositories-list">`