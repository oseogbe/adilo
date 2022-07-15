<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid justify-content-between">
            <!-- Left elements -->
            <div class="d-flex my-2 my-sm-0">
                <!-- Toggler -->
                <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1"
                    class="btn shadow-0 p-0 ms-2 me-3 d-block d-xl-none" aria-controls="#sidenav-1" aria-haspopup="true">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
                <!-- Brand -->
                <router-link 
                    :to="{name: 'Home'}"
                    class="navbar-brand logo"
                >
                    <span>
                        <img src="@icons/swarm.svg" alt="swarm">
                    </span>
                    <h1 class="name">Adilo</h1>
                </router-link>
            </div>
            <!-- Left elements -->

            <!-- Center elements -->
            <ul class="navbar-nav flex-row d-none d-md-flex">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Projects
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tools & App
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <router-link :to="{name: 'Snapbyte'}" class="dropdown-item">Snapbyte Recorder</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'AudioBounce'}" class="dropdown-item">AudioBounce</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'SugarVoice'}" class="dropdown-item" style="border-bottom: none">Sugar Voice</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Channels</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Analytics</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Settings</a>
                </li>
            </ul>
            <!-- Center elements -->

            <!-- Right elements -->
            <div class="d-flex align-items-center">
                <div class="help">Help</div>

                <div class="profile">
                    <img src="@images/profile-pic.jpg" alt="profile-pic">
                    <div>
                        <h3>Cody Fisher</h3>
                        <p>codyfisher@gmail.com</p>
                    </div>
                </div>
            </div>
            <!-- Right elements -->
        </div>
    </nav>
    <!-- Navbar -->
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
    nav {
        height: 90px;
        background: #ffffff !important;
    }

    nav .logo {
        display: flex;
        align-items: center;

        span {
            background: #fbbd71;
            border-radius: 10px;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .name {
            color: #21455E;
            font-size: 28px;
            font-weight: 700;
            line-height: 32px;
            font-family: Helvetica, sans-serif;
            padding-left: 1rem;
            padding-top: 10px;
        }
    }

    nav .nav-item .nav-link {
        padding: 0 1rem !important;
        color: #707070 !important;
        font-weight: 500;
    }

    nav .nav-item .nav-link, 
    nav .nav-item .active {
        &:hover, 
        &:focus {
            color: #21455E !important;
            font-weight: 600;
        }
       
    }

    nav .nav-item .dropdown-menu {
        border: 1px solid #E2E5ED;
        border-radius: 8px;

        .dropdown-item {
            padding: 0.75rem 1rem;
            background: #ffffff;
            font-size: 16px;
            line-height: 25px;
            border-bottom: 1px solid #E2E5ED;
            color: #21455E;

            &:hover {
                color: #0DABD8;
            }
        }
    }

    nav .help {
        color: #21455E;
        margin-right: 1rem;
        font-weight: 500;
    }

    nav .profile {
        display: flex;
        padding-left: 1rem;
        border-left: 2px solid #707070;

        img {
            margin-right: 5px;
        }

        h3 {
            font-size: 16px;
            font-weight: 700;
        }

        p {
            font-size: 12px;
            color: #707070;
            margin-bottom: 0;
        }
    }


    @media (min-width: 992px) {
        nav {
            padding-left: 3.6rem;
            padding-right: 8.6rem;
            border-bottom: 2px solid #E2E5ED;

            .container {
                display: flex;
                justify-content: space-between !important;
            }
        }
    }
</style>