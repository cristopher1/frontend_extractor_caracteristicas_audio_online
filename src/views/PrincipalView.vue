<template>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <div class="sb-sidenav-menu-heading">
                            <div class="sb-nav-link-icon"><i class="bi bi-house-fill"></i>
                                Menú
                            </div>
                        </div>
                        <a class="nav-link menu-opcion" id="cargar-audio" href="#">
                            <div class="sb-nav-link-icon"><i class="bi bi-upload"></i></div>
                            Cargar audio
                        </a>
                        <a class="nav-link menu-opcion" id="descargar-resultado" href="#" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <div class="sb-nav-link-icon"><i class="bi bi-download"></i></div>
                            Descargar resultado
                        </a>
                        <div class="sb-sidenav-menu-heading">
                            <div class="sb-nav-link-icon"><i class="fas fa-cogs"></i> Extraer </div>
                        </div>
                        <a class="nav-link menu-opcion" id="serie-tiempo-amplitud" href="#">
                            <div class="sb-nav-link-icon"></div>
                            Serie de tiempo de la amplitud
                        </a>
                        <a class="nav-link menu-opcion" id="espectrograma" href="#">
                            <div class="sb-nav-link-icon"></div>
                            Espectrograma
                        </a>
                        <a class="nav-link menu-opcion" id="espectrograma-mel" href="#">
                            <div class="sb-nav-link-icon"></div>
                            Espectrograma de Mel
                        </a>
                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts"
                            aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"></div>
                            Coeficientes ceptrales en la frecuencia de Mel
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link menu-opcion" id="mfcc-amplitud" href="#">A partir de la amplitud</a>
                                <a class="nav-link menu-opcion" id="mfcc-mel" href="#">A partir del espectrograma de Mel</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
                <input id="api-audios" type="hidden" value="{% url 'list_api_view_audios' %}">
                <input id="view-actual" type="hidden" value="view-cargar-audio">
                <div class="container-fluid p-5 my-5">
                    <div class="row">
                        <div class="col-lg-6">
                        </div>
                        <div class="col-lg-6">
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/css/views/principalView.css';
</style>