<script setup>
    import { RouterLink } from 'vue-router'
    import { urlSignInName } from '../lib/urlName'

    const toSignIn = { name: urlSignInName }
</script>

<template>
    <!-- Header-->
    <header class="bg-primary bg-gradient text-white pb-5 pt-5">
        <div class="container px-4 text-center">
            <h1 class="fw-bolder">Información general</h1>
            <p class="lead">
                Esta sección lo ayudará a saber más sobre el proyecto y su modo de uso. Presione "comenzar"
                para iniciar sesión.
            </p>
            <RouterLink class="btn btn-lg btn-light" :to="toSignIn">Comenzar</RouterLink>
        </div>
    </header>
    <!-- About section-->
    <section id="about" class="pt-5 pb-5">
        <div class="container px-4">
            <div class="row">
                <div class="col-lg">
                    <div class="pt-3 pb-3">
                        <h4> ¿De qué trata este proyecto? </h4>
                    </div>
                    <p class="text-justify">
                        Trata sobre el proceso de extracción de características de archivos de audios. 
                        Pensado en aquellas personas que necesitan entrenar redes neuronales convolucionales (CNNs)
                        clasificadoras de audios, basadas por ejemplo en imagénes de espectrogramas o directamente
                        usando las matrices de distribución de energía,pero no tienen el conocimiento o herramientas
                        para generarlos.
                    </p>
                </div>
                <div class="col-lg">
                </div>
            </div>
            <div class="row">
                <div class="col-lg">
                </div>
                <div class="col-lg">
                    <h4 class="pt-3 pb-3"> ¿En qué consiste? </h4>
                    <p class="text-justify"> 
                        Consiste en una aplicación web, donde los usuarios deberán registrarse en ella para acceder a las
                        funcionalidades. Este, podrá elegir algunas características a extraer, por ejemplo: espectrogramas,
                        espectrogramas de MEL, amplitud o coeficientes cepstrales de MEL (MFCCs). Luego de ello, deberá
                        cargar un archivo de audio en la aplicación en formato .wav o .mp3, ajustará algunos parámetros
                        usados por los extractores de características que generarán una imagen con el contenido deseado,
                        para finalmente descargar el resultado como una imagen o un archivo generado por el módulo pickle
                        de python.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg">
                    <h4 class="pt-3 pb-3"> Navegación</h4>
                    <p class="text-justify"> 
                        La barra de navegación de la aplicación, contiene tres opciones:
                    </p>
                    <ol>
                        <li> Inicio: Redirige a la vista de inicio de la página. </li>
                        <li> Descripción: Corresponde a esta sección. </li>
                        <li> 
                            Características: Esta sección muestra los tipos de características que
                            pueden ser extraidos de un archivo de audio.
                        </li>
                    </ol>
                </div>
                <div class="col-lg">
                </div>
            </div>
            <div class="row">
                <div class="col-lg"></div>
                <div class="col-lg">
                    <h4 class="pt-3 pb-3"> ¿Cómo extraer características? </h4>
                    <ol>
                        <li>Inicie sesión, en caso de no estar registrado, primero registrese.</li>
                        <li>En la barra de navegación pulse Características.</li>
                        <li>
                            A continuación, podrá ver varias opciones que indican el tipo de característica a extraer,
                            apriete el botón ¡Comenzar! para iniciar el proceso.
                        </li>
                        <li>Cargue su archivo de audio, en formato .wav o .mp3.</li>
                        <li>Ajuste los parámetros solicitados.</li>
                        <li>Descargue los resultados en los formatos establecidos.</li>
                        <li>De ser necesario guarde el archivo de audio y/o los resultados en la aplicación.</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>